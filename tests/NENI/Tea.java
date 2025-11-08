package tests.NENI;

// =======================
// Tea class (for extension)
// =======================
class Tea extends Coffee {
    public Tea(boolean iced) {
        super("Tea", iced);
    }

    @Override
    public void prepare() {
        System.out.println("Steeping a " + (iced ? "chilled " : "hot ") + "cup of Tea...");
    }
}