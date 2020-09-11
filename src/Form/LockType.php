<?php

namespace App\Form;

use App\Entity\Lock;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class LockType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',null,array(
              'label'=>'Nom du cadenas',
              'attr'=> array('class'=>'form-control')
            ))
            ->add('solution',TextType::class, array(
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
                'Code musical' => 'piano' ],
                'placeholder' => 'Choisissez un cadenas',
            ))
            ->add('intro',null,array(
              'label'=>'Texte d\'introduction',
              'attr'=> array('class'=>'form-control')
            ))
            ->add('finalTexte',null,array(
              'label'=>'Texte final',
              'attr'=> array('class'=>'form-control')
            ))
            ->add('url',null,array(
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
        $resolver->setDefaults([]);
    }
}
