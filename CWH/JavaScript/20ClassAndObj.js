// Object
obj1 = {
    key1 : "value1",
    key2 : "value2",
    key3 : true
};

obj2 = 
{
    key4 : "value4",
    key5 : "value5"
}

obj2.__proto__ = obj1;
console.log("Obj1 value in Obj2 : ",obj2["key1"]);


// Class
class Animal
{
    constructor(name)
    {
        this.name = name;
        console.log("Animal Object Created");
    }

    run()
    {
        console.log("Animal is running")
    }
    eat()
    {
        console.log("Animal is Eating")
    }
    
}

let ani = new Animal("lion");
console.log("Name : ",ani.name);
ani.eat();
ani.run();

// Extends And Super()
class Lion extends Animal
{
    constructor()
    {
        super();
        console.log("Lion Object Created");
    }
    jump()
    {
        console.log("Lion is Jumping");
    }
}
li = new Lion();

li.eat();