var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1}
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            { name: "Bow", arrow: [
                { name: "+1 Arrows of Punishing", damage: 40, qty: 3},
                { name: "Wooden Arrows", damage: 10, qty: 4}
            ]}
        ]
    }
}

var listWeapons = function(character) {
    console.log("Listing weapons for " + character.name);
    for(var i in character.weapons) {
        var weapon = character.weapons[i];
        console.log("\t* " + weapon.name);
    }
}



listWeapons( adventuringParty.warrior );
listWeapons( adventuringParty.wizard );