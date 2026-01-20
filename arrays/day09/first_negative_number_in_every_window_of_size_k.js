function firstNegativeNumberInEveryWindowOfSizeK(arr,k){
    let result=[]
    let queue=[]
    let i=0;
    let j=0;
    while(j<arr.length){
        if(arr[j]<0){
            queue.push(j)
        }
        if(j-i+1<k){
            j++
        }
        else if(j-i+1==k){
            if(queue.length==0){
                result.push(0)
            }
            else{
                result.push(arr[queue[0]])
            }
            if(queue.length>0 && queue[0]===i){
                queue.shift()
            }
            i++;
            j++;
        }
    }
    return result
}
let arr=[12, -1, -7, 8, -15, 30, 16, 28]
let k = 3
console.log(firstNegativeNumberInEveryWindowOfSizeK(arr,k))
//Time Complexity O(n)
//Space Complexity O(k)