import { Qoute } from "./quote.js";

class Game {
  currentStep = 0;
  lastStep = 7;
    constructor({
        lettersWrapper,
        categoryWrapper,
        wordWrapper,
        outputWrapper,

    }) {
      this.categoryWrapper = categoryWrapper;
      this.lettersWrapper = lettersWrapper;
      this.wordWrapper = wordWrapper;
      this.outputWrapper = outputWrapper;
      
      const {text,category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      this.categoryWrapper.innerHTML = category;
      this.quote = new Qoute(text);
    }
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
    guess(letter,ev){
      ev.target.disabled= true;
      if(this.quote.guess(letter)){
        this.drawQuote();
      }else{
        this.currentStep++;
        document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
        if (this.currentStep == this.lastStep){
          this.losing();
        }
      };
      
    }
    drawLetters(){
      for (let i = 0; i< 26; i++) {
        const label = (i+10).toString(36);
        const button = document.createElement("button");
        button.innerHTML = label;
        button.addEventListener("click", (ev)=>this.guess(label,ev));

        this.lettersWrapper.appendChild(button);}
    }
    drawQuote(){
      const content=this.quote.getContent();
      this.wordWrapper.innerHTML=content;
      if(!content.includes("_")){this.winning()}
      
      
    }
    start(){
      document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();
        }
        winning(){
          this.wordWrapper.innerHTML = "Gratulacje! Wygrywasz";
          this.lettersWrapper.innerHTML = "";
        }
        losing(){
          this.wordWrapper.innerHTML = "Niestety przegrywasz!";
          this.lettersWrapper.innerHTML = "";
        }
    }

const game = new Game({
    lettersWrapper: document.getElementById("letters"),
    categoryWrapper: document.getElementById("category"),
    wordWrapper: document.getElementById("word"),
    outputWrapper: document.getElementById("output"),
});
game.start();
