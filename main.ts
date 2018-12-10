// this is the very first program based on tutorial from ng master class

// short readme:
/*
    based on node:
    (sudo) npm install -g typescirpt 


    ...\fst>tsc
    Version 2.6.1
    Syntax:   tsc [options] [file ...]

    Examples: tsc hello.ts
            tsc --outFile file.js file.ts
            tsc @args.txt

    Options:
    -h, --help                                         Print this message.
    --all                                              Show all compiler options.
    -v, --version                                      Print the compiler's version.
    --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
    -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
    --pretty                                           Stylize errors and messages using color and context (experimental).
    -w, --watch                                        Watch input files.
    -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'.
    -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
    --lib                                              Specify library files to be included in the compilation:
                                                        'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'esnext' 'dom' 'dom.iterable' 'webworker' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'esnext.asynciterable'
    --allowJs                                          Allow javascript files to be compiled.
    --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
    -d, --declaration                                  Generates corresponding '.d.ts' file.
    --sourceMap                                        Generates corresponding '.map' file.
    --outFile FILE                                     Concatenate and emit output to single file.
    --outDir DIRECTORY                                 Redirect output structure to the directory.
    --removeComments                                   Do not emit comments to output.
    --noEmit                                           Do not emit outputs.
    --strict                                           Enable all strict type-checking options.
    --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
    --strictNullChecks                                 Enable strict null checks.
    --strictFunctionTypes                              Enable strict checking of function types.
    --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
    --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
    --noUnusedLocals                                   Report errors on unused locals.
    --noUnusedParameters                               Report errors on unused parameters.
    --noImplicitReturns                                Report error when not all code paths in function return a value.
    --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
    --types                                            Type declaration files to be included in compilation.
    @<file>                                            Insert command line options and files from a file.



    ...\fst>tsc --v 
    Version 2.6.1

*/


console.log("This is pure JS code");


function someFoo() {
    console.log("This is another pure JS code");
}


console.log(someFoo); // wyswietl zawartosc funkcji
console.log("----------------------");
console.log(String(someFoo))
console.log("----------------------");
console.log(someFoo()); // uruchom ta ze foo


/*

uruchamiamy tsc
...>tsc main.ts


// i generujemy w ten sposob pliki js - 
...\fst>dir


 Directory of ...\fst

2018-12-10  10:35    <DIR>          .
2018-12-10  10:35    <DIR>          ..
2018-12-10  10:35             4 146 main.js
2018-12-10  10:35             4 156 main.ts
               2 File(s)          8 302 bytes
               2 Dir(s)  17 802 113 024 bytes free

...\fst>


 jak widac mozna za pomoca tsc przekompilowac kod na valid js
 ale z przykladu ponizej widac wyraznie ze node radzi sobie z uruchomieniem
 zarowno pure js'a, ale i tez mozna uruchamiac pliki main.ts bezposrednio! :D

...fst\>node main.ts
This is pure JS code

...fst\>node main.js
This is pure JS code

...\fst>
*/




/*
    Tutaj zaczynaja sie roznice pomiedzy js a ts
    typescript jest z mozliwoscia typowania tak jak jego sama nazwa wskazuje
*/

// przyklady deklaracji:
let a1 = 1; // od ecma6 juz mozna uzywac let const tak samo tj. i ts i js maja mozliwosc tworzenia takich deklaracji
var a2 = 2;


console.log("----------------------------------------");
console.log("sekcja doSth i doSth2")
console.log("----------------------------------------");
// i tutaj troche z hoistingiem
function doSth() {

    for(var i = 0 ; i < 5 ; i++ ) {
        console.log("w loopie: " + i); // simple as that
    }

    console.log("Poza loopem: " + i); // i tutaj mamy problem poniewaz hoisting powoduje ze var jest widoczny poza petla rowniez co oznacza ze zobaczymy loga dla i
}

/*
    naprawde powinno wygaladac to tak, ze:
    function doSth() {
        var i;
        for(i = 0 ; i < 5 ; i++ ) {
            console.log("w loopie: " + i); // simple as that
        }

        console.log("Poza loopem: " + i); // i tutaj mamy problem poniewaz hoisting powoduje ze var jest widoczny poza petla rowniez co oznacza ze zobaczymy loga dla i
    }

    co oznacza, ze deklaracja var w js zawsze przesuwana jest "na gore" swojego zasiegu i tutaj w naszym przypadku jest to zasieg funkcji
    def: https://developer.mozilla.org/pl/docs/Glossary/Hoisting (czyli tlumaczac: windowanie/podnoszenie)

    zapamietaj, ze Tylko deklaracje są windowane!
*/

