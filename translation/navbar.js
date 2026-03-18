document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Navbar
    const navHome = document.getElementById('nav-home');
    const navSources = document.getElementById('nav-sources');
    const navStories = document.getElementById('nav-stories');
    const navContact = document.getElementById('nav-contact');

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        navHome: 'Home',
                        navSources: 'Sources',
                        navStories: 'Stories',
                        navContact: 'Contact',
                    },
                    es: {
                        navHome: 'Inicio',
                        navSources: 'Fuentes',
                        navStories: 'Historias',
                        navContact: 'Contacto',
                    }
                };
        navHome.textContent = translations[language].navHome;
        navSources.textContent = translations[language].navSources;
        navStories.textContent = translations[language].navStories;
        navContact.textContent = translations[language].navContact;
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);   
    });
});