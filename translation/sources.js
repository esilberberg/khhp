document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Sources page elements
    const sourcesHeading1 = document.getElementById('sources-heading-1');
    const aboutSourcesHeading = document.getElementById('about-sources')
    const aboutSourcesText = document.getElementById('about-sources-text');
    const accessSources = document.getElementById('access-sources');
    const accessSourcesText = document.getElementById('access-sources-text');
    const sourcesHeading2 = document.getElementById('sources-heading-2');
    const sourcesSearchInput = document.getElementById('sources-search-input');
    const formatSelector = document.getElementById('format-selector');
    const helpModalHeading = document.getElementById('help-modal-heading');
    const helpModalText = document.getElementById('help-modal-text');

    // Guard clause: stop execution if we aren't on the Sources page
    if (!sourcesHeading1) return;

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
                    0: "All", 1: "Audio", 2: "Events", 3: "Images", 4: "Journalism", 
                    5: "Reports", 6: "Research", 7: "Video", 8: "Websites"
                },
                aboutSourcesHeading: 'About',
                aboutSourcesText: 'Browse our current collection by source type or keyword to tailor the search to your interests. For best results, start your search with just one keyword. Then, click on the title of any source to continue searching for related materials.',
                accessSources: 'Access Sources',
                accessSourcesText: 'Unfortunately, due to copyright restrictions, KHHP cannot provide direct access to the full text of every source. Wherever possible, a link is provided in the source entry. In most cases, that link goes to a bibliographic record in InfoKat, a library database at the University of Kentucky. Community members who are not affiliated with the University of Kentucky can use the available bibliographic details to request the source from their local public library. If you need help accessing a particular source, contact the KHHP development team at KYHispanicHeritageProject@gmail.com',
                helpModalHeading: 'Help',
                helpModalText: 'Suggested subjects to inspire your search: Agriculture, Community, Festivals, Food, Health, Horse, News, Language, Statistics.',
            },
            es: {
                sourcesHeading1: 'LAS FUENTES',
                sourcesHeading2: 'Explorar nuestra colección de materiales',
                placeholder: 'Buscar...',
                formatSelector: {
                    0: "Todo", 1: "Audio", 2: "Eventos", 3: "Imágenes", 4: "Periodismo", 
                    5: "Informes", 6: "Investigación", 7: "Vídeo", 8: "Sitios web"
                },
                aboutSourcesHeading: 'Sobre las fuentes',
                aboutSourcesText: 'Explore nuestra colección según tipo de fuente o palabra clave con el fin de adaptar la búsqueda a sus intereses. Para obtener los mejores resultados, empiece la búsqueda con una sola palabra clave. Después, pulse en el título de cualquier fuente para seguir explorando materias relacionadas.',
                accessSources: 'Acceder a las fuentes',
                accessSourcesText: 'Lamentablemente, debido a restricciones relacionadas con los derechos de autor, KHHP no puede ofrecer acceso directo al texto completo de cada fuente. Siempre que sea posible, se provee un enlace en la entrada correspondiente a cada fuente. En muchos casos, este enlace lleva a un registro bibliográfico en InfoKat, una base de datos de la biblioteca de la Universidad de Kentucky. Los miembros de la comunidad que no estén afiliados/as a esta universidad pueden usar los detalles bibliográficos disponibles a fin de solicitar esa fuente específica a través de la biblioteca pública local. Si usted necesitara ayuda para acceder a una fuente en particular, contacte al equipo de desarrollo de KHHP a: KYHispanicHeritageProject@gmail.com',
                helpModalHeading: 'Ayuda',
                helpModalText: 'Temas sugeridos para inspirar su búsqueda: Agricultura, Caballos, Comunidad, Festivales, Comida, Salud, Noticias, Estadísticas.',
            }
        };

        // Update elements
        sourcesHeading1.textContent = translations[language].sourcesHeading1;
        aboutSourcesHeading.textContent = translations[language].aboutSourcesHeading;
        aboutSourcesText.textContent = translations[language].aboutSourcesText;
        accessSources.textContent = translations[language].accessSources;
        accessSourcesText.textContent = translations[language].accessSourcesText;
        sourcesHeading2.textContent = translations[language].sourcesHeading2;
        sourcesSearchInput.placeholder = translations[language].placeholder;
        helpModalHeading.textContent = translations[language].helpModalHeading;
        helpModalText.textContent = translations[language].helpModalText;

        if (formatSelector) {
            for (let i = 0; i < formatSelector.length; i++) {
                if (translations[language].formatSelector[i]) {
                    formatSelector[i].text = translations[language].formatSelector[i];
                }
            }
        }
    }

    if (languageNavbar) {
        languageNavbar.addEventListener('click', function (event) {
            const selectedLanguage = event.target.getAttribute('data-lang');
            if (selectedLanguage) {
                event.preventDefault();
                localStorage.setItem('khhpLanguagePreference', selectedLanguage);
                updateContentLanguage(selectedLanguage);
            }
        });
    }
});