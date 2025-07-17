//Etape 3 : créer le triangle symétrique de l'étape 1 mais avec la pointe vers le bas.
let nbrLines;

function generateDoubleInvertTriangle(nbrLines) {
  for (i = nbrLines; i > 0; i--) {
    let star = "*";
    let space = ".";
    console.log(`${space.repeat(nbrLines - i)} ${star.repeat(i)}`);
  }
}
generateDoubleInvertTriangle(4);
