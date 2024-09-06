document.addEventListener('DOMContentLoaded', function () {
    // System
    const languageNavbar = document.getElementById('language-navbar');
    const storedLanguage = localStorage.getItem('khhpLanguagePreference');

    // Help page
    const helpHeading = document.getElementById('help-heading');
    const helpDisplay = document.getElementById('help-display');
    const accordionButtons = helpDisplay.querySelectorAll('.help-accordion');
    const accordionPanels = helpDisplay.querySelectorAll('.help-accordion-panel');

    if (storedLanguage) {
        updateContentLanguage(storedLanguage);
    }

    function updateContentLanguage(language) {
        const translations = {
                    en: {
                        helpHeading: 'HELP',
                        q1: 'What kinds of information can I find on KHHP?',
                        a1: 'KHHP is primarily an index of information sources documenting the history, culture, and achievements of people of Hispanic descent living in Kentucky. On the <a href="sources.html">Sources</a> page, users can find references to news articles, academic research, reports, oral histories, other audio content, and blog posts.',
                        q2: 'How do I search for sources in KHHP?',
                        a2: 'Go to the <a href="sources.html">Sources</a> page, select a Source Type from the drop-down menu to the left of the search box (optional), enter a keyword in the search box, and click the magnifying glass icon to the right. Results that meet your search criteria will display in a list. Click on the title to read details about each source in the entry. By clicking on a Subject, Source Type, or Languages, you can view all sources of that kind.',
                        q3: 'How can I access the sources I find on KHHP?',
                        a3: 'Unfortunately, due to copyright restrictions, KHHP cannot provide direct access to the full text of every source. Wherever possible, a link is provided in the source entry. In most cases, that link goes to a bibliographic record in InfoKat, a library database at the University of Kentucky. If you are affiliated with the University of Kentucky, you can access content by clicking the full text link in those records. Community members who are not affiliated with the University of Kentucky can use the available bibliographic details to request the source from their local public library. If you need help accessing a particular source, please contact the KHHP development team at the following email: info@khhp.org.',
                        q4: 'What details are available for each source?',
                        a4: 'Each source is categorized by Source Type and Subjects. Source Types include: Audio; Event, Creative; Images; Journalism; Reports; Research; Transcript; Video; and Website. Subjects are assigned to further describe the nature of the source, the geographic area(s) it covers, and the topics it addresses.',
                        q5: 'What are “Stories”?',
                        a5: 'Go to the Stories page to find content produced and created by KHHP program collaborators. This page features oral history projects directed by Drs. Yanira Paz and Taylor Leigh, and stored through the Louie B. Nunn Center for Oral History. You will also find links to the KHHP Blog, which presents articles and annotated bibliographies that explore topics using the sources from the KHHP collection. The blog is managed by Dr. Ruth Brown and includes posts written by the KHHP development team, University of Kentucky students, and others.',
                        q6: 'How can I use KHHP sources?',
                        a6: '<p>Community Organizations</p><ul><li>Writing grant proposals</li><li>Creating reports</li><li>Assessing needs in the community</li><li>Establishing strategic initiatives</li></ul><p>Academic Researchers</p><ul><li>Studying the historical context and trajectory of Hispanic communities in Kentucky</li><li>Searching for sources that focus on specific aspects of the lived experience of people of Hispanic descent living in Kentucky</li><li>Creating opportunities to contribute to ongoing projects by submitting findings or investigating possible collaborations</li></ul><p>K-12 Instructors and Students</p><ul><li>Locating multicultural educational resources for use in their curricula</li></ul><p>Community Members</p><ul><li>Finding information pertaining to their community</li><li>Pursuing local and state-level research interests related to Hispanic people living in Kentucky</li><li>Identifying community resources</li></ul>',
                        q7: 'How can I contribute content to KHHP?',
                        a7: 'KHHP welcomes contributions from community members. Contributions from community members can help fill gaps in our knowledge base. KHHP also provides a means of publishing for project leaders, writers, and researchers. If you have used KHHP to complete a project, further the mission of your organization, or create educational resources, we would love to hear about it! If you would like to author a blog post or contribute some other kind of content to the KHHP site, please contact the development team at the following email address: info@khhp.org.',
                    },
                    es: {
                        helpHeading: 'AYUDA',
                        q1: '¿Qué tipo de información puedo conseguir en KHHP?',
                        a1: 'KHHP es principalmente un índice de fuentes de información que documentan la historia, la cultura y los logros de las personas de origen hispano en Kentucky. En la página de <a href="sources.html">Fuentes</a>, los/las usuarios/as pueden conseguir referencias a artículos periodísticos, investigación académica, reportajes, historias orales, así como otros contenidos de audio y blogs.',
                        q2: '¿Cómo puedo buscar información en KHHP?',
                        a2: 'Vaya a la página de <a href="sources.html">Fuentes</a>, seleccione el tipo de fuente del menú desplegable a la izquierda del cuadro de búsqueda y pulse en el ícono de la lupa ubicado a la derecha. Los resultados que respondan a su criterio de búsqueda aparecerán en forma de lista. Ud. puede leer los detalles sobre cada fuente en la entrada al pulsar en el título de la fuente. Al pulsar en Subject (tema), Source Type (tipo de fuente) o Languages (lenguajes), Ud. podrá ver todos los recursos en esa categoría.',
                        q3: '¿Cómo puedo tener acceso a las fuentes que consiga en KHHP?',
                        a3: 'Lamentablemente, debido a restricciones relacionadas con los derechos de autor, KHHP no puede ofrecer acceso directo al texto completo de cada fuente. Siempre que sea posible, se provee un enlace en la entrada correspondiente a cada fuente. Este enlace lleva a un registro bibliográfico en InfoKat, una base de datos de la biblioteca de la Universidad de Kentucky. Si Ud. está afiliado/a a esta universidad, podrá tener acceso al contenido pulsando el enlace al texto completo en esos registros. Los miembros de la comunidad que no estén afiliados/as a esta universidad pueden usar los detalles bibliográficos disponibles a fin de solicitar esa fuente específica a través de la biblioteca pública local. Si Ud. necesitara ayuda para acceder a una fuente en particular, favor contactar al equipo de desarrollo de KHHP a la siguiente dirección electrónica: info@khhp.org ',
                        q4: '¿Qué información está disponible para cada fuente?',
                        a4: 'Cada fuente se categoriza por Tipo de Fuente y Temas. Los tipos de fuente incluyen: Audio; Evento; Expresión Creativa; Imágen; Periodismo; Informe; Investigación; Video; y Sitio Web. Los temas presentan más detalles descriptivos sobre la fuente, las áreas geográficas con que se relaciona y los temas que toca.',
                        q5: '¿Qué son “Historias”?',
                        a5: 'Vaya a la página de Historias a fin de conseguir contenido producido por los/las colaboradores/as del programa KHHP. Esta página presenta proyectos de historia oral dirigidos por los Drs. Yanira Paz y Taylor Leigh y archivados en el y el Louie B. Center for Oral History [UK Libraries]. Allí también encontrará enlaces al KHHP Blog, el cual muestra artículos y bibliografías anotadas que exploran temas usando fuentes provenientes del proyecto KHHP. Este blog es administrado por la Dra. Ruth Brown e incluye publicaciones escritas por el equipo de desarrollo de KHHP, estudiantes de la Universidad de Kentucky y otros.',
                        q6: '¿Cómo puedo utilizar las fuentes de KHHP?',
                        a6: `<p>Organizaciones comunitarias</p>
                <ul>
                    <li>Preparación de solicitud de fondos</li>
                    <li>Preparación de reportes</li>
                    <li>Evaluación de necesidades de la comunidad</li>
                    <li>Establecimiento de iniciativas estratégicas</li>
                </ul>
                <p>Investigadores/ras académicos/as</p>
                <ul>
                    <li>Estudiar el contexto histórico y la trayectoria de las comunidades hispanas en el estado de Kentucky</li>
                    <li>Buscar fuentes que se enfocan en aspectos específicos de las experiencias vividas por gente de ascendencia hispana que viven en Kentucky</li>
                    <li>Crear oportunidades para contribuir con proyectos en desarrollo mediante el envío de hallazgos o explorando posibles colaboraciones de investigación
                    </li>
                </ul>
                <p>Docentes K-12 y Estudiantes</p>
                <ul>
                    <li>Localizar recursos educacionales multiculturales para usarlos en el currículo</li>
                </ul>
                <p>Miembros de la comunidad</p>
                <ul>
                    <li>Encontrar información relacionada con sus comunidades</li>
                    <li>Compartir intereses de investigación a nivel local y estatal relacionados con los hispanos que viven en Kentucky</li>
                    <li>Identificar recursos de la comunidad y establecer redes de apoyo</li>
                </ul>`,
                        q7: '¿Cómo puedo contribuir con contenidos para KHHP?',
                        a7: 'KHHP recibe con mucho gusto contribuciones por parte de miembros de la comunidad, ya que estas contribuciones pueden llenar vacíos en nuestra base de información. KHHP también proporciona vías para que los/las líderes de proyectos, escritores/as e investigadores/as puedan publicar. Si Ud. usa KHHP para completar un proyecto, para ampliar la misión de su organización o para crear recursos educativos, nos complacería mucho saberlo. Si Ud. quisiera escribir un blog o contribuir con cualquier otra forma de contenido con la página de KHHP, favor contacte al equipo de desarrollo del proyecto a la siguiente dirección electrónica: info@khhp.org',
                    }
                };
        helpHeading.textContent = translations[language].helpHeading;
        accordionButtons.forEach((button, index) => {
            button.textContent = translations[language][`q${index + 1}`] 
          });
        accordionPanels.forEach((panel, index) =>{
            panel.innerHTML = translations[language][`a${index +1}`]
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