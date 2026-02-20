function firstUniqueCharacterIndex(s){
    let map=new Map()
    for(let ch of s){
        if(map.has(ch)){
            map.set(ch,map.get(ch)+1)
        }
        else{
            map.set(ch,0)
        }
    }
   for(let i=0;i<s.length;i++){
    if(map.get(s[i])===0){
        return i
    }
   }
   return -1
}
let s="leetcode"
console.log(firstUniqueCharacterIndex(s))