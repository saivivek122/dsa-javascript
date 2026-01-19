function subArrayWithSumKBruteForce(arr,k){
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum=sum+arr[j]
            if(sum===k){
                return "YES"
            }
        }
    }
    return "NO"

}
let arr=[1, 2, 3, 4, 5]
let k= 9
console.log(subArrayWithSumKBruteForce(arr,k))
//Time Complexity O(n*n)
//Space Complexity O(1)
