package tests.NENI;

import java.util.*;
// =======================
// Barista class
// =======================
class Barista {
    private List<Order> orderList = new ArrayList<>();
    private Random random = new Random();

    public void takeOrder(Order order) {
        orderList.add(order);
        System.out.println(order.getCustomer().getName() + " ordered a " + order.getCoffee().getName());
    }

    public void processOrders() {
        System.out.println("\n--- Processing Orders ---");
        // Process orders in the order they were added (FIFO)
        while (!orderList.isEmpty()) {
            Order order = orderList.remove(0); // remove first element
            prepareOrder(order);
        }
    }

    private void prepareOrder(Order order) {
        Coffee coffee = order.getCoffee();

        if (random.nextInt(10) < 2) { // 20% chance for Mystery Order
            coffee = getRandomCoffee();
            System.out.println("\nSurprise! A Mystery Order was made instead!");
        }

        coffee.prepare();
        System.out.println("Barista: " + order.getCustomer().getName() + ", your " + coffee.getName() + " is ready!\n");
    }

    private Coffee getRandomCoffee() {
        int n = random.nextInt(5);
        switch (n) {
            case 0:
                return new Cappuccino();
            case 1:
                return new LatteMacchiato("vanilla", false);
            case 2:
                return new Affogato();
            case 3:
                return new DripCoffee(true);
            default:
                return new Tea(false);
        }
    }
}