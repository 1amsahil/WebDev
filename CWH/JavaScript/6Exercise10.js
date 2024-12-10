function firstName()
{
    random = (Math.random())*10;
    
    if(random<4)
    {
        return "Crazy ";
    }
    else if((random>3)&&(random<7))
    {
        return "Amazing ";
    }
    else
    {
        return "Fire ";
    }
}

function midName()
{
    random = (Math.random())*10;
    
    if(random<4)
    {
        return "Engine ";
    }
    else if((random>3)&&(random<7))
    {
        return "Foods ";
    }
    else
    {
        return "Garments ";
    }
}

function lastName()
{
    random = (Math.random())*10;
    
    if(random<4)
    {
        return "Bros";
    }
    else if((random>3)&&(random<7))
    {
        return "Limited";
    }
    else
    {
        return "Hub";
    }   
}

let BussinessName = firstName();
BussinessName = BussinessName + midName();
BussinessName = BussinessName + lastName();

console.log(BussinessName);
