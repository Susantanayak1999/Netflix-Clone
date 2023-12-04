window.onload = function () {

    var inputEmail = document.getElementsByClassName("radioName");
    console.log(inputEmail);

    Array.from(inputEmail).forEach((e) => {
        e.addEventListener("change", FormChanged);
        console.log(e);
    })




    FormChanged();
}


var inputEmail = document.getElementsByClassName("radioName");
console.log(inputEmail);

Array.from(inputEmail).forEach((e) => {
    e.addEventListener("change", FormChanged);
    console.log(e);
})


function FormChanged() {
    var email = document.getElementById("emailCheck");
    var textMessage = document.getElementById("textMessageCheck");

    if (email.checked) {
        document.getElementById("mailContainer").style.display = "block";
        document.getElementById("textContainer").style.display = "none";
    }
    else if (textMessage.checked) {
        document.getElementById("mailContainer").style.display = "none";
        document.getElementById("textContainer").style.display = "block";
    }
}



function OpenClick() {
    document.getElementById("learnMoreContent").style.display = "block"
}

