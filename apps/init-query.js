const baseURL = window.location.origin;
const searchURL = `${baseURL}/sources.html?`; /* Dont forget to change when site goes live! */

const indexSearchBtn = document.getElementById('homepage-search-btn');
const indexSearchInput = document.getElementById('homepage-search-input');

function initQuery() {
  const userInput = indexSearchInput.value;
  const searchParams = new URLSearchParams();
  searchParams.append('q', userInput);
  const queryString = searchParams.toString();
  window.location.href = searchURL + queryString;
}

// Search when search button is clicked
indexSearchBtn.addEventListener('click', initQuery);

// Search when enter key is pressed
indexSearchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    initQuery();
  }
});
