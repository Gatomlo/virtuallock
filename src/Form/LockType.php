<?php

namespace App\Form;

use App\Entity\Lock;
use App\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;

class LockType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',null,array(
              'label'=>'Nom du cadenas',
              'attr'=> array('class'=>'form-control')
            ))
            // ->add('category',EntityType::class,array(
            //   'label'=>'Catégorie',
            //   'class' => Category::class,
            //   'choice_label' => 'name',
            //   'attr'=> array('class'=>'form-control'),
            //   'placeholder' => 'Nouvelle catégorie',
            // ))
            ->add('category',TextType::class,array(
              'mapped'=> false,
              'label'=>'Catégorie',
              'attr'=> array('class'=>'category '),
              'data' => $options['actualCategory'],
            ))
            ->add('solution',HiddenType::class, array(
              'required' => true,
              'label'=>'solution',
              'attr'=> array('class'=>'form-control')
            ))
            ->add('type',ChoiceType::class,array(
              'label' => 'Type de cadenas',
              'attr'=> array('class'=>'form-control'),
              'choices'  => [
                'Login et mot de passe' => 'login',
                'Code couleur' => 'color',
                'Mot de passe' => 'password',
                'Code directionnel' => 'directional',
                'Code chiffré' => 'digicode',
                'Code à Schema' => 'diagram',
                'Code à interrupteurs' => 'switch',
                'Code musical' => 'piano' ,
                'Code à réglette' => 'slider' ,
                'Code calendrier'=>'date'],
                'placeholder' => 'Choisissez un cadenas',
            ))
            ->add('intro',null,array(
              'label'=>'Texte d\'introduction',
              'attr'=> array('class'=>'form-control summernote','id'=>'summernoteTest')
            ))
            ->add('finalTexte',null,array(
              'label'=>'Texte final',
              'attr'=> array('class'=>'form-control summernote')
            ))
            ->add('url',UrlType::class,array(
              'required'=> false,
              'label'=> 'URL de redirection',
              'attr'=> array('class'=>'form-control')
            ))
            ->add('save',      SubmitType::class,array(
              'label'=>'Enregistrer',
              'attr' => array('class'=>'btn btn-primary')
            ));
          }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
          'actualCategory' => '',
        ));
    }
}
