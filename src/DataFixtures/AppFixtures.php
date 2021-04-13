<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use App\Entity\Parameters;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $role = ['ROLE_ADMIN'];
        $user->setRoles($role);
        $user->setName('Admin');
        $user->setFirstname('Admin');
        $user->setEmail('admin@admin.be');
        $password = $this->encoder->encodePassword($user, 'administrator');
        $user->setPassword($password);
        $manager->persist($user);

        $parameter = new Parameters();
        $parameter->setName('moodleplateforms');
        $manager->persist($parameter);

        $manager->flush();
    }
}
