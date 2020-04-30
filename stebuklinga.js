"use strict";

const vardas = 'Justina';
console.log( vardas );

const metai = 32;
console.log( metai );

const turiuVaiku = true;

const nemokuVairuoti = false;

const vaikuVardai = ['Jonas', 'Julius'];
console.log( vaikuVardai );

const sakinys = `${vardas} turi ${vaikuVardai.length} vaikus`;
console.log( sakinys );

for ( let i=2; i<10; i=i+1) {
    console.log(i);    
}

const abc = 'abcdef';
const tekstoIlgis = abc.length;
console.log( tekstoIlgis );
for (let i=0; i<tekstoIlgis; i++){
    console.log(abc[i]);
}

const vaikoVardas = vaikuVardai[0];
const vardoIlgis = vaikoVardas.length;
console.log(vardoIlgis);
for (let i=0; i<vardoIlgis; i++) {
    console.log(vaikoVardas[i]);
    
}


