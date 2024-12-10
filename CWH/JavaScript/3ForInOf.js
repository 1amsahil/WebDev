
let obj = {
    name : "sahil",
    marks : 84,
    fav : "java"
};

// For in
for (const key in obj) {

    const element = obj[key];
    console.log(key,element);
}

// For Of
for (const ch of "Object") {
    console.log(ch);
}