//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(color, owner) {
  this.status = 'normal';
  this.hungry = false;
  this.color = color;
  this.owner = owner;
};

const sadie = new Dog('black', 'mason');
const moonshine = new Dog('yellow', 'moonshine');
moonshine.hungry = true;
const atticus = new Dog();

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(pet, cool) {
  this.pet = function (pet) {
      pet.status = 'happy';
    };

  this.feed = function (feed) {
        pet.hungry = false;
      };

  this.cool = cool;
};

const mason = new Human(sadie, false);
const julia = new Human(moonshine, true);

moonshine.owner = undefined;
atticus.owner = undefined;
