
// Function to get a URL parameter by its name
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\[').replace(/[\]]/, '\]');
    const regex = new RegExp('[\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Get the topic ID from the URL
const topicId = parseInt(getUrlParameter('topicId'));

// Retrieve the topic from local storage based on the ID
const topics = JSON.parse(localStorage.getItem('topics') || '[]');
const topic = topics.find(t => t.id === topicId);

// Populate the title and description
if (topic) {
    document.getElementById('topicTitle').textContent = topic.title;
    document.getElementById('topicDescription').textContent = topic.description;
}