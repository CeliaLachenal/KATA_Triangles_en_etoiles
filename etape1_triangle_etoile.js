//Etape 1 : créer une fonction qui affiche en console un triangle formé d'étoiles

let nbLines;

function generateTriangle(nbLines) {
  for (let i = 0; i <= nbLines; i++) {
    let etoiles = "*";

    console.log(`${etoiles.repeat(i)}`);
  }
}
generateTriangle(4);
