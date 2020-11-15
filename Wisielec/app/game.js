import { Quote } from "./quote.js";

class Game {
  quotes = [
    {
      text: "pan  tadeusz",
      category: "utwór literacki",
    },
    {
      text: "league  of  legends",
      category: "popularna gra komputerowa",
    },
    {
      text: "kto  mieczem  wojuje,  od  miecza  ginie",
      category: "Powiedzenie",
    },
    {
      text: "demokratyczna  republika  konga",
      category: "Państwo",
    },
    {
      text: "alexander  graham  bell",
      category: "Osoba",
    },
    {
      text: "baba  swoje,  czart  swoje",
      category: "Przysłowie",
    },
    {
      text: "co  wolno  wojewodzie,  to  nie  tobie,  smrodzie",
      category: "Przysłowie",
    },
    {
      text: "co  z  oczu,  to  z  serca",
      category: "Przysłowie",
    },
    {
      text: "cudza  praca  nie  wzbogaca",
      category: "Przysłowie",
    },
    {
      text: "miecz  przeznaczenia",
      category: "Literatura  -  jedna  z  części  znanego  cyklu",
    },
    {
      text: "akademia  pana  kleksa",
      category: "Film",
    },
  ];

  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outputWrapper = outputWrapper;
    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];

    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }
  guess(letter,ev) {
    ev.target.disabled = true;
    this.quote.guess(letter);
    this.drawQuote();
  }
  //dorzucic polskie litery!
  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label.toUpperCase();
      button.addEventListener("click", (event) => this.guess(label,event));
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content.toUpperCase();
  }
  start() {
    this.drawLetters();
    this.drawQuote();
  }
}

const game = new Game({
  lettersWrapper: document.getElementById("letters"),
  categoryWrapper: document.getElementById("category"),
  wordWrapper: document.getElementById("word"),
  outputWrapper: document.getElementById("output"),
});

game.start();
