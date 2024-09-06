document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Homepage
    const welcomeMsg = document.getElementById('welcome-msg');
    const searchHeading = document.getElementById('search-heading');
    const homepageSearchInput = document.getElementById('homepage-search-input');
    const readMore = document.getElementById('read-more');

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        welcomeMsg: 'Welcome to the Kentucky Hispanic Heritage Project, a digital space dedicated to the history, culture, achievements, and contemporary experience of people of Hispanic descent living in Kentucky.',
                        searchHeading: 'Search sources',
                        placeholder: 'Search...',
                        readMore: 'Read more',
                    },
                    es: {
                        welcomeMsg: 'Bienvenidos/as al Kentucky Hispanic Heritage Project (KHHP por sus siglas en inglés), un espacio digital dedicado a la historia, los logros y la experiencia contemporánea de las personas de herencia hispana que viven en Kentucky',
                        searchHeading: 'Explorar fuentes',
                        placeholder: 'Buscar...',
                        readMore: 'Leer más',
                    }
                };
        welcomeMsg.textContent = translations[language].welcomeMsg;
        searchHeading.textContent = translations[language].searchHeading;
        homepageSearchInput.placeholder = translations[language].placeholder;
        readMore.textContent = translations[language].readMore;
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);
        console.log(selectedLanguage);
        
    });
});