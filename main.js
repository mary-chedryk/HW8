//*Task 1

const friends = ['Emy', 'Abby', "Mariia"];

//for

let result = '';

for (let i = 0; i < friends.length; i++) {
  if (i !== 0) {
    result += ',';  
  }
  result += friends[i];  
}

console.log(result);  


//join()
console.log(['Emy', 'Abby', 'Mariia'].join(', '));

//*Task 2 

const cards = [
    'Card-1',
    'Card-2',
    'Card-3',
    'Card-4',
    'Card-5',
];

console.log(cards.slice(1, 3)); 

//*Task 3

cards.pop("Card-3");
console.log(cards);

//*Task 4

cards.push("Card-6");
console.log(cards);

//*Task 5

cards.splice(1, 1, "Card-9");
console.log(cards);
