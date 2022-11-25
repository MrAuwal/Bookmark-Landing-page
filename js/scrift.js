function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Accordion scrift

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Form validation Scrift

const form = document.getElementById("form")
const email = document.getElementById("email")


const setError = (element, massage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('small')

    errorDisplay.innerText = massage;

    inputControl.classList.add('error')
    inputControl.classList.remove('success')


}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('small')
    errorDisplay.innerText = '';

    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}


form.addEventListener("submit", e => {
    e.preventDefault();
    validateForm();
})

const validateForm = () => {

    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Email cannot be empty')
    } else if (!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        setError(email, 'Look like this is not an email')
    } else {
        setSuccess(email)
    }
}


// SiderBar scrift

function openNav() {
    let openNav = document.getElementById('mySidebar');
    openNav.style.width = "100%";


}

function closeNav() {
    document.getElementById('mySidebar').style.width = "0"
}