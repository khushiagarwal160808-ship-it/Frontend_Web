process.stdin.on("data" , function(data){
    data=data.toString();
    console.log(data)
})
process.stdin.on("data", function(data){
    data = data.toString().split("\n");
    let n=data[0]
    let arr=data[1].split(' ').map(Number)
    console.log(arr)
})
process.stdin.on("data",function(data){
    data =data.toString().split("\n");
   
    let a=data[2].split(' ').map(Number)
    let b=data[3].split(' ').map(Number)
    console.log(a)
    console.log(b)
})
fruits = ['pineapple' , 'banana' , 'watermelon' , 'mango']
for (let i of fruits) {
    console.log (i)
}
// arr = ["a" , "b" ,"c" , "d"];
// for (let i of arr) {
//     console.log(i)
// };

arr = [1,2,3,4,5]
for (let i=0; i<arr.lenght; i++)  {
    if (arr[i] % 2 == 0) {
        console.log("even -" + arr[i])
    }
    else {
        console.log("odd -" + arr[i])
    }
}

//let ans = [];
// for (let i = 0; i < arr.length; i++){
//   ans.unshift(arr[i])
// }
// console.log(ans);
// let obj = {}
// for (let i = 0; i < arr.length; i++){
//   if(obj[arr[i]]==undefined){
//     obj[arr[i]] = 1
//   } else {
//     obj[arr[i]] += 1
//   }
// }
// console.log(obj);