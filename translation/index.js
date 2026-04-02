document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Homepage
    const welcomeMsg = document.getElementById('welcome-msg');
    const homepageSearchInput = document.getElementById('homepage-search-input');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        welcomeMsg: 'Welcome to the Kentucky Hispanic Heritage Project, a digital space dedicated to the history, culture, achievements, and contemporary experience of people of Hispanic descent living in Kentucky.',
                        
                        placeholder: 'Search sources...',
                        p1: 'This website provides information on existing written, visual, and audio sources that document the history, culture, and achievements of people of Hispanic descent living in Kentucky. Users can choose to browse materials by source type, language of publication, or enter keywords to tailor the search to their interests. Hyperlinks lead users directly to open-access sources as available, and to the University of Kentucky Libraries’ catalogue record as needed for periodical, print, and online journals. The website and search are fully bilingual, allowing users to explore in either English or Spanish.',
                        p2: 'The majority of the sources have been identified through thematic searches of materials that are either published online or indexed through online databases. As the project grows, we hope to include a greater variety of source types, wider geographic representation, Spanish-language publications and information on current events, all with the goal of making the information presented in our collection as representative of the history, culture, and geographic distribution of Hispanic communities in Kentucky as possible. While you might not find what you are looking for on this visit, please check back with us! We regularly add new sources and hope that over time our collection will support a variety of interests, from personal curiosity to cultural programming, research, and beyond.'
                        
                    },
                    es: {
                        welcomeMsg: 'Bienvenidos/as al Kentucky Hispanic Heritage Project (KHHP por sus siglas en inglés), un espacio digital dedicado a la historia, los logros y la experiencia contemporánea de las personas de herencia hispana que viven en Kentucky',
                        
                        placeholder: 'Explorar fuentes...',
                        p1: 'Este sitio web ofrece información sobre fuentes escritas, visuales y de audio que documentan la historia, la cultura y los logros de las personas de ascendencia hispana que viven en Kentucky. Los/as usuarios/as pueden explorar los materiales por tipo de fuente, idioma de publicación o introducir palabras clave para adaptar la búsqueda a sus intereses. Los enlaces llevan directamente a las fuentes de acceso abierto disponibles y al catálogo de las Bibliotecas de la Universidad de Kentucky, según sea necesario, para publicaciones periódicas, impresas y en línea. El sitio web y la búsqueda son completamente bilingües, lo que permite a los/as usuarios/as explorar en inglés o español.',
                        p2: 'La mayoría de las fuentes se han identificado mediante búsquedas temáticas de materiales publicados en línea o indexados en bases de datos en línea. A medida que el proyecto crezca, esperamos incluir una mayor diversidad de tipos de fuentes, representación geográfica, publicaciones en español y temas actuales, con el objetivo de presentar una colección que sea lo más representativa posible de la historia, cultura y distribución geográfica de las comunidades hispanas en Kentucky.Aunque es posible que no encuentre lo que busca en esta visita, ¡esperamos que regrese en otro momento! Agregamos nuevas fuentes periódicamente y esperamos que con el tiempo nuestra colección responda a una variedad de intereses, desde la curiosidad personal hasta la programación cultural, investigación y más.'
                        
                    }
                };
        welcomeMsg.textContent = translations[language].welcomeMsg;
        homepageSearchInput.placeholder = translations[language].placeholder;
        p1.textContent = translations[language].p1;
        p2.textContent = translations[language].p2;
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);
        console.log(selectedLanguage);
        
    });
});