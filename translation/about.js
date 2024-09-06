document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // About page
    const aboutHeading = document.getElementById('about-heading');
    const about1 = document.getElementById('about-1');
    const about2 = document.getElementById('about-2');
    const about3 = document.getElementById('about-3');
    const about4 = document.getElementById('about-4');
    const contactHeading = document.getElementById('contact-us-heading');
    const contact1 = document.getElementById('contact-1');
    const contact2 = document.getElementById('contact-2');
    const collabHeading = document.getElementById('collaborating-heading');
    


    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        aboutHeading: 'WHAT IS THE KENTUCKY HISPANIC HERITAGE PROJECT?',
                        about1: 'The mission of the Kentucky Hispanic Heritage Project (KHHP) is to maintain a digital space dedicated to the history, culture, achievements, and contemporary experience of people of Hispanic descent living in Kentucky and, by doing so, to advance understanding and promote education about this population. To achieve this mission, KHHP presents multimodal and multimedia data in a user-friendly interface that allows visitors to browse content as well as locate specific data efficiently. KHHP content spans qualitative and quantitative data, academic research, news and press coverage, oral history interviews, community organization information, original creative works, cultural events, and relevant public/private initiatives.',
                        about2: 'The project began in Fall 2021 as a collaboration between three faculty members from the University of Kentucky: Ruth Brown and Yanira Paz from the Department of Hispanic Studies and Taylor Leigh from UK Libraries. Our initial goal was to create a website to consolidate our existing research and oral history projects, each of which focused in some way on the history and culture of Hispanic peoples and communities in Kentucky.',
                        about3: 'Currently, the project is focused on developing this website as a digital space to collect, preserve, and share existing written, visual, and audio sources that document and celebrate the histories and cultures of Hispanic people and communities in Kentucky. In the future, we hope to provide information about and help promote cultural activities and events in the community, relevant public/private initiatives and organizations, and to also develop new oral history, research, and creative projects.',
                        about4: 'To help grow the site and better represent the diverse experiences and histories of Hispanic peoples and communities in Kentucky, we welcome community contributions in the form of short blog articles, research, video content, oral histories, visual art, and other original works.',
                        contactHeading: 'Contact Us',
                        contact1: 'For general questions, comments, or submission inquiries, please email info@khhp.org',
                        contact2: 'You are also welcome to reach out to our administrative team directly. Note, questions about the website are best addressed to Ruth Brown. Taylor Leigh can help with questions related to finding sources or conducting research at UK Libraries.',
                        collabHeading: 'Collaborating Partners',
                    },
                    es: {
                        aboutHeading: '¿QUÉ ES EL KENTUCKY HISPANIC HERITAGE PROJECT?',
                        about1:'La misión del Kentucky Hispanic Heritage Project (KHHP) es mantener un espacio digital dedicado a la historia, la cultura, los logros y la experiencia contemporánea de las personas de origen hispano que viven en Kentucky y, al hacerlo, fomentar con ello la comprensión y promover la educación sobre esta población. Para lograr esta meta, KHHP presenta datos multimodales y multimedia en una interfaz de fácil manejo que permite a los visitantes navegar su contenido, así como localizar datos específicos de una manera eficaz. La colección de KHHP abarca datos cualitativos y cuantitativos, investigación académica, noticias y cobertura de prensa, entrevistas de historia oral, información de organizaciones comunitarias, obras creativas originales, eventos culturales, e iniciativas relevantes públicas y privadas.',
                        about2:'Este proyecto empezó en el otoño de 2021 como una colaboración entre tres miembros del profesorado de la Universidad de Kentucky: Ruth Brown y Yanira Paz del Departamento de Estudios HIspanos [Department of Hispanic Studies] y Taylor Leigh de la Biblioteca de la misma universidad [UK Libraries]. Nuestra meta inicial era crear un sitio web para consolidar nuestra investigación existente y proyectos de historia oral, cada uno de los cuales se enfocaba de algún modo en la historia y la cultura de personas y comunidades hispanas en Kentucky.',
                        about3:'Actualmente, el proyecto se centra en desarrollar este sitio web como un espacio digital para recopilar, preservar y compartir fuentes existentes escritas, y audiovisuales que documentan y celebran las historias y culturas de personas y comunidades hispanas en Kentucky. En el futuro, esperamos proveer información sobre y ayudar a promocionar actividades y eventos culturales en la comunidad, iniciativas y organizaciones públicas y privadas relevantes y también desarrollar nueva historia oral, investigación y proyectos creativos.',
                        about4:'Para ayudarnos a expandir el sitio y representar mejor las diversas experiencias e historias de las personas y comunidades hispanas en Kentucky, acogemos con agrado contribuciones comunitarias, tales como artículos cortos en forma de blog, trabajos de investigación, contenido de video, historias orales, arte visual y otras obras originales.',
                        contactHeading: 'Contáctenos',
                        contact1: 'Para preguntas generales, comentarios, o sobre envíos, favor de enviar un correo electrónico a info@khhp.org',
                        contact2: 'También les  invitamos a contactar a nuestro equipo de desarrollo directamente. Preguntas sobre el sitio web es mejor dirigirlas a Ruth Brown. Taylor Leigh puede ayudar con lo relacionado a la ubicación de las fuentes o a cómo hacer investigación en las bibliotecas de la Universidad de Kentucky (UK Libraries).',
                        collabHeading: 'Socios colaboradores',
                    }
                };
        aboutHeading.textContent = translations[language].aboutHeading
        about1.textContent = translations[language].about1
        about2.textContent = translations[language].about2
        about3.textContent = translations[language].about3
        about4.textContent = translations[language].about4
        contactHeading.textContent = translations[language].contactHeading
        contact1.textContent = translations[language].contact1
        contact2.textContent = translations[language].contact2
        collabHeading.textContent = translations[language].collabHeading
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);
        console.log(selectedLanguage);     
    });
});