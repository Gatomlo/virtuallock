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

class ParameterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('value',null,array(
              'label'=>'Valeur',
              'attr'=> array('class'=>'form-control')
            ))
            ->add('id',HiddenType::class, array(
              'required' => true,
              'label'=>'id',
              'mapped'=> false,
              'attr'=> array('class'=>'form-control')
            ))
            ->add('save',      SubmitType::class,array(
              'label'=>'Enregistrer',
              'attr' => array('class'=>'btn btn-outline-secondary')
            ));
          }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([]);
    }
}
