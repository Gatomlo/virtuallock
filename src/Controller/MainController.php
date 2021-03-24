<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\Lock;
use App\Entity\Category;
use App\Repository\LockRepository;
use App\Repository\CategoryRepository;
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
      * @Route("/searchLock", name="searchLock")
      */
        public function searchLockAction(LockRepository $locksRepo,Request $request)
        {
          if ($request->isMethod('POST')) {
            $serial = $request->get('serial');
            $lock = $locksRepo-> findOneBy(['serial'=> $serial]);
            if($lock){
              return $this->redirectToRoute('displayLock', array(
                 'serial' => $serial,
              ));
            }
            else{
              $this->addFlash('messagefromDelete', 'Pas de cadenas correspondant!');
              return $this->redirectToRoute('searchLock');
            }
          }
          return $this->render('main/searchLock.html.twig');
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
        public function addLockAction(CategoryRepository $categoryRepo,Request $request)
        {
          $lock = new Lock();
          $form = $this->createForm(LockType::class, $lock);
          // Si la requête est en POST
          if ($request->isMethod('POST')) {
            $form->handleRequest($request);

            if ($form->isValid()) {
              $em = $this->getDoctrine()->getManager();
              $category = $form->get('category')->getData();
              $existingCategory = $categoryRepo->findOneBy(array('name'=> $category));
              if (empty($existingCategory)){
                $newCategory = new Category();
                $newCategory->setName($category);
                $newCategory->setUser($this->getUser());
                $em->persist($newCategory);
                $lock->setCategory($newCategory);
              }
              else {
                $lock->setCategory($existingCategory);
              }
              if($form->get('solution')->getData() != ''){
                $lock->SetUser($this->getUser());
                $lock->SetSerial(uniqid($this->getUser()->getId()));
                $em->persist($lock);
                $em->flush();
                $this->addFlash('messageFromAdding', 'Le cadenas a été créé.');
                return $this->redirectToRoute('displayAllLocks');
              }
            }
          }
          return $this->render('main/addLock.html.twig', array(
           'form' => $form->createView(),
           'status' => 'Création' ));
        }
        /**
        * @Route("/editLock/{id}", name="editLock")
        */
          public function editLockAction(Request $request, LockRepository $locksRepo,CategoryRepository $categoryRepo, $id)
          {
            $em = $this->getDoctrine()->getManager();
            $lock = $locksRepo-> findOneBy(['id'=> $id]);
            if( $this->getUser() == $lock->getUser() or $this->isGranted('ROLE_ADMIN')){
              $actualCategory = $lock->getCategory()->getName();
              $form = $this->get('form.factory')->create(LockType::class, $lock, array('actualCategory'=>$actualCategory));
              if ($request->isMethod('POST')) {
                $form->handleRequest($request);
                if ($form->isValid()) {
                  $category = $form->get('category')->getData();
                  $existingCategory = $categoryRepo->findOneBy(array('name'=> $category));
                  if (empty($existingCategory)){
                    $newCategory = new Category();
                    $newCategory->setName($category);
                    $newCategory->setUser($this->getUser());
                    $em->persist($newCategory);
                    $lock->setCategory($newCategory);
                  }
                  else {
                    $lock->setCategory($existingCategory);
                  }
                  $em->persist($lock);
                  $em->flush();
                  return $this->redirectToRoute('displayAllLocks');
               }}
               return $this->render('main/addLock.html.twig', array(
                'form' => $form->createView(),
                'status' => 'Edition'));
            }
            else{
              $this->addFlash('messagefromChange', 'Le cadenas a été modifié.');
              return $this->redirectToRoute('displayAllLocks');
            }

          }
          /**
          * @Route("/deleteLock/{id}", name="deleteLock")
          */
            public function deleteLockAction(LockRepository $locksRepo, $id)
            {
              $em = $this->getDoctrine()->getManager();
              $lock = $locksRepo-> findOneBy(['id'=> $id]);
              if( $this->getUser() == $lock->getUser()){
                $em->remove($lock);
                $em->flush();
              }
              $this->addFlash('messagefromDelete', 'Le cadenas a été supprimé.');
              return $this->redirectToRoute('displayAllLocks');
            }

          /**
          * @Route("/profil}", name="profil")
          */
            public function profilAction()
            {
              return $this->render('main/profil.html.twig');
            }

            /**
            * @Route("/secret/{id}/{$userSoluce}", name="secret")
            */
              public function testSoluceAction(LockRepository $locksRepo, $id, $userSoluce)
              {
                $lock = $locksRepo-> findOneBy(['id'=> $id]);
                $goodSoluce = $lock ->getSolution();
                if($goodSoluce == $userSoluce){
                  if($lock->getUrl() == ''){
                    return $this->render('locks/contentSoluce.html.twig',array(
                      'lock'=>$lock
                    ));
                  }
                  else{
                    return $this->redirect($lock->getUrl(), 301);
                  }
                }
              }
}
