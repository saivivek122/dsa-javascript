function moveAllZeroesToEnd(arr){
    let left=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            [arr[i],arr[left]]=[arr[left],arr[i]]
            left++
        }
    }
    return arr
}
let arr=[0, 1, 0, 3, 12]
console.log(moveAllZeroesToEnd(arr))
//Time Complexity O(n)
//Space Complexity O(1)