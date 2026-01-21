function removeDuplicatesFromSortedArray(arr){
    let left=0;
    for(let i=0;i<arr.length;i++){
        if(arr[left]!=arr[i]){
            left++
            [arr[left],arr[i]]=[arr[i],arr[left]]
           
        }
    }
    return [{uniqueCount:left+1,
             Array:arr.slice(0,left+1)
    }]
}
let arr=[1, 1, 2, 2, 3]
console.log(removeDuplicatesFromSortedArray(arr))
//Time Complexity O(n)
//Space Complexity O(1)