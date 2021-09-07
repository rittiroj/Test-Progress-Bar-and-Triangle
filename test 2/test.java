
public class test {
    public static void main(String[] args) {

        for (int i = 0; i < 11; i++) { 
            for (int j = 0; j < (11 - i - 1); j++) {
                
                System.out.print(" ");
            }
            for (int k = 0; k < ((2 * i) + 1); k++) { 
                System.out.print("X");
            }
            System.out.println();
        }
        System.out.println();
    }
}
