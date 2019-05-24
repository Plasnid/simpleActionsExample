console.log("Hey, is that a tentacle!");

// we can use ' or " or `
const firstName = "Inigo";

//a template literal
const inigosMission = `${firstName} will find Count Rugen!`;
console.log(inigosMission);

//a number
let numOfFingers = 6;
console.log(`Count Rugen has ${numOfFingers} fingers`);

//boolean - Inigo on a mission
let isInigoOnMission = true;

//array - 
let rescueParty = ["The Dread Pirate Wesley", "Inigo", "Fezzik"]
console.log(rescueParty[0]);

function stormTheCastle(a, b){
    console.log(`${a} is storming the castle with ${b}`);
}

function heroStorm(){
    console.log("heroStorm has been run");
    //for loop
    for(let i=0;i<rescueParty.length;i++){
        console.log(`${rescueParty[i]} is a hero!`);
        stormTheCastle(rescueParty[i], "capers");
    }
}

stormTheCastle("Bert", "cheese");
heroStorm();

//object
let wesley = {
    firstJob: "farm boy",
    favouriteSaying: "As you wish",
    ship: "revenge",
    yearsAway: 7,
    isPirate: true,
    useSword: function(){
        console.log("slice!");
    }
}
console.log(wesley.firstJob);
console.log(wesley.useSword());
for(let flerbos in wesley){
    console.log(`${flerbos}: ${wesley[flerbos]}`);
}