const body1 = document.body;

body1.append("My Cat Rules!");

const div1 = document.createElement('div');
div1.innerText = "Hello Kitty!";
body1.append(div1);

const div2 = document.createElement('div');
div2.innerHTML = `
  <div class="container">
    <h1>My Cat Really Kicks Ass!!!</h1>
    <div class="box1" id="box1">
      <div class="box2"></div>
    </div>
    <h2>She's queen of the universe!</h2>
  </div>
`;
body1.append(div2);



