/*
Source for all info about contributors. 
Each contributor must be wrapped in { }. 
A comma is required after each contributor's property and after the closing } for each contributor. 
*/

const contributorsData = [
    {
        name: "Ashley C.",
        bio: "I’m Ashley, born and raised in Lexington! I am a 2023 graduate from the University of Kentucky obtaining my B.S. in Neuroscience with minors in pharmacology and Spanish. I am very passionate about supporting the Hispanic and Latino communities of Kentucky and preserving their history after taking Hispanic Kentucky with Dr. Ruth Brown at UK. I am so grateful to help contribute to the Kentucky Hispanic Heritage Project to protect and preserve this important history of the Commonwealth!"
    },
    {
        name: "Bethany I.",
        bio: "Hi, my name is Bethany Ison! I’m a senior at UK majoring in Spanish and neuroscience with a minor in math. Participating in this project has taught me so much more about the peoples and cultures of my home state. I have a much better understanding of how our Hispanic communities are contributing to our culture, economy, and social life. I especially enjoyed researching the fusion music between Latin and Appalachian music traditions since my family has roots in rural eastern Kentucky."
    },
    {
        name: "Devin L.",
        bio: "Hey you all! My name is Devin Lambert, I am from Washington, Illinois, and am a 2022 graduate with a major in Biology and a minor in Spanish in the College of Arts and Sciences. I have loved learning the Spanish language since I first started practicing it in high school and was so thankful to be able to obtain a deeper understanding of the Hispanic and Latino culture here at UK, including my time digging into and organizing Dr. Brown’s great sources that are featured on this website!"
    },
    {
        name: "Mariela R.",
        bio: "My name is Mariela Reynaga Baez and I am a senior at the University of Kentucky majoring in International Economics and Spanish. This project has allowed me to explore ways in which Hispanic immigrants have contributed to the growth and economic development of Kentucky's horse industry, while also exploring the challenges and obstacles they have faced along the way, tying both aspects of my major together."
    },
    {
        name: "Mia T.",
        bio: "My name is Mia and I am a chemistry major and Spanish minor at the University of Kentucky. This semester I have enjoyed my time volunteering at a local elementary school and putting my Spanish skills to great use. The students inspire me everyday to grow and continue to advocate for cultural acceptance and celebration. Throughout this project I have really enjoyed learning more about the importance of food and how it plays a role in Hispanic Kentucky culture. Many of the map locations come with high regards directly from my students! Enjoy learning more about the importance of supporting local businesses, and I hope you have some amazing tacos along the way."
    },
    {
        name: "Ruth Brown",
        bio: "Hola a todos, my name is Ruth Brown and I am an Assistant Professor of Hispanic Studies at UK. As an administrator for KHHP I manage the website and our ever-growing database of sources. I also supervise the students who work as research interns and blog contributors for this project."
    },

];

const contributorsPanel = document.getElementById('contributors');

contributorsData.forEach(person => {
    // Create a div element for the person
    const contributorDiv = document.createElement('div');
    contributorDiv.classList.add('contributor'); // Add the class 'contributor' to the div

    // Create an h3 for the name
    const nameProperty = document.createElement('h3');
    nameProperty.textContent = person.name;

    // Create a p for the bio
    const bioProperty = document.createElement('p');
    bioProperty.textContent = person.bio;

    // Append the name and bio elements to the contributorDiv
    contributorDiv.appendChild(nameProperty);
    contributorDiv.appendChild(bioProperty);

    // Append the contributorDiv to the contributorsPanel
    contributorsPanel.appendChild(contributorDiv);
});