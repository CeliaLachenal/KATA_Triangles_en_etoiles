//etape 2 : créer le triangle symétrique de l'étape 1
let nblignes;

function generateInvertTriangle(nbLignes) {
  for (let i = 1; i <= nbLignes; i++) {
    let stars = "*";
    let spaces = " ";
    console.log(`${spaces.repeat(nbLignes - i)} ${stars.repeat(i)}`);
  }
}
generateInvertTriangle(4);
