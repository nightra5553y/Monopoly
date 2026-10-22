let person = {
    name: "Unknown",
    value: 1500,
    board_position: 100
}
console.log(person);

let property = ["Germany", "Japan", "Canada"]
console.log(property[0]);
property[4] = "China";
console.log(property);

let prices = [100, 300, 40, 1000];
function Roll(num) {
    if (person["value"] >= prices[num]) {
        person["value"] -= prices[num];
        console.log(person["value"]);
    }
    else {
        console.log(person, prices[num]);
    }
    console.log("hwllo");
}
Roll(1);
console.log(person)

function Turn() {
    let roll = Math.floor(Math.random()*7)+Math.floor(Math.random()*7)
    person["board_position"] += roll; 
}
Turn()
console.log(person)
