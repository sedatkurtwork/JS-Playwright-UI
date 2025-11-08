package tests.NENI;

import org.w3c.dom.Node;

public /*
 * Created on 2025-10-22
 *
 * Copyright (c) 2025 Nadine von Frankenberg
 */

// TODO - TASK 2
public class LinkedTrain {

    // TODO: define useful attributes
    private Node head;
    private int size;

    // Default constructor
    public LinkedTrain() {
        // Can be left empty!
        // head = null;
        // size = 0;
    }

    // TODO: implement isEmpty()
    public boolean isEmpty() {
        return size == 0;
    }

    // TODO: implement size()
    public int size() {
        return size;
    }

    // TODO: implement addFirst
    public void addFirst(String data) {
        TrainCar newCar = new TrainCar(data);
        Node newNode = new Node(newCar);
        newNode.setNext(head);
        head = newNode;
        size++;

    }

    // TODO: implement add
    public void add(String data) {
        TrainCar newCar = new TrainCar(data);
        Node newNode = new Node(newCar);

        if (head == null) {
            head = newNode;
        } else {
            Node current = head;

            while (current.getNext() != null) {
                current = current.getNext();
            }
            current.setNext(newNode);
        }
        size++;

    }

    // TODO: implement removeFirst()
    // Removes the node at the specified position
    public boolean removeFirst() {
        if (head != null) {
            head = head.getNext();
            size--;
            return true;
        }
        return false;
    }

    // TODO: implement removeLast())
    public boolean removeLast() {
        if (head == null) {
            return false;
        }

        if (head.getNext() == null) {
            head = null;
            size--;
            return true;
        }
        Node current = head;
        Node previous = null;
        while (current.getNext() != null) {
            previous = current;
            current = current.getNext();
        }
        previous.setNext(null);
        size--;
        return true;
        // return false;
    }

    /*
     * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     * ! NO NEED TO TOUCH THE LINES BELOW !
     * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     */

    // Return the element at a specified position
    public TrainCar get(int index) {
        // index must be 0 or higher
        if (index < 0) {
            return null;
        }
        Node current = head;
        if (head != null) {
            for (int i = 0; i < index; i++) {
                if (current.getNext() == null)
                    return null;
                current = current.getNext();
            }
            return current.getData();
        }
        return null;
    }

    @Override
    public String toString() {
        String output = "";
        if (head != null) {
            Node current = head;
            while (current != null) {
                output += "[" + current.getData().toString() + "]";
                current = current.getNext();
            }
        }
        return output;
    }

    public void print() {
        System.out.println(this.toString());
    }
    // 
    /**
     * Checks whether any TrainCar in the linked list contains the given
     * substring in its cargo data. The comparison is case-insensitive and
     * returns as soon as a match is found.
     *
     * @param data substring to search for inside each TrainCar's data
     * @return true if at least one TrainCar's data contains the substring,
     *         false otherwise
     */
    public boolean contains(String data) {
        Node current = head;
        while (current != null) {
            if (current.getData().toString().toLowerCase().contains(data.toLowerCase())) {
                return true;
            }
            current = current.getNext();

        }
        return false;
    }

    /**
     * Removes the first TrainCar whose data contains the specified substring.
     * The comparison is case-insensitive. When a matching node is found the
     * node is removed from the linked list and the list size is decremented.
     *
     * @param data substring to search for inside each TrainCar's data
     * @return true if a matching TrainCar was found and removed, false otherwise
     *
     * Note: This method mutates the list (may update `head` and decrements
     * the `size` field when removal occurs).
     */
    public boolean removeByCargo(String data) {
        Node current = head;
        Node previous = null;
        while (current != null) {
            if (current.getData().toString().toLowerCase().contains(data.toLowerCase())) {
                if (previous == null) {
                    head = current.getNext();

                } else {
                    previous.setNext(current.getNext());
                }
                size--;
                return true;
            }
            previous = current;
            current = current.getNext();
        }
        return false;
    }

    public boolean removeAt(int index) {
        if (index < 0 || index >= size) {
            return false;
        }
        if (index == 0) {
            head = head.getNext();
            size--;
            return true;
        }
        Node current = head;
        for (int i = 0; i < index - 1; i++) {
            current = current.getNext();
        }
        current.setNext(current.getNext().getNext());
        size--;
        return true;
    }
    /**
     * Removes the element at the specified index from the linked list.
     *
     * Valid indices are 0 .. size-1. If the index is out of bounds the
     * method returns false and the list is not modified. When the index is
     * valid the node is removed, the {@code size} is decremented, and the
     * method returns true.
     *
     * @param index position of the element to remove (0-based)
     * @return true if removal succeeded, false when index was invalid
     *
     * Side-effects: mutates the linked list structure (may update {@code head})
     * and decrements the {@code size} field when an element is removed.
     *
     * Complexity: O(n) in the worst-case because the method may need to
     * traverse up to index-1 nodes to adjust pointers.
     */
    /**
     * Sorts the linked list of TrainCar objects in ascending order using a
     * simple bubble-sort pass that compares each node's cargo string
     * (case-insensitive). The method mutates the list by swapping the
     * TrainCar data between nodes; it updates no external references other
     * than the contents of the nodes. If the list is empty or contains a
     * single element this method returns immediately.
     *
     * Implementation note: This uses repeated passes until no swaps are
     * necessary (classic bubble sort). Complexity is O(n^2) in the worst
     * and average cases, and O(n) in the best case when the list is already
     * sorted.
     *
     * Side-effects: mutates TrainCar data inside the nodes and relies on
     * TrainCar#toString() and String#compareToIgnoreCase for ordering.
     */
    public void sort() {
        if (head == null || head.getNext() == null) {
            return;
        }
        boolean swapped;

        do {
            swapped = false;
            Node current = head;
            while (current.getNext() != null) {
                String cargo1 = current.getData().toString();
                String cargo2 = current.getNext().getData().toString();
                if (cargo1.compareToIgnoreCase(cargo2) > 0) {
                    TrainCar temp = current.getData();
                    current.setData(current.getNext().getData());
                    current.getNext().setData(temp);
                    swapped = true;
                }
                current = current.getNext();
            }
        } while (swapped);
    }
}

