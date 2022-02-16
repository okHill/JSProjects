package MeanMedianMode;

import java.util.Scanner;

public class WeightedMean {

//    Multiply each number by weights.
//    Add the results up.

    public static void main(String[] args) {
        /* Save input */
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter an int for size of the Array");
        int size = scan.nextInt();

        int [] elements = new int[size];
        int [] weights  = new int[size];

        System.out.println("Enter now " + size + " times of int numbers");
        for (int i = 0; i < size; i++) {
            elements[i] = scan.nextInt();
        }
        System.out.println("Enter " + size + " int numbers for weight");

        for (int i = 0; i < size; i++) {
            weights[i] = scan.nextInt();
        }
        scan.close();

        /* Calculate weighted mean */
        int total = 0;
        int totalWeights = 0;
        for (int i = 0; i < size; i++) {
            total += elements[i] * weights[i];
            totalWeights += weights[i];
        }
        double weightedMean = (double) total / totalWeights;
        System.out.format("%.1f", weightedMean);
    }

/*   Example problem: You take three 100-point exams in your statistics class and score 80, 80 and 95. The last exam is much easier than the first two, so your professor has given it less weight. The weights for the three exams are:

    Exam 1: 40 % of your grade. (Note: 40% as a decimal is .4.)
    Exam 2: 40 % of your grade.
    Exam 3: 20 % of your grade.
    What is your final weighted average for the class?

    Multiply the numbers in your data set by the weights:
    .4(80) = 32
    .4(80) = 32
    .2(95) = 19

    Add the numbers up. 32 + 32 + 19 = 83.
    The percent weight given to each exam is called a weighting factor.*/
}
