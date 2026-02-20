function longestCommonPrefix(str){
     if(str.length===0) return ""
     let prefix=str[0]
     for(let i=1;i<str.length;i++){
        while(str[i].indexOf(prefix)!==0){
            prefix=prefix.slice(0,prefix.length-1)
            if(prefix==="") return ""

        }
     }
    return prefix

}
let str= ["flower","flow","flight"]
console.log(longestCommonPrefix(str))
//Time Complexity (O(n*m))
//Space Complexity (O(1))