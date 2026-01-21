function pairWithGiveSumSortedArray(arr,sum){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]+arr[right]==sum){
            return "YES"
        }
        else if(arr[left]+arr[right]<sum){
            left++
        }
        else{
            right--
        }
    }
    return "NO"
}
let arr=[1, 2, 3, 4, 6]
let sum = 6
console.log(pairWithGiveSumSortedArray(arr,sum))
//Time Complexity O(n)
//Space Complexity O(1)