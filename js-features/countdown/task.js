(() => {
    let currentTimerValue = parseInt(timer.textContent);
    let timerId = setInterval(() => {
        console.log(currentTimerValue)
        currentTimerValue--
        timer.textContent = currentTimerValue.toString()
        if (currentTimerValue <= 0) {
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
        }
        }, 1000);
})();
