<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\Lock;
use App\Repository\LockRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Form\LockType;


class MainController extends AbstractController
{


    /**
    * @Route("/displayAllLocks", name="app_home")
    */
      public function displayAllLocksAction(LockRepository $locksRepo)
      {

          return $this->render('main/displayAllLocks.html.twig');
      }

    /**
    * @Route("/displayLock/{serial}", name="displaylock")
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

      /**
      * @Route("/addLock", name="addLock")
      */
        public function addLockAction(Request $request)
        {
          $lock = new Lock();
          $form = $this->createForm(LockType::class, $lock);
          // Si la requête est en POST
          if ($request->isMethod('POST')) {
            $form->handleRequest($request);

            if ($form->isValid()) {
              $em = $this->getDoctrine()->getManager();
              $lock->SetUser($this->getUser());
              $lock->SetSerial(uniqid($this->getUser()->getId()));
              $em->persist($lock);
              $em->flush();
              return $this->redirectToRoute('displayAllLocks');
            }
          }
          return $this->render('main/addLock.html.twig', array(
           'form' => $form->createView(), ));
        }

        /**
        * @Route("/editLock/{id}", name="editLock")
        */
          public function editLockAction(Request $request, LockRepository $locksRepo, $id)
          {
            $em = $this->getDoctrine()->getManager();
            $lock = $locksRepo-> findOneBy(['id'=> $id]);
            $form = $this->get('form.factory')->create(LockType::class, $lock);
            if ($request->isMethod('POST')) {
              $form->handleRequest($request);
              if ($form->isValid()) {
                $em->persist($lock);
                $em->flush();
                return $this->redirectToRoute('displayAllLocks');
             }}
             return $this->render('main/addLock.html.twig', array(
              'form' => $form->createView(), ));
          }

          /**
          * @Route("/deleteLock/{id}", name="deleteLock")
          */
            public function deleteLockAction(LockRepository $locksRepo, $id)
            {
              $em = $this->getDoctrine()->getManager();
              $lock = $locksRepo-> findOneBy(['id'=> $id]);
              $em->remove($lock);
              $em->flush();
              return $this->redirectToRoute('displayAllLocks');
            }
}
