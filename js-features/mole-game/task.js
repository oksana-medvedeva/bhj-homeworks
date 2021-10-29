(() => {
    const getHole = index => document.getElementById(`hole${index}`);
    let deadNumber = 0;
    let lostNumber = 0;
    const setLost = val => {
        lostNumber = val;
        console.log("Lost: " + lostNumber);
        lost.textContent = lostNumber.toString();
    }
    const setDead = val => {
        deadNumber = val;
        console.log("Dead: " + deadNumber);
        dead.textContent = deadNumber.toString();
    }
    const checkWin = () => {
        if (deadNumber >= 10) {
            alert("Ура! Победа!")
            reset()
        }
    }
    const checkLost = () => {
        if (lostNumber >= 5) {
            alert("Увы :( Поражение")
            reset()
        }
    }
    const reset = () => {
        setLost(0);
        setDead(0)
    };
    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = () => {
            console.log(i);
            if (getHole(i).classList.contains("hole_has-mole")) {
                setDead(deadNumber + 1)
                checkWin()
            } else {
                setLost(lostNumber + 1)
                checkLost()
            }
        };
    }
})();
