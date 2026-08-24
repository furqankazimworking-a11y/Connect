document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.querySelector('.nav-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
            var expanded = mobileMenu.classList.contains('open');
            navToggle.setAttribute('aria-expanded', expanded);
            navToggle.textContent = expanded ? '✕' : '☰';
        });
    }

    var billingSwitch = document.getElementById('billing-switch');
    if (billingSwitch) {
        billingSwitch.addEventListener('click', function () {
            billingSwitch.classList.toggle('on');
            var yearly = billingSwitch.classList.contains('on');
            document.querySelectorAll('[data-monthly]').forEach(function (el) {
                el.textContent = yearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
            });
        });
    }

    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var success = document.getElementById('form-success');
            if (success) {
                success.classList.add('show');
            }
            contactForm.reset();
        });
    }

    var newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = form.querySelector('input');
            var btn = form.querySelector('button');
            if (btn) {
                btn.textContent = 'Subscribed ✓';
            }
            if (input) {
                input.value = '';
            }
        });
    });
});
