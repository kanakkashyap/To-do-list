function updateTime() {
    var dt = new Date();
    // This updates the HTML element every time the function runs
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

// This tells the browser to run the function every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);

// Run it once immediately so the screen isn't blank for the first second
updateTime();