	
var a=parseInt(prompt("Enter the hour"));
let time=new Date();
time.setHours(a);
var b=time.getHours(a);
console.log(b);


if(b<12)
	{
		document.write("Morning");
		document.write("<br>");
	}
	else if(12<=b && 17>b)
	{
		document.write("Afternoon");
		document.write("<br>");
	}
	else if(b>=17 && 20>b)
	{
		document.write("Evening");
		document.write("<br>");
	}
	else
	{
		document.write("Night");
		document.write("<br>");
	}
	