//knife on left side
//unsliced bread on counter in twist bag
//Task: cut 1 slice of bread

/*
    1.  raise left hand to counter level
    2.  raise right hand to counter level
    3.  pick up bread bag with left hand
    4.  bring right hand to twist tye
    5.  remove twist tye from bread bag
    6.  let bag untwist
    7.  put bag down on counter
    8.  put left hand in bag
    9.  remove bread from bag
    10. grab knife with left hand
    11.  turn blade vertical
    12.  move knife quarter inch horizontal over bread
    13.  hold bread right side gently with right hand
    14.  move left hand back and forward while lowering knife
    15.  if knife is at the bottom of the bread, stop else go to step 14
*/
let leftHandHolding = "";
let rightHandHolding = "";

function moveHandToCounter(lOrR){
    //move left or right hand to counter
    console.log(`moving my ${lOrR} to the counter`);
}
function pickUp(item, hand){
    //can pick up bread or knife, or anything really
    if(hand=="left"){
        leftHandHolding = item;
    }
}
function putDown(item, hand){
    //put down an item held in a hand
}
function unTwistBread(hand){
    //untwist the bread bag
}
function waitForAction(action){
    //wait for an action, then do next item
}
function placeHandIn(container, hand){
    //put hand in container
}
function removeHandFrom(container, hand){
    //remove hand from container
}
function rotateHand(hand, angle){
    //rotate specific hand to an angle
}
function moveHandOverObject(hand, position){
    //specific hand over item at a specific location
}
function gentlyHold(item, hand){
    //hold item with a hand gently
}
function sawAndLower(hand, depth){
    //saw to a depth
}
function end(){

}
function startAction(){
    moveHandToCounter("left");
    moveHandToCounter("right");
    pickUp("breadBag","left");
    unTwistBread("right");
    waitForAction("bag twirl");
    putDown("breadBag", "left");
    placeHandIn("breadBag", "left");
    pickUp("bread", "left");
    removeHandFrom("breadBag", "left");
    putDown("bread", "left");
    pickUp("knife", "left");
    rotateHand("left", 90);
    moveHandOverObject("left", .25);
    gentlyHold("bread", "right");
    sawAndLower("left", 2);
}
startAction();