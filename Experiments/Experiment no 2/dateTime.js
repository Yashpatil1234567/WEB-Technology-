let myDate=new Date
console.log(myDate.toString())
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());//
console.log(myDate.toDateString());
console.log(typeof(myDate));


//timestamp=when we create      then we
let myTimestamp=Date.now
console.log(myTimestamp);
console.log(Date.now());//output in milisecond
console.log(Date.now()/1000);


// how to calculate exact time
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());



