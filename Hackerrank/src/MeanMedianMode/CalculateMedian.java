package MeanMedianMode;

import java.util.Arrays;

public class CalculateMedian {

    /*
    * Sort the Array
    * get the length
    * If the length is odd, divide it by 2
    * If the length is even, add the two middle numbers
    * and divide the addition by 2.
    * */
    public static void main(String[] args) {
        int [] array = {10, 2, 3, 6, 20, 7, 9};
        Arrays.sort(array);
        double median;
        int len = array.length;

        if (len % 2 == 0) {
            median = (array[len / 2 - 1] + array[len / 2]) / 2.0;
        } else {
            median = array[len / 2];
        }

        System.out.println("" + median);
    }

}
