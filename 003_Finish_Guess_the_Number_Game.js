// my selution
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives <= 0) throw new Error("Expect error already dead");
    else if (n === this.number && this.lives > 0) return true;
    else if (n !== this.number && this.lives > 0) {
      this.lives--;
      return false;
    }
  }
}

// simple selution on web
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw Error
    this.lives--
    return n === this.number
  }
}