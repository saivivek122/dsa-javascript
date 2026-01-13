function sumOfArrayElements(arr){
    if(arr.length==0){
        return 0
    }
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
let arr=[1, 2, 3, 4, 5]
console.log(sumOfArrayElements(arr))
//Time Complexity O(n)
//Space Complexity O(1)