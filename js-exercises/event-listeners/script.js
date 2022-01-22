const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child1 = document.querySelector(".child1");
const child2 = document.querySelector(".child2");

const audio1 = new Audio("zapsplat1.mp3");

grandparent.addEventListener('click', (e) => {
  console.log('HELLO BUTTFACE!!!',(e));
  alert('HELLO BUTTFACE!!!');
});

parent.addEventListener('click', (e) => {
  audio1.play();

  e.stopPropagation();
});

child1.addEventListener('click', (e) => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;

  e.stopPropagation();
});

child2.addEventListener('click', (e) => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  grandparent.style.backgroundColor = "#" + randomColor;

  e.stopPropagation();
});