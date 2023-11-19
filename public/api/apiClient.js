export const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
