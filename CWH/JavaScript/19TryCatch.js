let a = 5
let b = 7

if(isNaN(a) || isNaN(b))
{
    throw Error("'a' or 'b' is NaN");
}
let sum = parseInt(a)+parseInt(b);

// try and catch
try 
{
    console.log(sum);
}
catch(error)
{
    console.log("Error is : ",error);
}

finally
{
    console.log("files are being closed and db connection is closed"); // finally block is mainly used in function (boolean return).
}