import { fetchPosts } from "../api/apiClient.js";

document.addEventListener("DOMContentLoaded", () => {
  loadInfo();
});

async function loadInfo() {
  try {
    const posts = await fetchPosts();
    displayPosts(posts);
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

function displayPosts(posts) {
  const container = document.getElementById("topicList");
  // container.innerHTML = ""; // Clear existing content if needed

  posts.forEach((post) => {
    // Create a new element for each post
    const postElement = document.createElement("a");
    postElement.setAttribute("href", "views/postsContainer.html");
    postElement.setAttribute("class", "list-group-item list-group-item-action");

    // Add plurality if necessary to comment badge
    const comment = post.commentCounter === 1 ? "Comment" : "Comments";

    // Set the HTML content for the post element
    postElement.innerHTML = `
    <div class="p-3">
      <div class="card">
        <div class="mx-4 my-2">
          <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
            <h5 class="fw-bold mb-0">${post.title}</h5>
            <span class="badge bg-secondary">${post.commentCounter} ${comment}</span>
          </div>
          <div class="description-wrapper mb-1">
            <p class="description-preview">${post.description}</p>
          </div>
        </div>
      </div>
    </div>
    `;

    // Append the new post element to the container
    container.appendChild(postElement);
  });

  setTimeout(() => {
    const descriptions = document.querySelectorAll(".description-preview");

    descriptions.forEach((description) => {
      if (isOverflowing(description)) {
        description.classList.add("description-fade");
      }
    });
  }, 0); // setTimeout with 0 delay
}

function isOverflowing(element) {
  return element.scrollHeight > element.clientHeight;
}
