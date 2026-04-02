const googleSheet = 'https://script.google.com/macros/s/AKfycbxg9B8IRwd6a-BQiykjFq6wz1PmoBU33CmexQ_Fy9SWuflFudGa99-5jFGNDw8_XXYD1A/exec';
const display = document.getElementById('sources-display');
const input = document.getElementById('sources-search-input');
const searchBtn = document.getElementById('sources-search-btn');
const refreshBtn = document.getElementById('refresh-btn');
const searchSummary = document.getElementById('search-summary');
const formatSelector = document.getElementById('format-selector');
const loader = document.getElementById('loader');
const sortSelector = document.getElementById('sort-selector');

const searchURL = window.location.href;
const searchParams = new URL(searchURL).searchParams;
const indexSearchTerms = Array.from(searchParams.values()).join(' ');
input.value = indexSearchTerms;

let apiData = [];

function getCurrentLanguage() {
    return localStorage.getItem('khhpLanguagePreference') || 'en';
}

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        apiData = data;
        filterData(input.value, formatSelector.selectedIndex);
    } catch (error) {
        console.error("Data fetch error:", error);
    }
}

getData(googleSheet);

function filterData(query, format) {
    let formatFilterData;
    const typeMapping = {
        1: 'Audio', 2: 'Event', 3: 'Image', 4: 'Journalism',
        5: 'Report', 6: 'Research', 7: 'Video', 8: 'Website'
    };

    formatFilterData = typeMapping[format] 
        ? apiData.filter((item) => item.Type === typeMapping[format]) 
        : apiData;

    if (query) {
        const searchTerms = query.toLowerCase().split(/\s+/).map(term => removeDiacritics(term));
        const filteredData = formatFilterData.filter(allData => {
            return searchTerms.every(term => {
                return Object.values(allData).some(value => {
                    if (value && typeof value === 'string') {
                        return removeDiacritics(value.toLowerCase()).includes(term);
                    }
                    return false;
                });
            });
        });
        displayData(filteredData, query);
    } else {
        displayData(formatFilterData, query);
    }
}

function runSearch() {
    const searchTerms = input.value.trim();
    const selectedFormat = formatSelector.selectedIndex;
    filterData(searchTerms, selectedFormat);

    const newURL = new URL(window.location.href);
    newURL.searchParams.set('q', searchTerms);
    window.history.pushState(null, '', newURL);
}

searchBtn.addEventListener('click', runSearch);
refreshBtn.addEventListener('click', () => {
    input.value = '';
    formatSelector.selectedIndex = 0;
    runSearch();
});
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') runSearch(); });
sortSelector.addEventListener('change', runSearch);

