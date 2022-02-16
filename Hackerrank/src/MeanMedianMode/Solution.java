package MeanMedianMode;

import java.util.Scanner;

public class Solution {

//    firs number is the size.
//    Console wants you enter numbers .size times
        public static void main(String[] args) {
            /* Save input */
            Scanner scan = new Scanner(System.in);
            int size = scan.nextInt();
            int[] array = new int[size];
            for (int i = 0; i < size; i++) {
                array[i] = scan.nextInt();  // stores the given values
                System.out.println("" + array[i]);   // prints the stored values
            }
            scan.close();
        }
    }
