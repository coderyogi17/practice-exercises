//walk the dog
function walkTheDog (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Happy dog");
        }, 1000);
       

});
};

function DoChores(){
    console.log("start point");
    walkTheDog()
        .then((res)=> console.log(res))
      

             

    return console.log("done");
}

DoChores();