import { fetchPosts } from "../api/apiClient.js";

document.addEventListener("DOMContentLoaded", () => {
  loadInfo();
});

async function loadInfo() {
  try {
    displayTitle();
    displayDescription();
    displayComments();
  } catch (error) {
    console.error("Error loading post:", error);
  }
}
