// function savetodb(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed = Math.floor(Math.random()*10)+1;
//         if(internetspeed > 4){
//             resolve("Success: data was saved");
//         }else{
//             reject("Failure: weak connections");
//         }
//     });
// };
// savetodb("apnacollege")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log("Result of Promise:",result);
//         return savetodb("helloworld")
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("Result of Promise:",result);
//         return savetodb("suryansh");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("Result of Promise: ",result);
//     })
//     .catch((error)=>{
//         console.log("Promise was rejected");
//         console.log("Error of Promise:",error);
//     });

// Changing heading color 
// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("Color Changed1")
//         },delay);
//     })
// }
// changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was completed")
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange color was completed");
//         return changeColor("green",1000);
//     })
//     .then(()=>{
//         console.log("Green color was completed")
//     })
//     .catch(()=>{
//         console.log("Color was not completed")
//     })

// async function greet(){
//     throw("Weak connection");
//     return("Hello world!");

// }
// greet()
//     .then((result)=>{
//         console.log("Promise was resolved: ",result);
//     
//     .catch((err)=>{
//         console.log("Promise was rejected with error: ",err);
//     })
let url = "https://v2.jokeapi.dev/joke/Any?safe-mode"; 
let btn = document.querySelector("button");
let list = document.querySelector("#result");
btn.addEventListener("click",async()=>{
    let fact = await getfacts();
    // facts(fact);
    let li = document.createElement("li");
        li.innerText = fact;
        list.appendChild(li);
    
})  
function facts(fact){
    for(f of fact){
        console.log(f.fact);
        let li = document.createElement("li");
        li.innerText = f.fact;
        list.appendChild(li);
    }
}
async function getfacts(){
    try{
        let res = await axios.get(url);
        return(res.data.joke);
    } catch(e){
        console.log(e);
        return "No fact found";
    }
    
}


// const fact = document.getElementById("facts");
// fetch(url)
// .then((res)=>{
//     return res.json(); // return the promise containg the data
// })
// .then((data)=>{
//     const fact=  data.data.map(fact=> fact);
//     console.log(fact);
//     fact.innerHTML = fact;
// })
// .catch((err)=>{
//     console.log(err);
// })
// async function getfacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     } catch(e){
//         console.log(e);
//     }
// }

