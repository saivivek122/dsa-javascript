function rotateArrayByOnePosition(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++;
        end--
    }
    return arr
}
let arr=[1, 2, 3, 4, 5]
let k=1
rotateArrayByOnePosition(arr,0,arr.length-1)
rotateArrayByOnePosition(arr,0,k-1);
rotateArrayByOnePosition(arr,k,arr.length-1)
console.log(arr)
//Time Complexity O(n)
//Space Complexity O(1)