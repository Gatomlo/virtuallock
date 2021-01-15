<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
class Category
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Lock::class, mappedBy="category", cascade={"persist", "remove"})
     */
    private $locks;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="categories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function __construct()
    {
        $this->locks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Lock[]
     */
    public function getLocks(): Collection
    {
        return $this->locks;
    }

    public function addLock(Lock $lock): self
    {
        if (!$this->locks->contains($lock)) {
            $this->locks[] = $lock;
            $lock->setCategory($this);
        }

        return $this;
    }

    public function removeLock(Lock $lock): self
    {
        if ($this->locks->removeElement($lock)) {
            // set the owning side to null (unless already changed)
            if ($lock->getCategory() === $this) {
                $lock->setCategory(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
