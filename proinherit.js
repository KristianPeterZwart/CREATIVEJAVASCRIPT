function Enemy(life, name, level){
    this.life = life;
    this.name = name;
    this.level = level;
}


function Dragon(life, name, level, color, spell) {
    // Keyword this is going to reference the Dragon object
    Enemy.call(this, life, name, level);
    // Define it as normal 
    this.color = color;
    this.spell = spell;
}

// Inherit Prototype
Dragon.prototype = Object.create(Enemy.prototype)

Dragon.prototype.fireBreath = function() {
    console.log("FIRE BREATH");
};

const newDragon = new Dragon(100, "Drago", 25, "Green", "Fire");

console.log(newDragon);
