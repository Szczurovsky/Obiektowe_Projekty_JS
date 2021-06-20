class Czlowiek {
    wiek: Number;
    waga: Number;
    wzrost: Number;
    imie: String;
    płeć: String;
    /**
     *
     */
    constructor(
        wiek: Number,
        waga: Number,
        wzrost: Number,
        imie: String,
        płeć: String
    ) {
        this.wiek = wiek;
        this.waga = waga;
        this.wzrost = wzrost;
        this.imie = imie;
        this.płeć = płeć;
    }

    getWiek(wiek) {
        return wiek;
    }
    getWaga(waga) {
        return waga;
    }
    getWzrost(wzrost) {
        return wzrost;
    }
    getImie(imie) {
        return imie;
    }
    getCzyKobieta(płeć) {
        if (płeć === "kobieta") return "to jest kobieta";
        else return "to nie jest kobieta";
    }
    getAll() {
        console.log(this.getWiek(this.wiek));
        console.log(this.getWaga(this.waga));
        console.log(this.getWzrost(this.wzrost));
        console.log(this.getImie(this.imie));
        console.log(this.getCzyKobieta(this.płeć));
    }
}
const czlowiek = new Czlowiek(20, 60, 180, "Dawid", "mężczyzna");
czlowiek.getAll();
