document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const modalWindow = document.querySelector('.modal');
    const modalForm = document.querySelector('.modal .modal-wrapper form');
    const openModalButton = document.querySelectorAll('.modal-button');
    const navLinks = document.querySelectorAll('.nav-menu ul li');
    const closeModalButton = document.querySelector('.modal-wrapper .close');
    const form = document.querySelector('form');
    const menuBurger = document.querySelector('.menu-burger');
    const navMenu = document.querySelector('.nav-menu');

    const successMessage = `<p class="success-message">Заявка принята! В ближайшее время с Вами свяжутся.</p>`;

    /*Modal window instructions*/

    modalWindow.addEventListener("click", (event) => {
        if (event.target === modalWindow) {
            modalWindow.close();
            body.classList.remove('hidden');
        }
    });

    openModalButton.forEach(button => {
        button.addEventListener('click', () => {
            modalWindow.showModal();
            body.classList.add('hidden');
        });
    });

    closeModalButton.addEventListener('click', () => {
        body.classList.remove('hidden');
        modalWindow.close();
    });

    /*Success submit message for modal window*/

    modalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        modalForm.style.display = 'none';
        modalForm.insertAdjacentHTML('beforebegin', successMessage);
    });

    /*Success submit message for landing form*/

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.style.display = 'none';
        form.insertAdjacentHTML('beforebegin', successMessage);
    });

    /*Mobile menu instructions*/

    menuBurger.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            body.classList.remove('hidden');
            menuBurger.classList.remove('fa-times');
            menuBurger.classList.add('fa-bars');
        } else {
            navMenu.classList.add('open');
            body.classList.add('hidden');
            menuBurger.classList.remove('fa-bars');
            menuBurger.classList.add('fa-times');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('hidden');
            navMenu.classList.remove('open');
            menuBurger.classList.remove('fa-times');
            menuBurger.classList.add('fa-bars');
        });
    });
})