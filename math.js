let x=10;
if(true){
    let y=20;
    var z=30;
    console.log(x+y+z);
}
alert(x+z);

const power=function(base,exponent){
    let result = 1;
    for(let count=0; count<exponent;count++)
{
  result *= base;
}
return result;
};
alert(power(2,10));