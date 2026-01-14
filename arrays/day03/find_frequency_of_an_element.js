
function frequencyOfAnElement(arr,target){
    let frequency=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            frequency=frequency+1
        }
    }
    return frequency
}
let arr= [1, 2, 3, 2, 4, 2]
let target= 2
console.log(frequencyOfAnElement(arr,target))
//Time Complexity O(n)
//Space Complexity O(1)