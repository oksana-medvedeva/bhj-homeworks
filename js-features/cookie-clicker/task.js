(() => {
    let totalClicks = parseInt(clicker__counter.textContent);
    let sizeChange = 20;
    cookie.onclick = function() {
        totalClicks++;
        console.log(totalClicks);
        clicker__counter.textContent = totalClicks.toString();
        let sign = totalClicks % 2 === 0 ? -1 : 1;
        console.log(sign);
        cookie.width += sign * sizeChange;
        cookie.height += sign * sizeChange;
    };
})();