doSth();
console.log("----------------------------------------");


// tutaj ciekawostka poniewaz proba tsc main.ts daje w consoli: main.ts(141,35): error TS2304: Cannot find name 'i'.
// jednak po uruchomieniu js'a i tak zadziala poniewaz let w tsc i tak zamieniany jest w var co znowu wprowadza reguly gry zwiazane z opcja hoistingu
function doSth2() {
    for(let i = 0 ; i < 5 ; i++ ) {
        console.log("w loopie: " + i); // simple as that
    }

    // z perspektywy ts ten kod nie jest poprawny!
    // NOK!
    //console.log("Poza loopem: " + i); // i tutaj mamy problem poniewaz hoisting powoduje ze var jest widoczny poza petla rowniez co oznacza ze zobaczymy loga dla i
}


// te foo po kompilacji do js uruchomi sie tj. node main.js zadziala, ale juz node main.ts wywali blad! :D
doSth2();


console.log("----------------------------------------");


console.log("----------------------------------------");
console.log("-----------sekcja zmiennych z typem-----");



// tutaj info: node main.ts nie zadziala!
// tylko tsc main.ts && node main.js
let zmiennaLiczbowa: number;
zmiennaLiczbowa = 5;

let innaZminnaLiczobowa: number = 11;
console.log("" + zmiennaLiczbowa);
console.log(innaZminnaLiczobowa);


// i tablica!
let zmiennaLiczbowaTab: number[] = [1,2,3];
console.log(zmiennaLiczbowaTab);


// enum
enum EE { E1 = 1, E2 = 2}
const mojTest = EE.E1;


/*
    i badaj jak wyglada wygenerowany enum w v js xDxDxD: 
    // enum
    var E;
    (function (E) {
        E[E["E1"] = 1] = "E1";
        E[E["E2"] = 2] = "E2";
    })(E || (E = {}));
*/

console.log("tutaj zrzut z consta, kory wczesniej pobieral dane z enuma: " + mojTest);

/*
    jednak ten kod tylko w ts tak wyglada
    po przekompilowaniu na js mamy:
    var zmiennaLiczbowa = 5;
    console.log(zmiennaLiczbowa);

    co oznacza ze mozemy pomimo wywalanych bledow przez tsc wygenerowac i tak dzialajacy kod js :D
*/

console.log("----------------------------------------");



// type assertions
console.log("----------------------------------------");


let msg; // to samo co let msg:any;
msg = "to jest jakis content";
// in this case also msg2 is any
// podczas kompilacji pojawia sie jakis error
// ale dziala wiec nie bardzo wiem o co kaman :/
let msg2 = (<string>msg).substr(1,2);
let msg3 = (msg as string).substr(2,3);

console.log("|" + msg2 + "|, |" + msg3 + "|");
console.log("----------------------------------------");



// przyklad strzalkowych funkcji
// arrow functions
// generalnie dla krotkich funkcji anonimowych
// ta skladnia jest jak zloto
console.log("----------------------------------------");
console.log("------------ARROW FUNCTIONS!------------");

let log = (msg) => {
    console.log(msg);
}

log("to jest test tej fukcji");

// anonimowa uruchomiona od razu!
((a) => console.log(a * a))(2);
(() => console.log("uruchamiamy funkcje anonimowa bez parametrow"));
// po kompilacji wyglada to tak:
/*
(function (a) { return console.log(a * a); })(2);
*/



console.log("----------------------------------------");

console.log("---------------INTERFACE!---------------");

let narysujPunktPrymitywnie = (x, y) => {
    console.log("to jest moj punkt x: " + x + ", y: " + y);
} 

// ta implementacja pobiera jednak duzy obiekt, jednak nie ma zadnych restrykcji, co wiaze sie z mozliwoscia wsadzania
// obietkow dowolnych niezgodnych z oczekiwaniem, co nie jest najfortunniejsze
let narysujPunktNiecoLepiej = (punkt) => {
    console.log(punkt);
}

let narysujPunktNiecoNiecoLepiej = ({x, y}) => {
    console.log("to jest moj punkt wygenerowany w narysujPunktNiecoNiecoLepiej: (x, y): " + x + ", " + y);
}



narysujPunktPrymitywnie(10, 20);

