function findTheMajorityElement(arr){
    let majority=Math.floor(arr.length/2)
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
        if(val>majority){
            return  key
        }
    }
    return -1
}
let arr=[3, 2, 3]
console.log(findTheMajorityElement(arr))
//Time Complexity O(n)
//Space Complexity O(n)