const khhp = 'https://khhp.createuky.net/wp-json/wp/v2/posts?_embed';

async function getBlogPosts(apiEndpoint) {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error('Network connection error');
        }
        const data = await response.json();
        displayBlogPosts(data.splice(0,4));
        
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

function displayBlogPosts(data) {
    const display = document.getElementById('blog-display');
    // Clear any existing content in the display element
    display.innerHTML = '';

    // Iterate through each item in the data array
    data.forEach(item => {
        const title = item['title']['rendered'];
        const excerpt = item['excerpt']['rendered'];
        const link = item['link'];
        const date = item['date'];
        const formattedDate = formatDate(date);
        const image = item['_embedded']['wp:featuredmedia'][0]['source_url'];

        // Construct HTML for the blog post
        const blogPostCard = `
            <div class="blog-card">
                <a href="${link}" target="_blank" rel="noopener noreferrer">
                    <div class="blog-card-head">
                        <div class="blog-date">${formattedDate}</div>
                        <img src="${image}" alt="" class="blog-img"> 
                    </div>
                    <div class="blog-card-body">
                        <h3>${title}</h3>
                        <p>${excerpt}</p>
                    </div>
                </a>
            </div>
        `;

        // Append the constructed HTML to the display element
        display.innerHTML += blogPostCard;
    });
}

getBlogPosts(khhp);
