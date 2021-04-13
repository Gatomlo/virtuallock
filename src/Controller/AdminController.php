<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\Lock;
use App\Repository\LockRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Form\LockType;
use App\Repository\UserRepository;
use App\Entity\Parameters;
use App\Form\ParameterType;
use App\Repository\ParametersRepository;
use Symfony\Component\Config\Definition\Exception\Exception;

class AdminController extends AbstractController
{
    /**
    * @Route("/displayAllUsers", name="admin_home")
    */
      public function displayAllUsersAction(UserRepository $userRepo)
      {
          $users = $userRepo-> findBy(array(), array('name' => 'ASC'));
          return $this->render('admin/displayAllUsers.html.twig',[
            'users'=>$users
          ]);
        }
    /**
    * @Route("/parameters", name="parameters")
    */
     public function parametersAction(ParametersRepository $paramRepo,Request $request)
     {
       $parameters = $paramRepo-> findAll();
       $parameter = new Parameters();
       $form = $this->get('form.factory')->create(ParameterType::class, $parameter);
        // Si la requête est en POST
        if ($request->isMethod('POST')) {
          $form->handleRequest($request);
          if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $paramId = $form->get('id')->getData();
            $newValue = $form->get('value')->getData();
            $actualParam = $paramRepo->findOneBy(array('id'=> $paramId));
            $actualParam->setValue($newValue);
            $em->persist($actualParam);
            $em->flush();
            return $this->redirectToRoute('parameters');
          }
        }

        return $this->render('admin/parameters.html.twig',array(
         'form' => $form->createView(),
         'parameters'=>$parameters
         ));
      }

    /**
    * @Route("/promoteUser", name="promoteUser")
    */
      public function promoteUserAction(UserRepository $userRepo,$id)
      {

          $user = $userRepo-> findOneBy(['id'=> $id]);
          $role = ['ROLE_ADMIN'];
          $user->setRoles($role);
          $em = $this->getDoctrine()->getManager();
          $em->persist($user);
          $em->flush();
          $this->addFlash('messageFromChange', 'L\'utilisateur a été promu "Administrateur"');
          return $this->redirectToRoute('displayAllUsers');
      }

}
