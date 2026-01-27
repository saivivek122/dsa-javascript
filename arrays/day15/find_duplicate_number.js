function findDuplicateNumber(arr){
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            map.set(arr[i],1)
        }
    }
    for(let [key,val] of map){
        if(val>1){
            return key
        }
    }
    return -1
}
let arr=[1, 3, 4, 2, 2]
console.log(findDuplicateNumber(arr))
//Time Complexity O(n)
//Space Complexity O(n)