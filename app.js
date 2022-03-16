const input = document.getElementById('input');
const button = document.getElementById('button1');
const arr = document.getElementById('arr');





button.addEventListener('click', () => {
    if(input.value.toUpperCase() === "TITLE" ) {
       arr.style.backgroundColor = "#f1f11";
       arr.innerHTML = `
         <h1>Correct!</h1>
         <p>New</p>
       `;
    } else {
        arr.style.backgroundColor = 'red';
        arr.innerHTML = `
          <h1>Not Correct!</h1>
          <p>Try Again!</p>
        `;
        button.innerHTML = 'Try again!';

    }
    

});

button.addEventListener('click', () => {
     if(button.innerHTML === 'Try again!') {
        setTimeout(() => location.reload(), 1000);
     }

});

