document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Contact Page
    const contactHeading = document.getElementById('contact-heading');
    const contactSubmissionForm = document.getElementById('contact-submission-form');
    const figCaption = document.getElementById('figcaption')

    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    const devteamHeading = document.getElementById('devteam-heading')
    const collaboratingHeading = document.getElementById('collaborating-heading')

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        contactHeading: 'Contact us',
                        contactSubmissionForm: '<iframe class="airtable-embed" src="https://airtable.com/embed/appqUxTjBIstgWbC8/pagzAA6oS8MFSzEuN/form"></iframe>',
                        figCaption: 'The KHHP team of Dr. Ruth Brown, Dr. Yanira Paz, and Taylor Leigh.', 
                        p1: 'For general questions, comments, or submission inquiries, please email: KYHispanicHeritageProject@gmail.com',
                        p2: 'This project began in Fall 2021 as a collaboration between three faculty members from the University of Kentucky: Ruth Brown and Yanira Paz from the Department of Hispanic Studies and Taylor Leigh from UK Libraries. Our initial goal was to create a website to consolidate our existing research and oral history projects, each of which focused in some way on the history and culture of Hispanic peoples and communities in Kentucky.',
                        p3: 'Our program collaborators bring unique skills, interests, and experience to the project. We are all bilingual and welcome your comments in English or Spanish. Questions about the website and blog are best addressed to Ruth Brown. Taylor Leigh can help with questions related to finding sources or conducting research at UK Libraries.',
                        devteamHeading: 'Development Team',
                        collaboratingHeading: 'Collaborating Partners',
                    },
                    es: {
                        contactHeading: 'Contáctenos',
                        contactSubmissionForm: '<iframe class="airtable-embed" src="https://airtable.com/embed/appqUxTjBIstgWbC8/pag9IsuFZA7odSMue/form"></iframe>',
                        figCaption: 'Dra. Ruth Brown, Dra. Yanira Paz y Taylor Leigh, el equipo de KHHP.',
                        p1: 'Para preguntas generales, comentarios o sobre envíos, favor de enviar un correo electrónico a: KYHispanicHeritageProject@gmail.com',
                        p2: 'Este proyecto empezó en el otoño de 2021 como una colaboración entre tres miembros del profesorado de la Universidad de Kentucky: Ruth Brown y Yanira Paz del Departamento de Estudios HIspanos [Department of Hispanic Studies] y Taylor Leigh de la Biblioteca de la misma universidad [UK Libraries]. Nuestra meta inicial era crear un sitio web para consolidar nuestra investigación existente y proyectos de historia oral, cada uno de los cuales se enfocaba de algún modo en la historia y la cultura de personas y comunidades hispanas en Kentucky.',
                        p3: 'Nuestros colaboradores aportan diferentes habilidades, intereses y experiencias al proyecto. Todos somos bilingües e invitamos sus comentarios y preguntas en español o en inglés. Preguntas sobre el sitio web o blog es mejor dirigirlas a Ruth Brown. Taylor Leigh puede ayudar con lo relacionado a la ubicación de las fuentes o a cómo hacer investigación en las bibliotecas de la Universidad de Kentucky (UK Libraries).',
                        devteamHeading: 'Equipo de Desarollo',
                        collaboratingHeading: 'Socios/as colaboradores/as',
                    }
                };
        contactHeading.textContent = translations[language].contactHeading;
        contactSubmissionForm.innerHTML = translations[language].contactSubmissionForm;
        figCaption.textContent = translations[language].figCaption;
        p1.textContent = translations[language].p1;
        p2.textContent = translations[language].p2;
        p3.textContent = translations[language].p3;
        devteamHeading.textContent = translations[language].devteamHeading;
        collaboratingHeading.textContent = translations[language].collaboratingHeading;
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);
        console.log(selectedLanguage);   
    });
});