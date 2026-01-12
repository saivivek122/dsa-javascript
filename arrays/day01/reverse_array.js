function reverseArray(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++
        right--
    }
    return arr
}
let arr=[10, 20, 30]
console.log(reverseArray(arr))
//Time Complexity O(n)
//space Complexity O(1)