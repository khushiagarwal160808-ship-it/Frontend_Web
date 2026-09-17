// console.log("a");
// // setTimeout(() => {
// //   console.log("b");
// // }, 2000);

// console.log("c");
// console.log("a");
// let promise = new Promise((res, rej) => {
//   setTimeout(() => {
    // if (4 == 5) {
//       return res("fullfilled");
//     } else {
//       return rej("failed");
//     }
//   }, 5000);
// });
// promise
//   .then((hardika) => console.log(hardika))
//   .catch((err) => console.log(err));
// console.log("b");

// let data=[{name:"he"},{name:'she'}];
// console.log(data[0].name)
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((kuchbhi) => console.log(kuchbhi))
  .catch((err) => console.log(err));
