const readline = require("readline");

function askQuestion(question) {
    return new Promise(resolve => {
        rl.question(question, answer =>)
    })
}
let Board = [
    {
        name: "Start",
        type: "start"
    },
    {
        name: "Vaasa",
        type: "property",
        group: "Finland",
        specification: "Nordic",
        price: 200,
        rent: 25,
        owner: null
    },
    {
        name: "Helsinki",
        type: "property",
        group: "Finland",
        specification: "Nordic",
        price: 150,
        rent: 25,
        owner: null
    },
    {
        name: "HIA Airport",
        type: "airport",
        group: "Airports",
        price: 200,
        rent: 25,
        owner: null
    },
    {
        name: "Split",
        type: "property",
        group: "Croatia",
        specification: "Europe",
        price: 100,
        rent: 10,
        owner: null        
    },
    {
        name: "Zagreb",
        type: "property",
        group: "Croatia",
        specification: "Europe",
        price: 200,
        rent: 12,
        owner: null        
    },
    {
        name: "Power Company",
        type: "company",
        group: "utility",
        price: 150,
        owner: null
    },
    {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
        {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
        {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
        {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
        {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
        {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
        {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
        {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    },
    {
        name: "Placeholder1",
        type: "placeholder",
        group: "test",
        price: 50,
        owner: null
    }
]
// static property to add total number of players which are playing

class Player {
    #name = ""
    #budget = 0
    #position = 0

    constructor(name, startPrice) {
        this.#name = name;
        this.#budget = startPrice;
        this.#position = 0
    }

    Place() {
        return this.#position
    }
    
    RemainingMoney() {
        return this.#budget;
    }

    Roll() {
        return Math.floor(Math.random()*13);
    }
    Change(change) {
        this.#budget += change;
    }

    Move(num) {
        if ( (this.#position + num) >= Board.length) {
            this.#position = (this.#position + num) - (Board.length)
            this.#budget += 200; 
        }
        else {
            this.#position += num;
        }
    }

    Debugging() {
        console.log(this.#name)
        console.log(this.#budget)
        console.log(this.#position)
    }
    GetName() {
        return this.#name
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const player1 = new Player("Subhan", 1500)


rl.question("Continue? (y/n): ", (inp) => {
    while (inp.toLowerCase() === "y"){
        let test = player1.Roll()
        console.log(test)
        player1.Move(test)
        player1.Debugging()
        pos = player1.Place()
        if (Board[pos].owner === null) {
            if (player1.RemainingMoney >= Board[pos].price) {
                rl.question("Buy property? (Y/N): ", (choice) => {
                    if (choice.toLowerCase() == "y") {
                        player1.Change(Board[pos].price) 
                        Board[pos].owner = player1.GetName()
                    }
                    rl.close()
                })
                
            }
        }   
    }
    rl.close()
})