function displayData(data, queryTerms) {
    loader.style.display = 'none';
    const lang = getCurrentLanguage();
    const sortBy = sortSelector.value;

    const uiText = {
        en: {
            in: " in ", results: "results", result: "result", searchFor: "A search for",
            search: "A search", showingAll: "Showing all", returned: "returned",
            noResults: "Try again with single keywords such as Bluegrass, Cuba, festival, youth, migration, or food.",
            formats: ["", "Audio", "Events", "Images", "Journalism", "Reports", "Research", "Video", "Websites"],
            labels: { creator: "Creator", year: "Year", type: "Type", subject: "Subject", language: "Language", citation: "Citation", view: "View Source" }
        },
        es: {
            in: " en ", results: "resultados", result: "resultado", searchFor: "Una búsqueda de",
            search: "Una búsqueda", showingAll: "Mostrando todos los", returned: "devolvió",
            noResults: "Inténtelo de nuevo con palabras clave únicas como Bluegrass, Cuba, festival, juventud, migración o comida.",
            formats: ["", "Audio", "Eventos", "Imágenes", "Periodismo", "Informes", "Investigación", "Vídeo", "Sitios web"],
            labels: { creator: "Creador", year: "Año", type: "Tipo", subject: "Tema", language: "Idioma", citation: "Cita", view: "Ver fuente" }
        }
    };

    const t = uiText[lang];

    if (sortBy === 'title') {
        data.sort((a, b) => (a.Title || "").localeCompare(b.Title || ""));
    } else if (sortBy === 'date') {
        data.sort((a, b) => (parseInt(b.Year, 10) || 0) - (parseInt(a.Year, 10) || 0));
    }

    const selectedFormatIndex = formatSelector.selectedIndex;
    const formatTerm = selectedFormatIndex > 0 ? `${t.in}${t.formats[selectedFormatIndex]}` : '';
    
    let searchSummaryMsg;
    const cleanQuery = typeof queryTerms === 'string' ? queryTerms.trim() : '';
    const baseSummary = cleanQuery !== '' ? `${t.searchFor} "${cleanQuery}"${formatTerm}` : `${t.search}${formatTerm}`;

    if (data.length === 0) {
        searchSummaryMsg = `${baseSummary} ${t.returned} 0 ${t.results}. <br> ${t.noResults}`;
    } else {
        const resWord = data.length === 1 ? t.result : t.results;
        searchSummaryMsg = data.length < apiData.length 
            ? `${baseSummary} ${t.returned} ${data.length} ${resWord}.`
            : `${t.showingAll} ${data.length} ${resWord}.`;
    }
    searchSummary.innerHTML = searchSummaryMsg;

    const typeIconDict = {
        Audio: 'fa-file-audio', Event: 'fa-people-group', Images: 'fa-file-image',
        Journalism: 'fa-newspaper', Report: 'fa-file-contract', Research: 'fa-file-lines',
        Video: 'fa-file-video', Website: 'fa-globe'
    };

    display.innerHTML = data.map((object) => {
        const iconClass = typeIconDict[object.Type] || 'fa-file';
        const displayTypes = lang === 'en' ? (object.Type || "") : (object.Tipo || object.Type || "");
        const displaySubjects = lang === 'en' ? (object.Subjects || "") : (object.Temas || object.Subjects || "");
        const displayLangs = lang === 'en' ? (object.Languages || "") : (object.Idiomas || object.Languages || "");

        return `
            <div class="source-row-accordion">
                <div class="source-type-icon"><i class="fa-solid ${iconClass}"></i></div>
                <div class="source-title">${object.Title}</div>
            </div>
            <div class="source-row-panel">
                <div class="source-row-panel-content">
                    <div class="source-element"><span class="source-element-tag">${t.labels.creator}:</span> <span class="source-element-content">${object.Author}</span></div>
                    <div class="source-element"><span class="source-element-tag">${t.labels.year}:</span> <span class="source-element-content">${object.Year}</span></div>
                    <div class="source-element"><span class="source-element-tag">${t.labels.type}:</span> <span class="source-element-content">${displayTypes.split(',').map(type => `<button class="subject-tag">${type.trim()}</button>`).join('')}</span></div>
                    <div class="source-element"><span class="source-element-tag">${t.labels.subject}:</span> <span class="source-element-content">${displaySubjects.split(',').map(s => `<button class="subject-tag">${s.trim()}</button>`).join('')}</span></div>
                    <div class="source-element"><span class="source-element-tag">${t.labels.language}:</span> <span class="source-element-content">${displayLangs.split(',').map(l => `<button class="subject-tag">${l.trim()}</button>`).join('')}</span></div>
                    <div class="source-element"><span class="source-element-tag">${t.labels.citation}:</span> <span class="source-element-content">${object.Citation}</span></div>
                    <div class="source-url"><a href="${object.URL}" target="_blank" rel="noopener noreferrer">${t.labels.view} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.subject-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            input.value = tag.textContent;
            runSearch();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    const acc = document.getElementsByClassName("source-row-accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active-source");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
        };
    }
}

function listenForLangChange() {
    const nav = document.getElementById('language-navbar');
    if (nav) {
        nav.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-lang')) {
                setTimeout(runSearch, 150);
            }
        });
    } else {
        setTimeout(listenForLangChange, 500);
    }
}
listenForLangChange();