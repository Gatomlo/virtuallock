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
