import java.util.Scanner;

public class Main{
    private static int[][] arr = new int[100][100];

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int paintCount = 0;

        for(int i = 0; i<n; i++){
            int x = sc.nextInt();
            int y = sc.nextInt();

            for(int j = x; j<x+10; j++){
                for(int q=y; q<y+10;q++){
                    if(arr[j-1][q-1] == 0){
                        arr[j-1][q-1]++;
                        paintCount++;
                    }
                }
            }
        }
        System.out.println(paintCount);
    }
}