function search() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var searchResultsContainer = document.getElementById('searchResults');
    
    searchResultsContainer.innerHTML = '';

    var itemsOnPage = [
        { name: 'Resume', link: 'http://127.0.0.1:3000/ResumeHomepage.html' },
        { name: 'Academic Poster', link: 'http://127.0.0.1:3000/PosterHomepage.html' },
        { name: 'CV', link: 'http://127.0.0.1:3000/CVHomepage.html' },
        { name: 'Assignment Tracker', link: 'http://127.0.0.1:3000/AssignmentTrackerHomepage.html' },
        { name: 'Presentation Template', link: 'http://127.0.0.1:3000/PresentationHomepage.html' },
        { name: 'Ciatation Generator', link: 'http://127.0.0.1:3000/CitationGeneratorHomepage.html' },
    ];

    // Filter items based on the search term
    var searchResults = itemsOnPage.filter(function(item) {
        return item.name.toLowerCase().includes(searchTerm);
    });

    // Display the search results as clickable links
    searchResults.forEach(function(result) {
        var link = document.createElement('a');
        link.href = result.link;
        link.textContent = result.name;

        var lineBreak = document.createElement('br');

        searchResultsContainer.appendChild(link);
        searchResultsContainer.appendChild(lineBreak);
    });
}