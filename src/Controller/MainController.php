<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\Lock;
use App\Repository\LockRepository;


class MainController extends AbstractController
{
  /**
  * @Route("/", name="app_home")
  */
    public function indexAction()
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
    * @Route("/", name="displayAlllocks")
    */
      public function displayAllLocksAction(LockRepository $locksRepo)
      {

          return $this->render('main/displayAllLocks.html.twig', [
              'locks' => $locksRepo-> findAll(),
          ]);
      }

    /**
    * @Route("/", name="displaylock")
    */
      public function displayLockAction(LockRepository $locksRepo, $serial)
      {
        $lock = $locksRepo-> findOneBy(['serial'=> $serial]);
        if(!$lock){
            throw new notFoundHttpException('Pas de cadenas correspondant');
        }
        return $this->render('locks/'.$lock->getType().'.html.twig', [
          'lock' => $lock,
        ]);
      }
}
