document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Stories page
    const storiesHeading = document.getElementById('stories-heading');
    const oralHistHeading = document.getElementById('oral-hist-heading');
    const blogHeading = document.getElementById('blog-heading');
    const readMore = document.getElementById('read-more');
    const historyCards = document.querySelectorAll('.history-card');

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        storiesHeading: 'STORIES',
                        oralHistHeading: 'Oral Histories',
                        blogHeading: 'Recent Blog Posts',
                        readMore: 'Read more',
                        oralHistories: {
                            title1: "Hispanic Heritage in Kentucky Oral History Project",
                            summary1: "A partnership between Dr. Yanira Paz the Louie B. Nunn Center for Oral History, this project documents the experiences of Hispanic immigrants in Kentucky. Interviewees/narrators discuss their personal life stories, motivations for coming to the United States and to Kentucky, family history, as well as their initial experiences in the first months or years living in Kentucky.",
                            title2: "APOYO KY: Supporting Hispanic/Latinx Communities in Kentuck Oral History Project",
                            summary2: "A partnership between Dr. Taylor Leigh and the Louie B. Nunn Center for Oral History, “Apoyo KY: Supporting Hispanic/Latinx Communities in Kentucky” is an oral history series featuring individuals who work with and support Hispanic/Latinx communities in Kentucky. Each interview covers the interviewee’s life and work, as well as the impact of the COVID pandemic.",
                        }
                    },
                    es: {
                        storiesHeading: 'HISTORIAS',
                        oralHistHeading: 'Historias Orales',
                        blogHeading: 'Publicaciones Recientes en forma de blogs',
                        readMore: 'Leer más',
                        oralHistories: {
                            title1: 'HISPANIC HERITAGE IN KENTUCKY ORAL HISTORY PROJECT',
                            summary1: 'Este proyecto es una colaboración entre la Dra. Yanira Paz y el Louie B. Center for Oral History [UK Libraries] y su propósito es documentar las experiencias de inmigrantes hispanos/as en Kentucky. Los/las entrevistados/as comparten sus historias personales y familiares, así como sus motivaciones para venir a los Estados Unidos y a Kentucky y sus primeras experiencias en los primeros meses o años de su llegada a Kentucky.',
                            title2: 'APOYO KY: SUPPORTING HISPANIC/LATINX COMMUNITIES IN KENTUCKY ORAL HISTORY PROJECT',
                            summary2: 'Igualmente, este es un proyecto de colaboración entre el Dr. Taylor Leigh y el Louie B. Center for Oral History.  “Apoyo KY: Supporting Hispanic/Latinx Communities in Kentucky consiste en una serie de historias orales de personas que trabajan y apoyan las comunidades hispanas/latinx en Kentucky. Cada entrevista comprende los orígenes y la vida profesional de cada entrevistado/a, así como sus reflexiones sobre las comunidades hispanas en Kentucky.',
                        },
                    }
                };
        storiesHeading.textContent = translations[language].storiesHeading;
        oralHistHeading.textContent = translations[language].oralHistHeading;
        blogHeading.textContent = translations[language].blogHeading;
        readMore.textContent = translations[language].readMore;
        historyCards.forEach((card, index) => {
            const titleElement = card.querySelector('.history-title');
            const summaryElement = card.querySelector('.history-summary');
    
            titleElement.textContent = translations[language].oralHistories[`title${index + 1}`];
            summaryElement.textContent = translations[language].oralHistories[`summary${index + 1}`];
        });
    }

    languageNavbar.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute('data-lang');
        localStorage.setItem('khhpLanguagePreference', selectedLanguage);
        updateContentLanguage(selectedLanguage);
        console.log(selectedLanguage);
        
    });
});