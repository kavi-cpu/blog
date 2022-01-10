// async and await
//helps in writing promises easier
//syntax:
//    async function foo(){
//        let res = await Promise;
//    }

//execution
//await is used within async for output to get readeable 
//another await is used with .JSON(); to get readable stream  to object
//since again it is a promise we use, await keyword one more time for resolve the promise

// example for async and await with fetch
// async function foo(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let result = await res.json();
//     console.log(result);
// }
// foo();

// try-->to test if code is  correct
// catch-->to handle errror(promise error)
// use try-catch inside async function


// async function foo(){
  
//     try {
//        let res = await fetch("https://restcountries.com/v3.1/all");
//        let result = await res.json();
//     console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// foo();


// //  async function foo(){
// //     //    let name =document.getElementById("data").value;
// //     //    console.log(name);
// //        let res = await fetch("https://restcountries.com/v3.1/all");
// //        let result = await res.json(); 
// //        console.log(result);
// //        for(var i in result){
// //            console.log(result[i].name.area);
// //        }
   
// // }

// // foo();

// // let result=fetch("https://data.covid19india.org/v4/min/data.min.json");
// //  console.log(result);
// //  result.then((data)=>{
// //  return data.json();
// // }).then((data)=>{ 
// //    foo(data);
// // }).catch((error)=>{console.log(error)});
// // function foo(data){
// //     console.log(data.TN.delta.recovered);
// // }


// //  async function foo(){
// //        let name =document.getElementById("data").value;
// //         console.log(name);
// //        let res = await fetch("https://restcountries.com/v3.1/"+name);
// //        let result = await res.json(); 
// //        console.log(result);
// //        for(var i in result){
// //         console.log(result[i].name);
// //        }
   
// // }

// // foo();

// async function foo (){
//       let res= await fetch(`https://restcountries.com/v3.1/all`);
//       let result = await res.json();
//       console.log(result);

// try {
     
//       for(var i in result){
//             var name = result[i].name;
//             console.log(name);
//             var latlon= result[i].latlng;
// if(latlon.length === 0) throw new Error("invalid coordinates for the country");
//             faa(name ,...latlon);
//       }
// } catch (error) {
//      console.log("invalid country"+name+e.message);
// }

// }

// async function faa (name,lat,lon){
   
//       try {
//             let res1= await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=493ad4a69a1db7095b6aa54c52009a28`);
//             let result1 = await res.json();
//              console.log(`${name}:${result1.main.temp}`);
//       } catch (error) {
//             console.log(error);
//       }
      
//  }
      

// foo();

// let oddb=(arr)=>{
//     let odd=[];
//     for(let i in arr)
//    {
//        if(arr[i]%2!==0){
//            odd.push(arr[i]);
//    }
// }
//        console.log(odd);    
// }
// console.log(oddb([1, 2, 5, 7,8,9]));

// let data =[0,1,2,3,4,5,6,7];
// let even =[];
// for(var i in data){
//      if(data[i]%2===1){
//      even.push(data[i]);
//      }
// }
// console.log(even);



// let paliondromeb=(word)=>{
//     let len=word.length;
//     let start=word.substring(0,Math.floor(len/2))
//     let end=word.substring(len -Math.floor(len/2));
//     let flip=end.split('').reverse().join('')
//     return (start===flip);
  
// }
// console.log(paliondromeb('radar'));























