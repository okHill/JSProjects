package MeanMedianMode;

public class CalculateMean {

    /* Calculate Mean */
//    Mean is the average of the numbers
    public static void main(String[] args) {

    int [] array = {10, 2, 3, 6, 20, 7};    // total = 48
    int total = 0;                          // length = 6

        for(int num : array) {
            total += num;
    }
        double mean = (double) total / array.length;

        System.out.println(mean);   // 48 % 6 = 8.0
    }
}
