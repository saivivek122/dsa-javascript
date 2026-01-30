function rowWiseMaximumInMatrix(arr){
    let ans=[]
    for(let i=0;i<arr.length;i++){
        let currentMax=arr[i][0]
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]>currentMax){
                currentMax=arr[i][j]
            }
        }
        ans.push(currentMax)
    }
    return ans
}
let arr=[
  [3, 5, 1],
  [7, 2, 9],
  [4, 6, 8]
]
console.log(rowWiseMaximumInMatrix(arr))
//Time Complexity O(n*m)
//Space Complexity O(n)