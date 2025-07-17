//Concevoir une fonction en JavaScript qui génère un triangle creux d'étoiles dans la console en fonction d'un nombre donné en paramètre.

let n;

function generateHollowTriangle(n) {
  for (i = 1; i <= n; i++) {
    let stars = "*";
    let spaces = " ";
    if (i == 1 || i == n) {
      /* console.log("ligne " + i); */
      console.log(`${spaces.repeat(n - i)}${stars.repeat(i * 2 - 1)}`);
    } else {
      /* console.log("ligne " + i); */
      console.log(`${spaces.repeat(n - i)}*${spaces.repeat(i * 2 - 3)}*`);
    }
  }
}

generateHollowTriangle(4);
