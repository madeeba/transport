document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = "Thank you for your message, " + name + "! We will get back to you soon.";
        formMessage.style.color = "green";
        formMessage.style.fontWeight = "bold";
        
       
        document.getElementById('contactForm').reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});


let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
       
        header.style.opacity = '0';
    } else {
       
        header.style.opacity = '1';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values
});

function openModal() {
    document.getElementById("qrModal").style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("qrModal");
    modal.classList.add("fade-out");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fade-out");
    }, 300); 
}


document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
