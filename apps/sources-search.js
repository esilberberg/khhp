// Define API endpoint and DOM elements
const googleSheet = 'https://script.google.com/macros/s/AKfycbxg9B8IRwd6a-BQiykjFq6wz1PmoBU33CmexQ_Fy9SWuflFudGa99-5jFGNDw8_XXYD1A/exec'
const display = document.getElementById('sources-display');
const input = document.getElementById('sources-search-input');
const searchBtn = document.getElementById('sources-search-btn');
const refreshBtn = document.getElementById('refresh-btn');
const searchSummary = document.getElementById('search-summary');
const formatSelector = document.getElementById('format-selector');
const loader = document.getElementById('loader');

// Get search terms from URL and display in search bar
const searchURL = window.location.href;
const searchParams = new URL(searchURL).searchParams;
const indexURLSearchTerms = new URLSearchParams(searchParams).values();
const indexSearchTermsArray = Array.from(indexURLSearchTerms); 
const indexSearchTerms = indexSearchTermsArray.join(' ');
input.value = indexSearchTerms;

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
refreshBtn.addEventListener('click', () => {
  input.value = '';
  formatSelector.selectedIndex = 0;
  runSearch();
});

let apiData = [];

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    apiData = data;
    filterData(input.value);
  } catch (error) {
    window.alert(error.message);
  }
}

getData(googleSheet);

function filterData(query, format) {
  if (format === 1) {
    formatFilterData = apiData.filter((item) => item.Type === 'Audio');
  } else if (format === 2) {
    formatFilterData = apiData.filter((item) => item.Type === 'Event');
  } else if (format === 3) {
    formatFilterData = apiData.filter((item) => item.Type === 'Images');
  }  else if (format === 4) {
    formatFilterData = apiData.filter((item) => item.Type === 'Journalism');
  }  else if (format === 5) {
    formatFilterData = apiData.filter((item) => item.Type === 'Report');
  }  else if (format === 6) {
    formatFilterData = apiData.filter((item) => item.Type === 'Research');
  }  else if (format === 7) {
    formatFilterData = apiData.filter((item) => item.Type === 'Video');
  }  else if (format === 8) {
    formatFilterData = apiData.filter((item) => item.Type === 'Website');
  }  else {
    formatFilterData = apiData;
  }

  if (query) {
    const searchTerms = query.toLowerCase().split(/\s+/).map(term => removeDiacritics(term));

    const filteredData = formatFilterData.filter(allData => {
      return searchTerms.every(term => {
        return (
          Object.values(allData).some(value => {
            if (value && typeof value === 'string') {
              return removeDiacritics(value.toLowerCase()).includes(term);
            }
            return false;
          })
        );
      });
    });

    displayData(filteredData, query);
  } else {
    displayData(formatFilterData, format);
  }
}

function runSearch() {
    const searchTerms = input.value.trim();
    const selectedFormat = formatSelector.selectedIndex;
    filterData(searchTerms, selectedFormat);

    // Update URL with search query
    const newURL = new URL(window.location.href);
    newURL.searchParams.set('q', searchTerms);
    window.history.pushState(null, '', newURL);
};

// Event listeners for search bar
searchBtn.addEventListener('click', runSearch);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        runSearch();
    }
});


