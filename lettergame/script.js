var keys = ['a.png', 'm.png', 's.png', 'l.png'];
var timeoutDuration = 2000;
var currentKey = '';
var correctCount = 0;
var timeout;

function getRandomKey(){
    return keys[Math.floor(Math.random() * keys.length)];
}

function showRandomKey(){
    currentKey = getRandomKey();
    document.getElementById('KeyImage').src = currentKey;
    resetTimeout();
}

function updateCounter(){
    document.getElementById('pointsCounter').textContent = 'score : ' + correctCount;
}

function resetTimeout(){
    clearTimeout(timeout);
    timeout = setTimeout( ()=> {
        document.getElementById('heading').textContent = 'Too Slow ! You Loose...';
        updateCounter();
        document.removeEventListener('keydown', handleKeyPress);
    }, timeoutDuration);
}

function handleKeyPress(event){
    const keyPressed = event.key.toLowerCase();
    const currentKeyName = currentKey.split('.')[0];
    
    if (keyPressed === currentKeyName){
        correctCount++;
        document.getElementById('heading').textContent = 'Correct..! Wait for the next Key';
        updateCounter();
        setTimeout(showRandomKey, 1000);
    }
    else{
        document.getElementById('heading').textContent = "You Loose...!"
        updateCounter();
        document.removeEventListener('keydown', handleKeyPress);
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.addEventListener('keydown', handleKeyPress);
    showRandomKey();
    updateCounter();
})