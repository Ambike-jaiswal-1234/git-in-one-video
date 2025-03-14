console.log(Math.PI);
console.log(Math.max(60,30,24,600,712));
console.log(Math.min(60,30,24,600,712));

let curr = new Date();
console.log( curr );


//*******CLONING using spred operator(...)*******//
let src = {
    age:20,
    wt :200,
    ht:40,
};

let dest = {...src};

src.age=90;

console.log("src:",src);
console.log("dest:",dest);

//*******CLONING using asign operator(->)*******//

let srce = {
    age:20,
    wt :200,
    ht:40,
};

let desti = Object.assign({},srce);

console.log("srce:",srce);
console.log("desti:",desti);

try{
    console.log("try block start here");
    console.log(x);
    console.log("try block ends here");
    //a

    //d

    //l
}
catch(err){
    //define karte h, error ke sath kya karana chahte h
    //retry logic
    //fallback mechnism
    //logging
    //costom error
      console.log("i am inside catch block");
      console.log("your error is here:",err);
}
finally{
    console.log(" I will run everytime,as i am finally block");
}






















// // console.log("RADHA")

// // global scope
// var age = 19;
 
// console.log(age);

// {
//     console.log(age);
// }
 
// if(true){
//     console.log(age);
// }
// for(let i=0;i<2;i++){
//     console.log(age);
// }

// function sayHello(){
//     console.log("golden ",age);
// }
// sayHello();