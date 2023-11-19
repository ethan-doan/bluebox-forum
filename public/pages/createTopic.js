// Loading topics from local storage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const topics = JSON.parse(localStorage.getItem("topics") || "[]");
  for (const topic of topics) {
    addTopicToPage(topic.title, topic.description);
  }
});

// Event listener for the submit button in the new post dropdown
document
  .querySelector("#newTopicForm")
  .addEventListener("click", function (event) {
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

document.addEventListener("DOMContentLoaded", function () {
  const createPostButton = document.querySelector("#createPostButton");
  const postDropdown = document.querySelector("#postDropdown");

  // Event when the dropdown starts to show
  postDropdown.addEventListener("show.bs.collapse", function () {
    createPostButton.textContent = "Hide";
  });

  // Event when the dropdown is completely hidden
  postDropdown.addEventListener("hidden.bs.collapse", function () {
    createPostButton.textContent = "Create New Post";
  });

  // Optional: If you want to handle initial state when page loads
  // if (postDropdown.classList.contains("show")) {
  //   createPostButton.textContent = "Hide";
  // } else {
  //   createPostButton.textContent = "Create New Post";
  // }
});

function addTopicToPage(title, description) {
  // Create topic link
  const link = document.createElement("a");
  link.setAttribute("href", "views/postView.html");
  link.className = "list-group-item list-group-item-action";

  // Create container for children
  const topicContainer = document.createElement("div");

  // Append Title
  topicContainer.innerText = title;

  // Append Pill
  const pill = document.createElement("span");
  pill.className = "badge bg-secondary float-end";
  pill.textContent = "0 Comments";
  topicContainer.appendChild(pill);

  // Append the Container to the Link
  link.appendChild(topicContainer);

  // Append the Link to the List Group
  const topicList = document.getElementById("topicList");
  topicList.appendChild(link);

  // Clear the form input fields
  document.getElementById("topicTitle").value = "";
  document.getElementById("topicDescription").value = "";

  // For demonstration purposes, we'll simply log the values to the console
  // In a real-world scenario, we might send these values to a server or use them in some other way
  console.log("Topic Title:", title);
  console.log("Topic Description:", description);
}
