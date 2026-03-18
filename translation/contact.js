document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Contact Page
    const contactHeading = document.getElementById('contact-heading');
    const contactSubmissionForm = document.getElementById('contact-submission-form');
    const figCaption = document.getElementById('figcaption')

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        contactHeading: 'Contact us',
                        contactSubmissionForm: '<iframe class="airtable-embed" src="https://airtable.com/embed/appqUxTjBIstgWbC8/pagzAA6oS8MFSzEuN/form"></iframe>',
                        figCaption: 'The KHHP team of Dr. Ruth Brown, Dr. Yanira Paz, and Taylor Leigh.' 
                    },
                    es: {
                        contactHeading: 'Contacto',
                        contactSubmissionForm: '<iframe class="airtable-embed" src="https://airtable.com/embed/appqUxTjBIstgWbC8/pag9IsuFZA7odSMue/form"></iframe>',
                        figCaption: 'Dra. Ruth Brown, Dra. Yanira Paz y Taylor Leigh, el equipo de KHHP.'
                        
                    }
                };
        contactHeading.textContent = translations[language].contactHeading;
        contactSubmissionForm.innerHTML = translations[language].contactSubmissionForm;
        figCaption.textContent = translations[language].figCaption;
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);
        console.log(selectedLanguage);
        
    });
});