function displayData(data, queryTerms) {
    loader.style.display = 'none';
    data.sort((a, b) => a.Title.localeCompare(b.Title));
    
    if (typeof queryTerms === 'number' || typeof queryTerms === 'undefined') {
        queryTerms = '';
      }

    const selectedFormat = formatSelector.value;
    let formatTerm = ''
    switch (selectedFormat) {
        case "1":
            formatTerm = ' in Audio';
            break;
        case "2":
            formatTerm = ' in Events';
            break;
        case "3":
            formatTerm = ' in Images';
            break;
        case "4":
            formatTerm = ' in Journalism';
            break;
        case "5":
            formatTerm = ' in Reports';
            break;
        case "6":
            formatTerm = ' in Research';
            break;
        case "7":
            formatTerm = ' in Video';
            break;
        case "8":
            formatTerm = ' in Websites';
            break;
        default:
            formatTerm = '';
    }
    
    let baseSummary; // Declare baseSummary outside

    if (queryTerms !== '') {
        baseSummary = `A search for "${queryTerms}"${formatTerm}`;
    } else {
        baseSummary = `A search ${formatTerm}`;
    }
    
    if (data.length === 1) {
      searchSummaryMsg = `${baseSummary} returned ${data.length} result.`
    } else if (data.length < apiData.length) {
      searchSummaryMsg = `${baseSummary} returned ${data.length} results.`
    } else {
      searchSummaryMsg = `Showing all ${data.length} results.`
    }
  
    searchSummary.innerHTML = searchSummaryMsg;

    let dataDisplay = data.map((object) => {

// Customize type icons
    const typeLabelDictionary = {
        undefined: '<i class="fa-solid fa-file"></i>',
        Audio: '<i title="Audio" class="fa-solid fa-file-audio"></i>',
        Event: '<i title="Event" class="fa-solid fa-people-group"></i>',
        Images: '<i title="Images" class="fa-solid fa-file-image"></i>',
        Journalism: '<i title="Journalism" class="fa-solid fa-newspaper"></i>',
        Report: '<i title="Report" class="fa-solid fa-file-contract"></i>',
        Research: '<i title="Research" class="fa-solid fa-file-lines"></i>',
        Video: '<i title="Video" class="fa-solid fa-file-video"></i>',
        Website: '<i title="Website" class="fa-solid fa-globe"></i>'
    };

    let itemTypeLabel = typeLabelDictionary[object.Type] !== undefined ? typeLabelDictionary[object.Type] : '<i class="fa-solid fa-file"></i>';
      
      
    const arrayOfTypes = object.Type.split(',');
    const arrayOfTipos = object.Tipo.split(',');
    const arrayOfSubjects = object.Subjects.split(',');
    const arrayOfTemas = object.Temas.split(',');
    const arrayOfLanguages = object.Languages.split(',');
      
  
      return `
       <div class="source-row-accordion">
                <div class="source-type-icon">${itemTypeLabel}</div>
                <div class="source-title">${object.Title}</div>
            </div>
            <div class="source-row-panel">
                <div class="source-row-panel-content">
                    <div class="source-element">
                        <span class="source-element-tag">Creator:</span>
                        <span class="source-element-content">${object.Author}</span>
                    </div>
                    <div class="source-element">
                        <span class="source-element-tag">Year:</span>
                        <span class="source-element-content">${object.Year}</span>
                    </div>
                    <div class="source-element">
                        <span class="source-element-tag">Type:</span>
                        <span class="source-element-content">${arrayOfTypes.map(type => `<button class="subject-tag">${type}</button>`).join(', ')}</span>
                        <span class="source-element-content">${arrayOfTipos.map(tipo => `<button class="subject-tag">${tipo}</button>`).join(', ')}</span>
                    </div>
                    <div class="source-element">
                        <span class="source-element-tag">Subject:</span>
                        <span class="source-element-content">${arrayOfSubjects.map(subject => `<button class="subject-tag">${subject}</button>`).join(', ')}</span>
                        <span class="source-element-content">${arrayOfTemas.map(tema => `<button class="subject-tag">${tema}</button>`).join(', ')}</span>
                    </div>
                    <div class="source-element">
                        <span class="source-element-tag">Langauge:</span>
                        <span class="source-element-content">${arrayOfLanguages.map(language => `<button class="subject-tag">${language}</button>`).join(', ')}</span>
                    </div>
                    <div class="source-element">
                        <span class="source-element-tag">Citation:</span>
                        <span class="source-element-content">${object.Citation}</span>
                    </div>
                    <div class="source-url"><a href="${object.URL}" target="_blank" rel="noopener noreferrer">View Source <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
            </div>
     `;
    }).join('');
  
    display.innerHTML = dataDisplay;
  
    // Add event listeners to all subject tags.
    document.querySelectorAll('.subject-tag').forEach(subjectLink => {
      subjectLink.addEventListener('click', () => {
        subjectLinkGenerator(event, subjectLink);
      });
    });
  
    document.querySelectorAll('.language-tag').forEach(langLink => {
      langLink.addEventListener('click', () => {
        subjectLinkGenerator(event, langLink);
      });
    });
  
    // Add event listeners to all author links.
    document.querySelectorAll('.author-name').forEach(authorLink => {
      authorLink.addEventListener('click', () => {
        subjectLinkGenerator(event, authorLink);
      });
    });

    var acc = document.getElementsByClassName("source-row-accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active-source");
          var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  };
  
  function subjectLinkGenerator(event, link) {
    filterData(link.textContent);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }