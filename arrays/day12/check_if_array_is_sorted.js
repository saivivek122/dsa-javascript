function checkIsArraySorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return "NO"
        }
    }
    return "YES"
}
let arr=[1, 2, 3, 4, 5]
console.log(checkIsArraySorted(arr))
//Time Complexity O(n)
//Space Complexity O(1)