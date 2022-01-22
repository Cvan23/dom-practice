const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child1 = document.querySelector(".child1");
const child2 = document.querySelector(".child2");

const audio1 = new Audio("zapsplat1.mp3");

grandparent.addEventListener('click', (e) => {
  console.log('hello buttface!',(e));
  alert('Hello Buttface!');
});

parent.addEventListener('click', (e) => {
  audio1.play();
  e.stopPropagation();
});