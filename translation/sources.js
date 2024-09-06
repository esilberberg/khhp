document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Sources page
    const sourcesHeading1 = document.getElementById('sources-heading-1');
    const sourcesHeading2 = document.getElementById('sources-heading-2');
    const sourcesSearchInput = document.getElementById('sources-search-input');
    const formatSelector = document.getElementById('format-selector');

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        sourcesHeading1: 'SOURCES',
                        sourcesHeading2: 'Search sources',
                        placeholder: 'Search...',
                        formatSelector: {
                            0: "All",
                            1: "Audio",
                            2: "Events",
                            3: "Images",
                            4: "Journalism",
                            5: "Reports",
                            6: "Research",
                            7: "Video",
                            8: "Websites"
                        },
                    },
                    es: {
                        sourcesHeading1: 'LAS FUENTES',
                        sourcesHeading2: 'Explorar nuestra colección de materiales',
                        placeholder: 'Buscar...',
                        formatSelector: {
                            0: "Todo",
                            1: "Audio",
                            2: "Eventos",
                            3: "Imágenes",
                            4: "Periodismo",
                            5: "Informes",
                            6: "Investigación",
                            7: "Vídeo",
                            8: "Sitios web"
                        },
                    }
                };
        sourcesHeading1.textContent = translations[language].sourcesHeading1;
        sourcesHeading2.textContent = translations[language].sourcesHeading2;
        sourcesSearchInput.placeholder = translations[language].placeholder;
        for (let i = 0; i < formatSelector.length; i++) {
            formatSelector[i].text = translations[language].formatSelector[i];
        }
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);
        console.log(selectedLanguage);
        
    });
});