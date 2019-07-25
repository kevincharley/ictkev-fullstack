function gn()
{
var x=parseInt(document.getElementById("n1").value);
var y=parseInt(document.getElementById("n2").value);
var opt=document.getElementById("op").value;
if(opt=="add")
{
u= add(x,y);
console.log(u);
document.getElementById("r").innerHTML="<b>"+u+"</b>";
}
if(opt=="sub")
{
u=sub(x,y);
document.getElementById("r").innerHTML="<b>"+u+"</b>";
}
if(opt=="mul")
{
u=mul(x,y);
document.getElementById("r").innerHTML="<b>"+u+"</b>";
}
if(opt=="div")
{
u=div(x,y);
document.getElementById("r").innerHTML="<b>"+u+"</b>";
}
function add(x,g)
{
z=x+g;
return(z);
}
function sub(x,y)
{
s=x-y;
return(s);
}
function mul(x,y)
{
s=x*y;
return(s);
}
function div(x,y)
{
s=x/y;
return(s)
}
}

