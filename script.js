function search() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var searchResultsContainer = document.getElementById('searchResults');
    
    searchResultsContainer.innerHTML = '';

    var itemsOnPage = [
        { name: 'Resume', link: '#' },
        { name: 'Academic Poster', link: 'http://127.0.0.1:3000/PosterTemplates/PosterHomepage.html' },
        { name: 'CV', link: '#' },
        { name: 'Assignment Tracker', link: '#' },
        { name: 'Presentation Template', link: '#' },
        { name: 'Ciatation Generator', link: '#' },
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