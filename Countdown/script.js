let timerInterval;
let isTimerRunning = false;
let timeInSeconds = 0;

function startTimer() {
    const input = document.getElementById('time-input');
    const unit = document.getElementById('time-unit').value;
    let inputValue = parseInt(input.value);

    if (isNaN(inputValue) || inputValue <= 0) {
        alert('Bitte eine gültige Zahl eingeben!');
        return;
    }

    if (unit === "seconds") {
        timeInSeconds = inputValue;
    } else if (unit === "minutes") {
        timeInSeconds = inputValue * 60;
    } else if (unit === "hours") {
        timeInSeconds = inputValue * 3600;
    } else if (unit === "days") {
        timeInSeconds = inputValue * 86400;
    }

    if (!isTimerRunning) {
        isTimerRunning = true;
        const timerDisplay = document.getElementById('timer-value');

        timerInterval = setInterval(() => {
            if (timeInSeconds > 0) {
                timeInSeconds--;
                let days = Math.floor(timeInSeconds / 86400);
                let hours = Math.floor((timeInSeconds % 86400) / 3600);
                let minutes = Math.floor((timeInSeconds % 3600) / 60);
                let seconds = timeInSeconds % 60;

              
                let fontSize = Math.max(50, 200 - Math.floor(timeInSeconds / 60)); 
  
                timerDisplay.textContent = `${days > 0 ? days + ':' : ''}${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                timerDisplay.textContent = `${days > 0 ? days + ':' : ''}${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                timerDisplay.style.fontSize = font-size + "px";

            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                showPartyAnimation();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timeInSeconds = 0;
    const timerDisplay = document.getElementById('timer-value');
    timerDisplay.textContent = '00:00';
    const input = document.getElementById('time-input');
    input.value = '';
    const partyAnimation = document.getElementById('party-animation');
    partyAnimation.classList.remove('party-active');
}

function showPartyAnimation() {
    const partyAnimation = document.getElementById('party-animation');
    partyAnimation.innerHTML = ''; 
    partyAnimation.classList.add('party-active');

    const partyText = document.createElement('div');
    partyText.classList.add('party-text');
    partyText.textContent = 'Timer abgelaufen!';
    partyAnimation.appendChild(partyText);

    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * -20 + 'vh';
        const size = Math.random() * 8 + 4;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.animationDuration = 3 + Math.random() * 2 + 's';

        partyAnimation.appendChild(confetti);
    }

    setTimeout(() => {
        partyAnimation.classList.remove('party-active');
        partyAnimation.innerHTML = '';
    }, 6000);
}
