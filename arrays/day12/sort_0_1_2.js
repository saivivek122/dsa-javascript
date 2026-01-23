function sort012(arr){
    let start=0;
    let mid=0;
    let right=arr.length-1;
    while(mid<=right){
        if(arr[mid]===0){
            [arr[start],arr[mid]]=[arr[mid],arr[start]]
            start++;
            mid++;
        }
        else if(arr[mid]===2){
            [arr[mid],arr[right]]=[arr[right],arr[mid]]
            right--
        }
        else{
            mid++;
        }
    }
    return arr
}
let arr=[0, 1, 2, 1, 0, 2, 1, 0]
console.log(sort012(arr))
//Time Complexity O(n)
//Space Complexity O(1)