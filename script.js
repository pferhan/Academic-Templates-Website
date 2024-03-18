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

    var searchResults = itemsOnPage.filter(function(item) {
        return item.name.toLowerCase().includes(searchTerm);
    });

    // Display the search results as clickable links - (change eventually) 
    searchResults.forEach(function(result) {
        var link = document.createElement('a');
        link.href = result.link;
        link.textContent = result.name;

        var lineBreak = document.createElement('br');

        searchResultsContainer.appendChild(link);
        searchResultsContainer.appendChild(lineBreak);
    });
}

document.getElementById("getStartedButton").addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:3000/ResumeInput.html";
});

function addSkill(skillName) {
    const skillsList = document.getElementById('skillsList');
    const listItem = document.createElement('li');
    listItem.textContent = skillName;
    skillsList.appendChild(listItem);
}

function addNewSkill() {
    const newSkillInput = document.getElementById('newSkill');
    const newSkill = newSkillInput.value;

    if (newSkill.trim() !== '') {
        addSkill(newSkill);
        
        newSkillInput.value = '';
    }
}

function addCertification(certificationName) {
    const certificationList = document.getElementById('certificationList');
    const listItem = document.createElement('li');
    listItem.textContent = certificationName;
    certificationList.appendChild(listItem);
}

function addNewCertification() {
    const newCertificationInput = document.getElementById('newCertification');
    const newCertification = newCertificationInput.value;

    if (newCertification.trim() !== '') {
        addCertification(newCertification);
        
        newCertificationInput.value = '';
    }
}
function addAward(awardName) {
    const awardList = document.getElementById('awardList');
    const listItem = document.createElement('li');
    listItem.textContent = awardName;
    awardList.appendChild(listItem);
}

function addNewAward() {
    const newAwardInput = document.getElementById('newAward');
    const newAward = newAwardInput.value;

    if (newAward.trim() !== '') {
        addAward(newAward);
        
        newAwardInput.value = '';
    }
}

document.getElementById("generateResume").addEventListener("click", function() {
    window.location.href = "";
});