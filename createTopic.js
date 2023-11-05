// Loading topics from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const topics = JSON.parse(localStorage.getItem("topics") || "[]");
    for (const topic of topics) {
        addTopicToPage(topic.title, topic.description);
    }
});

function addTopicToPage(title, description) {

    // Create new topic variables
    const newTopicItem = document.createElement("li");
    newTopicItem.className = "list-group-item";
    newTopicItem.innerHTML = `${title} <span class="badge bg-secondary float-end">${description}</span>`;

    // Append the new topic to the list of forum topics
    document.querySelector(".list-group").appendChild(newTopicItem);

    // Clear the form input fields
    document.getElementById("topicTitle").value = "";
    document.getElementById("topicDescription").value = "";

    // For demonstration purposes, we'll simply log the values to the console
    // In a real-world scenario, we might send these values to a server or use them in some other way
    console.log("Topic Title:", title);
    console.log("Topic Description:", description);
}

// Event listener for the submit button in the new topic modal
document.querySelector("#newTopicForm button").addEventListener("click", function(event) {
    // Prevent default form submission action
    event.preventDefault();

    // Retrieve the values of the topic title and description
    const title = document.querySelector("#topicTitle").value;
    const description = document.querySelector("#topicDescription").value;

    // Save the topic to local storage
    const topics = JSON.parse(localStorage.getItem("topics") || "[]");
    topics.push({ title: title, description: description });
    localStorage.setItem("topics", JSON.stringify(topics));

    // Add the new topic to the page
    addTopicToPage(title, description);

    // Clear the form inputs
    document.querySelector("#topicTitle").value = "";
    document.querySelector("#topicDescription").value = "";
});