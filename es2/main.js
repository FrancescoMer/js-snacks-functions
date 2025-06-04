const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

function getInitials(array) {
  return array.map(name => name.charAt(0));
}

const initials = getInitials(names);
console.log(initials);
