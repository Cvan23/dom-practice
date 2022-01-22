const purchTckt = document.getElementById('purchase');

const genTicket = 20;
const discountTicket = 10;

function buyTicket() {
  const age = prompt('What is your age?');
  let cost = genTicket;

  if((age <= 12) || (age >= 65)) {
    cost = discountTicket
  }
  alert('your ticket will cost: $' + cost) 
}

purchTckt.addEventListener('click', () => {
  buyTicket()
})