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


function weaponAttack(character, weaponName) {
    console.log(character.name + " attacks with his " + weaponName);
    var maxDamage;
    for(var i in character.weapons) {
        var weapon = character.weapons[i];
        if(weapon.name.toUpperCase() == weaponName.toUpperCase()) {
          maxDamage = weapon.damage;
        }
    }
    console.log("He hits for " + Math.round( Math.random() * maxDamage )  + " damage");
}


    
weaponAttack(adventuringParty.warrior, "Axe");
weaponAttack(adventuringParty.wizard, "Staff");

