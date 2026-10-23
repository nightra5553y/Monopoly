

// Not including specification rn, pakistani map for now
let Board = [
    {
        name: "Start",
        type: "Start",
        price: 250
    },
    {
        name: "Mansehra",
        type: "property",
        group: "KPK",
        price: 60,
        rent: 6,
        owner: null
    },
    {
        name: "Treasure",
        type: "Treasure",
        group: "Treasure"
    },
    {
        name: "Peshawar",
        type: "property",
        group: "KPK",
        price: 120,
        rent: 12,
        owner: null
    },
    {
        name: "New Budget",
        type: "M01",
        group: "Miscellaneous"        
    },
    {
        name: "Abbotabad",
        type: "property",
        group: "KPK",
        price: 100,
        rent: 10,
        owner: null        
    },
    {
        name: "Peshawar City Rail Station",
        type: "station",
        group: "Transport",
        price: 200,
        owner: null
    },
    {
        name: "Quetta",
        type: "property",
        group: "Balochistan",
        price: 140,
        owner: null
    },
        {
        name: "ReRoll",
        type: "M02",
        group: "Miscellaneous"
    },
        {
        name: "Gwadar",
        type: "property",
        group: "Balochistan",
        price: 120,
        owner: null
    },
        {
        name: "Surprise",
        type: "surprise",
        group: "Surprise"
    },
        {
        name: "Ormara",
        type: "property",
        group: "Balochistan",
        price: 110,
        owner: null
    },
        {
        name: "Jail",
        type: "visiting",
        group: "Jail"
    },
        {
        name: "Treasure",
        type: "treasure",
        group: "Treasure"
    },
        {
        name: "Pension",
        type: "M03",
        group: "Miscellaneous"
    },
    {
        name: "Sialkot",
        type: "property",
        group: "N Punjab",
        price: 140,
        owner: null
    },
    {
        name: "WAPDA",
        type: "utility",
        group: "Company",
        price: 180,
        owner: null
    },
    {
        name: "Lahore",
        type: "property",
        group: "N Punjab",
        price: 190,
        rent: 19,
        owner: null
    },
    {
        name: "Lahore Junction Railway Station",
        type: "station",
        group: "Transport",
        price: 200,
        rent: 25,
        owner: null
    },
    {
        name: "Faislabad",
        type: "property",
        group: "N Punjab",
        price: 150,
        rent: 15,
        owner: null
    },
    {
        name: "Surprise",
        type: "surprise",
        group: "Surprise"
    },
    {
        name: "Sukkur",
        type: "property",
        group: "Sindh",
        price: 180,
        rent: 18,
        owner: null
    },
    {
        name: "Tax",
        type: "M04",
        group: "Miscellaneous"
    },
    {
        name: "Chitral",
        type: "property",
        group: "KPK",
        price: 170,
        rent: 17,
        owner: null
    },
    {
        name: "Jury Duty",
        type: "court",
        group: "Court"
    },
    {
        name: "Bahawalpur",
        type: "property",
        group: "S Punjab",
        price: 200,
        rent: 20,
        owner: null
    },
    {
        name: "Sahiwal",
        type: "property",
        group: "S Punjab",
        price: 210,
        rent: 21,
        owner: null
    },
    {
        name: "Treasure",
        type: "treasure",
        group: "Treasure"
    },
    {
        name: "Multan",
        type: "property",
        group: "S Punjab",
        price: 220,
        rent: 22,
        owner: null
    },
    {
        name: "Double Roll",
        type: "M05",
        group: "Miscellaneous"
    },
    {
        name: "KHI Airport",
        type: "station",
        group: "Transport",
        price: 200,
        rent: 25,
        owner: null
    },
    {
        name: "Karachi",
        type: "property",
        group: "Sindh",
        price: 280,
        rent: 280,
        owner: null
    },
    {
        name: "Surprise",
        type: "surprise",
        group: "Surprise"
    },
    {
        name: "Hyderabad",
        type: "property",
        group: "Sindh",
        price: 240,
        rent: 24,
        owner: null
    },
    {
        name: "Electric",
        type: "utility",
        group: "Company",
        price: 180,
        owner: null
    },
    {
        name: "Mohenjo-Daro",
        type: "property",
        group: "Sindh",
        price: 250,
        rent: 25,
        owner: null
    },
    {
        name: "Go To Jail",
        type: "goto",
        group: "Jail"
    },
    {
        name: "Hunza",
        type: "property",
        group: "JammuandKashmir",
        price: 300,
        rent: 30,
        owner: null
    },
    {
        name: "Gilgit",
        type: "property",
        group: "JammuandKashmir",
        price: 320,
        rent: 32,
        owner: null
    },
    {
        name: "Treasure",
        type: "treasure",
        group: "Treasure"
    },
    {
        name: "Kashmir",
        type: "property",
        group: "JammuandKashmir",
        price: 350,
        rent: 35,
        owner: null
    },
    {
        name: "Sui",
        type: "utility",
        group: "Company",
        price: 180,
        owner: null
    },
    {
        name: "ISB Airport",
        type: "station",
        group: "Transport",
        price: 200,
        rent: 25,
        owner: null
    },
    {
        name: "Murree",
        type: "property",
        group: "Federal",
        price: 340,
        rent: 35,
        owner: null
    },
    {
        name: "Surprise",
        type: "surprise",
        group: "Surprise"
    },
    {
        name: "Rawalpindi",
        type: "property",
        group: "Federal",
        price: 380,
        rent: 40,
        owner: null
    },
    {
        name: "Islamabad",
        type: "property",
        group: "Federal",
        price: 440,
        rent: 45,
        owner: null
    },
    {
        name: "Hefty Tax",
        type: "M06",
        group: "Miscellaneous"
    }
]
// static property to add total number of players which are playing

