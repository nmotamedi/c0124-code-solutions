'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person['age'] >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person['age'] >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  } else {
    return false;
  }
}
function categorizeAcidity(pH) {
  if (14 >= pH && pH > 7) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  switch (name.toLowerCase()) {
    case 'wakko':
      return "We're the warner brothers!";
    case 'yakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight Everybody!';
  }
}
function recommendMovie(genre) {
  switch (genre.toLowerCase()) {
    case 'action':
      return 'Point Break';
    case 'comedy':
      return 'Superbad';
    case 'horror':
      return 'Barbarian';
    case 'drama':
      return 'Moonlight';
    case 'musical':
      return 'The Young Girls of Rochefort';
    case 'sci-fi':
      return 'Back To The Future';
    default:
      return 'Be less specific';
  }
}
