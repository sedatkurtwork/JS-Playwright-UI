package tests.NENI;

public abstract class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
/*
    public abstract void makeSound();
*/


    // public void makeSound2() {
    // System.out.println(name + " says ");
    // }

    // // TODO: add makeSound method

    // public void makeSound() {
    // System.out.println(name + " makes a sound");
    // }

    // public void makeSound(String sound) {
    // System.out.println(name + " says " + sound);
    // }

    // public String makeSound2(String sound) {
    // return name + " says " + sound;
    // }

    public void makeSound() {
        System.out.println("sound");
        System.out.println("Animal says null");
    }

    @Override
    public String toString() {
        return "Animal [name='" + name + "', age=" + age + "]";
    }

    // public abstract void makeSound() {
    // System.out.println("Animal sound");
    // }
    // // public void makeSound2() {
    // // System.out.println(name + " says ");
    // // }

}
