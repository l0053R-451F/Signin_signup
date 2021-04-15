function show_hide(num) {
    if (num == 1) {
        document.getElementById("indicator1").style.display = "block";
        document.getElementById("indicator2").style.display = "none";
        document.getElementById("indicator3").style.display = "none";
    } else if (num == 2) {
        document.getElementById("indicator1").style.display = "none";
        document.getElementById("indicator2").style.display = "block";
        document.getElementById("indicator3").style.display = "none";
    } else if (num == 3) {
        document.getElementById("indicator1").style.display = "none";
        document.getElementById("indicator2").style.display = "none";
        document.getElementById("indicator3").style.display = "block";
    } else {
        document.getElementById("indicator1").style.display = "none";
        document.getElementById("indicator2").style.display = "none";
        document.getElementById("indicator3").style.display = "none";
    }

    // var x = document.getElementById("indicator");
    // if (x.style.display == "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
}

function PositionChange() {
    document.getElementById("whiteBox").style.left = "375px";
    document.getElementById("blueBox").style.left = "915px";
}