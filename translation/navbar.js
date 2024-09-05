document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Navbar
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navSources = document.getElementById('nav-sources');
    const navStories = document.getElementById('nav-stories');
    const navHelp = document.getElementById('nav-help');

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        navHome: 'Home',
                        navAbout: 'About',
                        navSources: 'Sources',
                        navStories: 'Stories',
                        navHelp: 'Help',
                    },
                    es: {
                        navHome: 'Inicio',
                        navAbout: 'Acerca de',
                        navSources: 'Fuentes',
                        navStories: 'Historias',
                        navHelp: 'Ayuda',
                    }
                };
        navHome.textContent = translations[language].navHome;
        navAbout.textContent = translations[language].navAbout;
        navSources.textContent = translations[language].navSources;
        navStories.textContent = translations[language].navStories;
        navHelp.textContent = translations[language].navHelp;
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);   
    });
});