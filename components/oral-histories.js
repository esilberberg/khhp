const oralHistories = [
    {
        title: "Hispanic Heritage in Kentucky Oral History Project",
        summary: "A partnership between Dr. Yanira Paz the Louie B. Nunn Center for Oral History, this project documents the experiences of Hispanic immigrants in Kentucky. Interviewees/narrators discuss their personal life stories, motivations for coming to the United States and to Kentucky, family history, as well as their initial experiences in the first months or years living in Kentucky.",
        url: "https://kentuckyoralhistory.org/ark:/16417/xt7d7w676f4r",
    },
    {
        title: "APOYO KY: Supporting Hispanic/Latinx Communities in Kentuck Oral History Project",
        summary: "A partnership between Dr. Taylor Leigh and the Louie B. Nunn Center for Oral History, “Apoyo KY: Supporting Hispanic/Latinx Communities in Kentucky” is an oral history series featuring individuals who work with and support Hispanic/Latinx communities in Kentucky. Each interview covers the interviewee’s life and work, as well as the impact of the COVID pandemic.",
        url: "https://kentuckyoralhistory.org/ark:/16417/xt758x7znl696",
    },
    {
        title: "Bluegrass & Birria",
        summary: "This collection of interviews with Mexican restaurant owners from Kentucky was created through the Southern Foodways Alliance oral history program, which documents life stories from the American South.",
        url: "https://www.southernfoodways.org/oral-history/bluegrass-and-birria/",
    }
];

const oralHistoriesDisplay = document.getElementById('oral-histories-display');

oralHistories.forEach(history => {
    // Create a div element for the history project
    const historyCard = document.createElement('div');
    historyCard.className = 'history-card';
    
    // Create the a element with the href, target, and rel attributes
    const historyLink = document.createElement('a');
    historyLink.href = history.url;
    historyLink.target = '_blank';
    historyLink.rel = 'noopener noreferrer';
    
    // Create and append the title
    const historyTitle = document.createElement('h3');
    historyTitle.className = 'history-title';
    historyTitle.textContent = history.title;
    historyLink.appendChild(historyTitle);
    
    // Create and append the summary
    const historySummary = document.createElement('p');
    historySummary.className = 'history-summary';
    historySummary.textContent = history.summary;
    historyLink.appendChild(historySummary);
    
    // Append the a element to the div
    historyCard.appendChild(historyLink);
    
    // Append the history card to the display element
    oralHistoriesDisplay.appendChild(historyCard);
});
