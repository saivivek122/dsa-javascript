function containsElementTwice(arr){
    let set=new Set()
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            return true
        }
        set.add(arr[i])
    }
    return false
}
let arr=[1,1,2,3,4,5]
console.log(containsElementTwice(arr))
//Time Complexity O(n)
//Space Complexity O(n)