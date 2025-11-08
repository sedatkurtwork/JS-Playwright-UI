package tests.NENI;

// public abstract class Cat extends Animal {
public class Cat extends Animal {
    private String owner;
    public Cat(String name, int age, String owner) {
        super(name, age);
        this.owner = owner;
    }

    @Override
    public void makeSound() {
        super.makeSound();
        System.out.println("sound");
        System.out.println("Meow!");
        System.out.println(getName() + " says Meow!");
        // System.out.println("Roar!");
    }
}

class BigCat extends Cat {
    public BigCat(String name, int age, String owner) {
        super(name, age, owner);
    }

    @Override
    public void makeSound() {
        super.makeSound(); // optional, or remove if you want only roar
        System.out.println("sound");
        System.out.println("Roar");
        System.out.println(getName() + " says Roar");
    }

}
