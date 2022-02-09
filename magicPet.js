class Pet {
    constructor(name) {
        this,_name = name;
        this._hunger = 5;
        this._thirst = 5;
        this._happiness = 5;
        this._energy = 5;
        this._training = 5;
    }
    get title() {
        return this._name;
    }
    feed(){
        this.hunger--;
        this.thirst++;
        this.energy++;
    }

    drink(){
        this.thirst--;
        this.hunger++;
    }

    play(){
        this.happiness++;
        this.hunger++;
        this.thirst++;
        this.energy--;
    }

    sleep(){
        this.energy++;
        this.hunger++;
        this.thirst++;
        this.training--;
    }

    train(){
        this.happiness--;
        this.hunger++;
        this.thirst++;
        this.energy--;
    }
}

class Mimic extends Pet {
    type = "Mimic";
    training = 4;
    happiness = 7;
    hunger = 6;
}

class OwlbearCub extends Pet {
    type = "Owlbear Cub";
    energy = 4;
    hunger = 6;
}

class Pseudodragon extends Pet {
    type = "Pseudodragon";
    energy = 4;
    training = 6;
}

class BlinkDogPup extends Pet {
    type = "Blink Dog Pup";
    energy = 4;
    hunger = 6;
}