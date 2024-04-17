// CONSTRUCTOR FUNCTION - they generate objects.
// Praksa je da imena CF-a pocinju velikim slovom.

function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

const todo = new Todo("Buy Aplles", false);
const todo2 = new Todo("Buy bannanas", true);
const todo3 = new Todo("Buy a book", true);

console.log(todo);
console.log(todo2);
console.log(todo3);

// CF with methods

function Books(title, author) {
  this.title = title;
  this.author = author;
  this.getAuthor = function () {
    console.log(`The author of the book '${this.title}' is ${this.author}.`);
  };
}

const book1 = new Books("Homo Deus", "Juval Noa Harari");
const book2 = new Books("First three minutes", "Steven Veinberg");
const book3 = new Books("Great Silence", "Milan M. Cirkovic");
const book4 = new Books("Breef History of time", "Steven Hoking");

console.log(book2);
console.log(book4);
book3.getAuthor();
book1.getAuthor();

// Prototypes  -  svi objekti imaju prototipove.
// Prototipovi su vec ugradjeni metodi (npr za Arr .push  .slice ...).
// Mi mozemo sami da pravimo svoje prototipove.
// Ukoliko CF ima metode tj. funkcije,svakim nivim pozivanjem CF-a pravi se i mesto za
// metod pa tako moze da dodje do povecanja memorije.
// Taj problem se resava prototipovima.

function NewBooks(title, author) {
  this.title = title;
  this.author = author;
}

NewBooks.prototype.getAuthor = function () {
  console.log(`The author of the book '${this.title}' is ${this.author}.`);
};

const book5 = new NewBooks("Decoding Reality", "Vlatko Vedral");
const book6 = new NewBooks("Tuesdays with Morrie", "Mitch Elbom");
const book7 = new NewBooks("48 Laws of Power", "Robert Green");
const book8 = new NewBooks("On The Beach", "Nevile Shute");

console.log(book6);
console.log(book8);
book7.getAuthor();
book5.getAuthor();

// Prototypal Inheritence

function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};
Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!`);
};

function Dragon(life, name, level, color, spell) {
  Enemy.call(this, life, name, level);
  // Pozivaju se paramentri CF Enemy i keyword this ali u kontekstu CF Dragon
  // a dodoatni parametri se mogu definisati(color,spell) se mogu definisati normalno.
  this.color = color;
  this.spell = spell;
}
Dragon.prototype.fireBreath = function () {
  console.log(`FIIIRREEEE!!`);
};

const newDragon = new Dragon(75, "Blacktongue", 30, "green", "fire");
console.log(newDragon);
newDragon.fireBreath();


