const alert1 = document.getElementById('alert-1')
const alert2 = document.getElementById('alert-2')

alert1.addEventListener('click', () => {
  alert("Hello from Alert 1!")
})

alert2.addEventListener('click', () => {
  alert("Hello from Alert 2!")
  console.log("Hello from Alert 2 again!")
})