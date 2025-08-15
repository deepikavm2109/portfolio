// Typing effect
const typingText = ["Frontend (React.js) Developer", "Backend (Django) Developer", "Python Full Stack Developer", "HTML, CSS, Javascript Developer" ];
let i = 0, j = 0;
let currentText = '';
let isDeleting = false;
const speed = 150;

function type() {
    if(i >= typingText.length) i = 0;
    let fullText = typingText[i];
    
    if(isDeleting){
        currentText = fullText.substring(0, j--);
    } else {
        currentText = fullText.substring(0, j++);
    }

    document.querySelector('.typing').textContent = currentText;

    if(!isDeleting && j === fullText.length){
        isDeleting = true;
        setTimeout(type, 1000);
    } else if(isDeleting && j === 0){
        isDeleting = false;
        i++;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? speed/2 : speed);
    }
}
type();

// Scroll animations
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', checkScroll);

function checkScroll(){
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;
        if(sectionTop < triggerPoint){
            section.classList.add('show');
        }
    });
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! I will get back to you soon.");
    this.reset();
});

// Modal functions
function openModal(id){
    document.getElementById(id).style.display = 'flex';
}
function closeModal(id){
    document.getElementById(id).style.display = 'none';
}
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if(event.target === modal){
            modal.style.display = 'none';
        }
    });
};
