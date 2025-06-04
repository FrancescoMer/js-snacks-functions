const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function filtraPerLettera(array, lettera) {
  return array.filter(parola => parola.startsWith(lettera));
}

const risultato = filtraPerLettera(names, "A");
console.log(risultato); 