const addressButton = document.getElementById("address");
addressButton.addEventListener("click", addressLink);

function addressLink() {
    window.location.href = "https://www.google.com/maps/place/460+W+Roger+Rd+%23105,+Tucson,+AZ+85705/@32.2796792,-110.982193,17z/data=!3m1!4b1!4m6!3m5!1s0x86d673e93841d4eb:0x2028d0e15611809d!8m2!3d32.2796792!4d-110.9796181!16s%2Fg%2F11qz9k54d3?entry=ttu";
}

let autoGlass = document.getElementById("autoGlassHidden");
let windowTint = document.getElementById("windowTintHidden");
let chipRepair = document.getElementById("chipRepairHidden");
let headlight = document.getElementById("headlightHidden");
let windowRegulators = document.getElementById("windowRegulatorsHidden");
function unHiddenGlass() {
    // function removeDivs() {
    //     const otherDivs = document.getElementsByClassName("service-button");
    //     while (otherDivs.length > 0) {
    //         otherDivs[0].style.display = "none";
    //     }
    // }
    // removeDivs()    



    
    if (autoGlass.style.display === "none" || autoGlass.style.display === "") {
        autoGlass.style.display = "block";
        windowTint.style.display = "none";
        chipRepair.style.display = "none";
        headlight.style.display = "none";
        windowRegulators.style.display = "none";

    } else {
        autoGlass.style.display = "none";
    }

}
function unHiddenTint() {
    
    if (windowTint.style.display === "none" || windowTint.style.display === "") {
        autoGlass.style.display = "none";
        windowTint.style.display = "block";
        chipRepair.style.display = "none";
        headlight.style.display = "none";
        windowRegulators.style.display = "none";
    } else {
        windowTint.style.display = "none";
    }
}
function unHiddenChip() {
    if (chipRepair.style.display === "none" || chipRepair.style.display === "") {
        autoGlass.style.display = "none";
        windowTint.style.display = "none";
        chipRepair.style.display = "block";
        headlight.style.display = "none";
        windowRegulators.style.display = "none";
    } else {
        chipRepair.style.display = "none";
    }

}
function unHiddenHeadlight() {
    if (headlight.style.display === "none" || headlight.style.display === "") {
        autoGlass.style.display = "none";
        windowTint.style.display = "none";
        chipRepair.style.display = "none";
        headlight.style.display = "block";
        windowRegulators.style.display = "none";
    } else {
        headlight.style.display = "none";
    }

}
function unHiddenRegulators() {
    if (windowRegulators.style.display === "none" || windowRegulators.style.display === "") {
        autoGlass.style.display = "none";
        windowTint.style.display = "none";
        chipRepair.style.display = "none";
        headlight.style.display = "none";
        windowRegulators.style.display = "block";
    } else {
        windowRegulators.style.display = "none";
    }

}