
class Enemy {
    constructor(life, name, level){
        this.life = life;
        this.name = name;
        this.level = level;
    }
getInfo() {
        console.log(this.life, this.name, this.level);
    }
}

const turtle = new Enemy(25, "Tommy", 10);
const bug = new Enemy(1, "Bobby", 1);

turtle.getInfo();
bug.getInfo();