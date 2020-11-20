let checkBtn = document.getElementById("check-btn");
let inputCheckbox = document.getElementById("check");
let day = document.getElementById("day");
let night = document.getElementById("night");
let cloud = document.getElementsByClassName("cloud");

checkBtn.addEventListener("click", () => {
    if(!inputCheckbox.checked){
        day.style.visibility = "visible";
        for(element of cloud) element.style.visibility = "visible";
        night.style.visibility = "hidden";
        document.body.style.background = "rgb(236, 236, 236)";
    }
    else {
        for(element of cloud) element.style.visibility = "hidden";
        day.style.visibility = "hidden";
        // cloud.style.visibility = "hidden";
        night.style.visibility = "visible";
        document.body.style.background = "rgb(62, 62, 68)";
    }
});

function click(element){
    element.addEventListener('click', () => {
        inputCheckbox.click();
    })
}

click(day);
click(night);