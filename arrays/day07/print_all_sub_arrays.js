function printAllSubArrays(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            console.log(arr.slice(i,j+1))
        }
        
    }

}
let arr=[1, 2, 3]
printAllSubArrays(arr)
//Time Complexity O(n*n)
//Space Complexity O(1)