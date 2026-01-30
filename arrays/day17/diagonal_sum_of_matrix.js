function diagonalSumOfMatrix(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i===j){
                sum=sum+arr[i][j]
            }
            if(i+j==arr.length-1 && i!=j){
                sum=sum+arr[i][j]
            }
        }
    }
    return sum
}
let arr=[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(diagonalSumOfMatrix(arr))
//Time Complexity O(n*n)
//Space Complexity O(1)