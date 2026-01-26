function findTheElementAppearingMoreThanNByThreeTimes(arr){
    let majority=Math.floor(arr.length/3)
    let map=new Map()
    let ans=[]
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
           ans.push(key)
        }
    }
    return ans.length>0 ?ans :[]
}
let arr=[3, 2, 3]
console.log(findTheElementAppearingMoreThanNByThreeTimes(arr))