// wczesniej popelnialem blad poczatkujacego i nie dawalem nazw fieldsow (pol?) dla obiektu i sie dziwilem dlaczego nie chce dzialac xD
narysujPunktNiecoLepiej({
    x: 10,
    y: 5
});


narysujPunktNiecoNiecoLepiej({
    x: 1,
    y: 2
});




let narysujPunktTypy = (point: { x: number, y: number}) => {
    // troche verbose, ale dziala
    console.log("jestesmy w srodku: narysujPunktTypy");
    console.log(point);
}


narysujPunktTypy({
    x: 10, y: 11
});


// powyzej byl ino wstep - teraz badaj interface!
// nieco smuteg, ze po przekompilowaniu do js jako tako tego interfejsu nie ma
interface Punkt {
    x: number,
    y: number
}

let narysujPunktZInterfejsem = (mojPunkt: Punkt) => {
    console.log("narysujPunktZInterfejsem: ");
    console.log(mojPunkt);
}

narysujPunktZInterfejsem( {x: 123, y: 124} );


console.log("----------------------------------------");

console.log("-------------------CLASS!---------------");

// pojdziemy krok dalej
// interfejsy ograniczaja sie tylko i wylacznie
// do mozliwosci tworzenia deklaracji
// bez mozliwosci tworzenia implementacji elmentow
// co nieco nas ogranicza
// zatem do rzeczy pora na przykladowa klase:


class LepszyPunkt {
    x: number;
    y: number;
    rysuj() {
        console.log("rysuj ten punkt: (x, y): " + this.x + ", " + this.y);
    }

    odlegloscOdInnegoPunktu(innyPunkt: LepszyPunkt) {
        console.log("nie chce mi sie pisac implementacji, wiec ino uproszczona");
        console.log("ja: (" + this.x + ", " + this.y + ") oraz inny punkt: (" + innyPunkt.x + ", " + innyPunkt.y + ")");
    }



    constructor(_x: number = 0, _y: number = 0) {
        console.log("uruchamiam konstruktor!");
        this.x = _x;
        this.y = _y;
    }
}


/*
tak wyglada klasa po przekompilowaniu do vannila js
var LepszyPunkt = (function () {
    function LepszyPunkt(_x, _y) {
        console.log("uruchamiam konstruktor!");
        this.x = _x;
        this.y = _y;
    }
    LepszyPunkt.prototype.rysuj = function () {
        console.log("rysuj ten punkt: (x, y): " + this.x + ", " + this.y);
    };
    LepszyPunkt.prototype.odlegloscOdInnegoPunktu = function (innyPunkt) {
        console.log("nie chce mi sie pisac implementacji, wiec ino uproszczona");
        console.log("ja: (" + this.x + ", " + this.y + ") oraz inny punkt: (" + innyPunkt.x + ", " + innyPunkt.y + ")");
    };
    return LepszyPunkt;
}());
*/


// i teraz wazne musimy zadeklarowac zmienna ale przypisac nowy obiekt
// inaczej dla tego rodzaju (zlozonego obiektu) zostanie przypisane undefined
let p1: LepszyPunkt = new LepszyPunkt(1,2);
let p2: LepszyPunkt = new LepszyPunkt(4,6); 

let p3 = new LepszyPunkt();

p1.odlegloscOdInnegoPunktu(p2);
p2.odlegloscOdInnegoPunktu(p1);
p3.odlegloscOdInnegoPunktu(p3);



console.log("----------------------------------------");

console.log("-----------------CLASS 2!---------------");


class Klasa {
    private zmienna1;
    private zmienna2;


    // public is default
    foobar() {
        console.log("wywoluje foobar");
    }

    foobar2() {
        console.log("wywoluje foobar 2!");
    }

    showMe() {
        console.log("show me: " + this.zmienna1 + ", " + this.zmienna2);
    }


    przypiszWartosciDoZmiennych(arg1: number) {
        this.zmienna1 = 2 * arg1;
        this.zmienna2 = arg1 * arg1;
    }
}

let k = new Klasa();
k.przypiszWartosciDoZmiennych(10);
k.showMe();

// ale tutaj nie podobaja mi sie problemy z kompilacja
/*
class InnaKlasa {
    // domyslnie generuje fieldsy
    constructor(private x: number, private y: number) {}

    get a() {
        return this.x;
    }

    set a(v) {
        this.x = v;
    }


    show() {
        console.log(this.x + ", " + this.y)
    }
}


let ik = new InnaKlasa(1, 2);
ik.show();
ik.a = 20;
ik.show();
*/

console.log("----------------------------------------");