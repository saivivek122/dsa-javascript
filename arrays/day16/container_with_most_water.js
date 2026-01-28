function containerWithMostWater(arr){
    let maxWater=0;
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let current=Math.min(arr[left],arr[right])*(right-left)
        if(current>maxWater){
            maxWater=current
        }
        if(arr[left]<arr[right]){
            left++
        }
        else{
            right--
        }
        
       
    }
    return maxWater
}
let arr=[1,8,6,2,5,4,8,3,7]
console.log(containerWithMostWater(arr))
//Time Complexity O(n)
//Space Complexity O(1)