function rearrangeArrayEvenFirstOddLast(arr){
    let left=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            [arr[left],arr[i]]=[arr[i],arr[left]]
            left++
        }
    }
    return arr
}
let arr=[1, 2, 3, 4, 5, 6]
console.log(rearrangeArrayEvenFirstOddLast(arr))
//Time Complexity O(n)
//Space Complexity O(1)