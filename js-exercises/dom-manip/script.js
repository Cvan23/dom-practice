const body1 = document.body;

body1.append("My Cat Rules!");

const div1 = document.createElement('h3');
div1.innerText = "Hello Kitty!";
body1.append(div1);

const div2 = document.createElement('div');
div2.innerHTML = `
  <div class="container">
    <h1 id="h1">My Cat Really Kicks Ass!!!</h1>
    <div class="box1" id="box1">
      <div class="box2" id="box2"></div>
    </div>
    <h2 id="h2">She's queen of the universe!</h2>
    <p>This HTML content has been created in the <br/> Javascript file</p>
  </div>
`;
body1.append(div2);

// Event Listeners for innerHTML
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

box1.addEventListener('click', (e) => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;

  console.log('Box 1!', (e))

  e.stopPropagation();
});

box2.addEventListener('click', (e) => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  h1.style.backgroundColor = "#" + randomColor;
  h2.style.backgroundColor = "#" + randomColor2;

  e.stopPropagation();
});