class Player {
    #name = ""
    #budget = 0
    #position = 0
    #property = []
    #roll = 0
    
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
    // Either have a roll total or individual rolls hmm
    Roll() {
        this.#roll =  Math.floor((Math.random()*6)+1);
        if (this.#roll === 6) {
            console.log("You rolled a 6! Rolling again")
            this.#roll += Math.floor((Math.random()*6)+1)
            if (this.#roll === 12) {
                console.log("You rolled another 6! Rolling again")
                this.#roll += Math.floor((Math.random()*6)+1)
                if (this.#roll === 18) {
                    console.log("18 Uh Oh! Going to Jail")
                    this.#position = 12;
                    return -1
                }
                else {
                    document.getElementById("DiceRoll").textContent = this.#roll
                    return this.#roll
                } 
            }
            else {
                document.getElementById("DiceRoll").textContent = this.#roll
                return this.#roll
            }
        } 
        else {
            document.getElementById("DiceRoll").textContent = this.#roll
            return this.#roll
        }
        document.getElementById("DiceRoll").textContent = this.#roll
        return this.#roll
    }
    Change(change) {
        this.#budget += change;
    }
    
    Buying(name, value) {
        this.#property.push(name)
        this.#budget -= value
    }

    Move(num) {
        if ( (this.#position + num) >= Board.length) {
            this.#position = (this.#position + num) - (Board.length)
            this.#budget += 200;
            if (this.#position === 0) {
                this.#budget += 50
            }
            
        }
        else {
            this.#position += num;
        }
        
    }

    Debugging() {
        console.log(this.#name)
        console.log(this.#budget)
        console.log(this.#position)
        console.log(this.#property)
    }

    GetName() {
        return this.#name
    }

    Properties() {
        return this.#property
    }
}


const player1 = new Player("Subhan", 1500)

// Continue button add to check if user wants to continue
// Bankruptcy
// Revival Button
const RollDice = document.querySelector("#Dice");
const BuyProp = document.querySelector("#Buy");

// Buying a property cant include in if statement because it calls multiple times
BuyProp.addEventListener("click", () => {
    console.log("Buying propery")
    if (player1.RemainingMoney() >= Board[pos].price) {
        player1.Buying(Board[pos].name, Board[pos].price)
        Board[pos].owner = player1.GetName()
        console.log(player1.RemainingMoney(), Board[pos], player1.Properties())
    }
    else {
        alert("Too Expensive")
    }
BuyProp.style.display = "none"
})

// Rolling Dice functionality the motherload
RollDice.addEventListener("click", () => {
    console.log("Dice was rolled. Lesgo");
    // Add timer for 120 seconds
    let test = player1.Roll()
    document.getElementById("playerName").textContent = player1.GetName() //need to add a function for that asw
    if (test === 18) {

    }
    else {
        prepos = player1.Place()
        player1.Move(test)
        player1.Debugging()
        pos = player1.Place()
        document.getElementById("pos").textContent = pos
        document.getElementById("name").textContent = Board[pos].name
        
        // Setting the owned/unowned setting up buying with this as well
        if (Board[pos].type === "property" || Board[pos].type === "station" || Board[pos].type === "utility") {
            
            if (Board[pos].owner === null) {
                document.getElementById("owner").textContent = "Unowned"
                BuyProp.style.display = "inline-block"
            }
            
            else{
                document.getElementById("owner").textContent = Board[pos].owner
            }

            
        }
        else {
            document.getElementById("owner").textContent = "Not a property"
        }


        // Setting up start passages already done on the class but need to check when like going to jail disabling that
        document.getElementById("budget").textContent = player1.RemainingMoney()

        
        // To set up later but for now properties list
        let props = ''
        
        document.getElementById("props").textContent = player1.Properties()
        
    }
    
    
    
})

// rl.question("Continue? (y/n): ", (inp) => {
//     while (inp.toLowerCase() === "y"){
//         let test = player1.Roll()
//         console.log(test)
//         player1.Move(test)
//         player1.Debugging()
//         pos = player1.Place()
//         if (Board[pos].owner === null) {
//             if (player1.RemainingMoney >= Board[pos].price) {
//                 rl.question("Buy property? (Y/N): ", (choice) => {
//                     if (choice.toLowerCase() == "y") {
//                         player1.Change(Board[pos].price) 
//                         Board[pos].owner = player1.GetName()
//                     }
//                     rl.close()
//                 })
                
//             }
//         }   
//     }
//     rl.close()
// })
