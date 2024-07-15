// first program     
let age=15
for(i=1;i<=100;i++)
    if(age%3==0 && age%5==0){
        console.log("FizzBuzz")
    }
    else if(age%3==0){
        console.log("Fizz")
    }
    else if(age%5==0){
        console.log("Buzz")
    }

//Third program
     let arr=[1,3,4,2]
     let largest=arr[0]
     for(let i=0;i<=arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
     }
     console.log(largest)

//fifth program
function largest(){
let name=["eswaran","selvakanapathi","bala","dhaya"]
let longname="";
for(let i=0;i<name.length;i++){
    if(name[i].length>longname.length){
        longname=name[i];
    }
}
console.log(longname);
}         
largest();

// sixth program
function factorial(num){
let sum=1
for(i=1;i<=num;i++){
    sum=sum*i;
}
console.log(sum);
}
factorial(5)

//seventh program
function fahren(celsius){
console.log(celsius*9/5)+32
}
fahren(500) 