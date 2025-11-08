package tests.NENI;

public class App {
    public static void main(String[] args) {
        System.out.println("Welcome to Java Coffee Shop!\n");

        Barista barista = new Barista();

        Customer c1 = new Customer("Alice");
        Customer c2 = new Customer("Bob");
        Customer c3 = new Customer("Charlie");
        Customer c4 = new Customer("Diana");
        Customer c5 = new Customer("Eve");

        barista.takeOrder(new Order(c1, new Cappuccino()));
        barista.takeOrder(new Order(c2, new LatteMacchiato("vanilla", true)));
        barista.takeOrder(new Order(c3, new Affogato()));
        barista.takeOrder(new Order(c4, new DripCoffee(false)));
        barista.takeOrder(new Order(c5, new Tea(true)));

        barista.processOrders();

        System.out.println("--- All orders completed. Have a great day! ---");
    }
}
