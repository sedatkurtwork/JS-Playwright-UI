package tests.NENI;

import java.util.*;

// =======================
// Base abstract class
// =======================
abstract class Coffee {
    protected String name;
    protected boolean iced;

    public Coffee(String name, boolean iced) {
        this.name = name;
        this.iced = iced;
    }

    public String getName() {
        return name + (iced ? " (Iced)" : "");
    }

    public abstract void prepare();
}

// =======================
// Coffee subclasses
// =======================
class Cappuccino extends Coffee {
    public Cappuccino() {
        super("Cappuccino", false);
    }

    @Override
    public void prepare() {
        System.out.println("Preparing a warm, frothy Cappuccino...");
    }
}

class LatteMacchiato extends Coffee {
    private String flavor; // plain, vanilla, lavender

    public LatteMacchiato(String flavor, boolean iced) {
        super("Latte Macchiato", iced);
        this.flavor = flavor;
    }

    @Override
    public void prepare() {
        System.out.println("Preparing a " + (iced ? "chilled " : "warm ") + flavor + " Latte Macchiato...");
    }

    @Override
    public String getName() {
        return flavor + " " + super.getName();
    }
}

class Affogato extends Coffee {
    public Affogato() {
        super("Affogato", false);
    }

    @Override
    public void prepare() {
        System.out.println("Scooping ice cream and pouring espresso for an Affogato...");
    }
}

class DripCoffee extends Coffee {
    public DripCoffee(boolean iced) {
        super("Drip Coffee", iced);
    }

    @Override
    public void prepare() {
        System.out.println("Brewing a simple " + (iced ? "iced " : "") + "Drip Coffee...");
    }
}

class Americano extends Coffee {
    public Americano() {
        super("Americano", false);
    }

    @Override
    public void prepare() {
        System.out.println("Preparing a strong Americano...");
    }
}