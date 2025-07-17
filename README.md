# KATA_Triangles_en_etoiles : exercices proposés par Antoine Caron de LyonJS lors d'un coding dojo à Ada Tech School le 08/07

Lien vers le repo des énnoncés : https://gist.github.com/Slashgear/ad9cf16e29bb0d4ca8e36f3b3361fb8d#file-dojo-md

J'ai copié les énnoncés des exercices 1 à 4 car c'est plus simple pour moi de les avoir au même endroit que mes fichiers réponses

# Exercice 1 : Créer un triangle avec des étoiles 🌟

## Objectif

Concevoir une fonction en JavaScript qui génère un triangle d'étoiles dans la console en fonction d'un nombre donné en paramètre.

---

## Consignes

1. Écris une fonction appelée `generateTriangle` qui prend un paramètre :

- `n` : un entier positif (représente le nombre de lignes du triangle).

2. La fonction doit afficher dans la console un triangle formé d'étoiles (`*`), où chaque ligne contient une étoile de plus que la précédente.

---

## Exemple d'exécution

Si la fonction est appelée avec le paramètre `4` :

```javascript
generateTriangle(4);
```

Le résultat affiché dans la console sera :

```txt
*
**
***
****
```

# Exercice 2 : Créer un triangle inversé avec des étoiles 🌟

## Objectif

Concevoir une fonction en JavaScript qui génère un triangle inversé d'étoiles dans la console en fonction d'un nombre donné en paramètre.

---

## Consignes

1. Écris une fonction appelée `generateInvertedTriangle` qui prend un paramètre :

- `n` : un entier positif (représente le nombre de lignes du triangle inversé).

2. La fonction doit afficher dans la console un triangle inversé formé d'étoiles (`*`), où chaque ligne contient :

- Des espaces avant les étoiles pour aligner à droite.
- Une étoile de plus que la précédente ligne.

---

## Exemple d'exécution

Si la fonction est appelée avec le paramètre `4` :

```javascript
generateInvertedTriangle(4);
```

Le résultat affiché dans la console sera :

```txt
   *
  **
 ***
****
```

# Exercice 3 : Créer un triangle doublement inversé avec des étoiles 🌟

## Objectif

Concevoir une fonction en JavaScript qui génère un triangle doublement inversé d'étoiles dans la console en fonction d'un nombre donné en paramètre.

---

## Consignes

1. Écris une fonction appelée `generateDoubleInvertedTriangle` qui prend un paramètre :

- `n` : un entier positif (représente le nombre de lignes du triangle).

2. La fonction doit afficher dans la console un triangle inversé formé d'étoiles (`*`), où chaque ligne contient :

- Un nombre d'étoiles décroissant.
- Des espaces avant les étoiles pour aligner à droite.

---

## Exemple d'exécution

Si la fonction est appelée avec le paramètre `4` :

```javascript
generateDoubleInvertedTriangle(4);
```

Le résultat affiché dans la console sera :

```txt
****
 ***
  **
   *
```

# Exercice 4 : Créer un triangle d'étoiles creux 🌟

## Objectif

Concevoir une fonction en JavaScript qui génère un triangle creux d'étoiles dans la console en fonction d'un nombre donné en paramètre.

---

## Consignes

1. Écris une fonction appelée `generateHollowTriangle` qui prend un paramètre :

- `n` : un entier positif (représente le nombre de lignes du triangle).

2. La fonction doit afficher dans la console un triangle creux formé d'étoiles (`*`), où chaque ligne contient :
3. Des espaces avant les étoiles pour aligner à droite.
4. Une étoile en début et fin de ligne.
5. Des espaces entre les étoiles.
6. Une étoile de plus que la précédente ligne.
7. Des espaces pour aligner à droite.
8. Des étoiles en début et fin de ligne.

---

## Exemple d'exécution

Si la fonction est appelée avec le paramètre `4` :

```javascript
generateHollowTriangle(4);
```

Le résultat affiché dans la console sera :

```txt
   *
  * *
 *   *
*******
```
