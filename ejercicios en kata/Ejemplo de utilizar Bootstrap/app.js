const secretNumberContainer = document.getElementById('secret-number');
const input = document.getElementById('floatingInput');
const button = document.getElementById('check-button');
const hint = document.getElementById('hint');
const scoreContainer = document.getElementById('score');

let score = 100;
scoreContainer.textContent = score;





const compareToRandom= function (){
        const randomNumber = Math.trunc(Math.random()*21);
        secretNumberContainer.textContent = `El número secreto fue: ${randomNumber}`;
        const respuesta = Number(input.value);
        
        if (respuesta===randomNumber){
            hint.textContent='Correcto!';
            hint.classList = 'alert alert-success';
            score++;
            scoreContainer.textContent = score;
        }else if (respuesta > randomNumber){
            hint.textContent='Intenta un número más pequeño';
            hint.classList = 'alert alert-danger';
            score--;
            scoreContainer.textContent = score;
        }else{
            hint.textContent='Intenta con un número más grande, sin miedo al éxito';
            hint.classList = 'alert alert-danger';
            score--;
            scoreContainer.textContent = score;
        }
        button.textContent='Volver a jugar';
}


button.addEventListener('click',compareToRandom);