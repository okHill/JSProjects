package MeanMedianMode;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class MeanMedianMode {

    public static void main(String[] args) {
        /* Save input */
        Scanner scan = new Scanner(System.in);
        System.out.println("What is the size for the array? Enter an int number!");
        int size = scan.nextInt();
        System.out.println("Enter int numbers " + size + " times.");
        int [] array = new int[size];
        for (int i = 0; i < size; i++) {
            array[i] = scan.nextInt();
        }
        scan.close();

        /* Sort array: O(n log n) runtime */
        Arrays.sort(array);

        /* Calculate Mean */
        int total = 0;
        for (int num : array) {
            total += num;
        }
        double mean = (double) total / size;

        /* Calculate Median */
        double median;
        if (size % 2 == 0) {
            median = (array[size / 2 - 1] + array[size / 2]) / 2.0;
        } else {
            median = array[size / 2];
        }

        /* Calculate Mode - if there's a tie, choose the smaller number */
        HashMap<Integer, Integer> map = new HashMap();
        int maxOccurrences = 0;
        int mode = Integer.MAX_VALUE;
        for (int num : array) {
            map.merge(num, 1, Integer::sum);
            int occurrences = map.get(num);
            if (occurrences > maxOccurrences || (occurrences == maxOccurrences && num < mode)) {
                maxOccurrences = occurrences;
                mode = num;
            }
        }

        /* Print results */
        System.out.println("Mean is: " + mean);
        System.out.println("Median is: " + median);
        System.out.println("Mode is: " + mode);
    }

}
