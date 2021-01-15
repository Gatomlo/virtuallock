<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Repository\CategoryRepository;
use Gatomlo\ProjectManagerBundle\Entity\Tags;
use Symfony\Component\HttpFoundation\JsonResponse;

class CategoryController extends AbstractController
{
    /**
     * @Route("/categories", name="category")
     */
    public function index(): Response
    {
        return $this->render('tags/index.html.twig', [
            'controller_name' => 'TagsController',
        ]);
    }
    public function jsonListCategoriesAction(CategoryRepository $categoryRepo)
 {
     $em = $this->getDoctrine()->getManager();
     $categories = $categoryRepo-> findBy(
       array('user'=>$this->getUser())
     );
     $list_categories = array();
     foreach ($categories as $category){
         $obj['id'] = $category->getId();
         $obj['text'] = $category->getName();
         array_push($list_categories,$obj);
     }
     return new JsonResponse($list_categories);
 }
 /**
 * @Route("/deleteCategory/{id}", name="deleteCategory")
 */
   public function deleteCategoryAction(CategoryRepository $categoryRepo, $id)
   {
     $em = $this->getDoctrine()->getManager();
     $category = $categoryRepo-> findOneBy(['id'=> $id]);
     if( $this->getUser() == $category->getUser()){
       $em->remove($category);
       $em->flush();
     }
     $this->addFlash('messagefromDelete', 'La catégorie a été supprimée.');
     return $this->redirectToRoute('displayAllLocks');
   }

   /**
   * @Route("/editCategory/{id}/{newName}", name="editCategory")
   */
     public function editCategoryAction(CategoryRepository $categoryRepo, $id, $newName)
     {
       $em = $this->getDoctrine()->getManager();
       $category = $categoryRepo-> findOneBy(['id'=> $id]);
       if( $this->getUser() == $category->getUser()){
         $category->setName($newName);
         $em->persist($category);
         $em->flush();
       }
       $this->addFlash('messagefromChange', 'La catégorie a été modifiée.');
       return $this->redirectToRoute('displayAllLocks');
     }
}
