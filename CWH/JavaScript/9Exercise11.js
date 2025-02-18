num = prompt("Enter the Number : ")

const length = num
array = [];

for(i = 0; i<length; i++)
{
    array[i] = num;
    num--;
}

const fac = (a,b) =>
{
   return a*b ;
}

ans = array.reduce(fac);

alert("Factorial : "+ans);

