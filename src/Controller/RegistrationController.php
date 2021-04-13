<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\EmailVerifier;
use App\Security\UsersAuthenticator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use App\Repository\UserRepository;

class RegistrationController extends AbstractController
{
    private $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }
    /**
     * @Route("/registerFromAdmin", name="app_registerFromAdmin")
     */
    public function registerFromAdmin(Request $request, UserPasswordEncoderInterface $passwordEncoder,UserRepository $userRepo): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();


            $users = $userRepo-> findBy(array(), array('name' => 'ASC'));
            return $this->render('admin/displayAllUsers.html.twig',[
              'users'=>$users
            ]);

        }

        return $this->render('registration/registerFromAdmin.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function registerAction(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, UsersAuthenticator $authenticator): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // generate a signed url and email it to the user
            // $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
            //     (new TemplatedEmail())
            //         ->from(new Address('no-reply@virtualock.org', 'Virtualock'))
            //         ->to($user->getEmail())
            //         ->subject('Merci de confirmer votre Email')
            //         ->htmlTemplate('registration/confirmation_email.html.twig')
            // );
            // do anything else you need here, like send an email

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
    /**
     * @Route("/editProfil", name="editProfil")
     */
    public function editProfilAction(Request $request, UserPasswordEncoderInterface $passwordEncoder, UserRepository $userRepo,GuardAuthenticatorHandler $guardHandler, UsersAuthenticator $authenticator,$id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $user = $userRepo-> findOneBy(['id'=> $id]);
        if($this->getUser() == $user){
          $form = $this->createForm(RegistrationFormType::class, $user);
          $form->handleRequest($request);
          if ($form->isSubmitted() && $form->isValid()) {
              // encode the plain password
              $user->setPassword(
                  $passwordEncoder->encodePassword(
                      $user,
                      $form->get('plainPassword')->getData()
                  )
              );
              $entityManager = $this->getDoctrine()->getManager();
              $entityManager->persist($user);
              $entityManager->flush();
              return $this->render('main/profil.html.twig');
          }
          return $this->render('registration/editProfil.html.twig', [
              'registrationForm' => $form->createView(),
          ]);
      }
      $this->addFlash('messageFromChange', 'Votre profil a été mis à jour.');
      return $this->redirectToRoute('profil');
    }
    /**
     * @Route("/deleteProfil", name="deleteProfil")
     */
    public function deleteProfilAction($id, UserRepository $userRepo)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $userRepo-> findOneBy(['id'=> $id]);
        if($this->getUser() == $user or $this->isGranted('ROLE_ADMIN')){
          if($user->getId() != 1){
            if(!$this->isGranted('ROLE_ADMIN')){
              $this->container->get('security.token_storage')->setToken(null);
            }
            $em->remove($user);
            $em->flush();
          }
          else{
            $this->addFlash('messagefromDelete', 'L\'administrateur principal ne peut pas être supprimé');
            return $this->redirectToRoute('displayAllUsers');
          }
        }
        if($this->isGranted('ROLE_ADMIN')){
          $this->addFlash('messagefromDelete', 'L\'utilisateur a été supprimé');
          return $this->redirectToRoute('displayAllUsers');
        }
        return $this->redirectToRoute('index');
    }
    /**
     * @Route("/verify/email", name="app_verify_email")
     */
    public function verifyUserEmail(Request $request): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $exception->getReason());

            return $this->redirectToRoute('app_register');
        }

        $this->addFlash('message', 'Votre adresse email a bien été vérifiée.');

        return $this->redirectToRoute('app_home');
    }
}
