var names=["Parth","Jenish","Rakesh","jaju","Adarsh","shivam","jemish","vibhor","javascript","script"];
console.log("Name list");
for(var prop in names)
	console.log(names[prop]);
for(var prop in names)
{if(names[prop].charAt(0)=="j" || names[prop].charAt(0)=="J")
    {  johnGreeter.sayHi(names[prop]);}
 else
    {   yaakovGreeter.sayHello(names[prop]); }
      
   }

