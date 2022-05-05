const createInstructor = (firstName,lastName) =>{
    return {firstName,lastName};
}

let favNum = 42;
const instructor = {
    firstName: "colt",
    [favNum]: "that is my favorite"
}

const instructor2 = {
    firstName: "colt",
    sayHi(){
        return "HI!";
    },
    sayBye(){
        return this.firstName + "says Bye!";
    }
}

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            console.log(noise);
            return noise;
        }  
    }
}