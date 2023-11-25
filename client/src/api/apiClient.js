// Get All Posts in Reverse Chronological Order
export const fetchPostsByCreate = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    if (!response.ok) {
      throw new Error("Network Response Was Not Ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

// Get an Individual Post By ID
export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (!response.ok) {
      throw new Error("Network Response Was Not Ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

// Add a Post
export const addPost = async (postData) => {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Network Response Was Not Ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

// Get All Comments in Reverse Chronological Order
export const fetchCommentsByCreate = async (parentID, comment) => {
  try {
    const response = await fetch("http://localhost:3000/api/comments");
    if (!response.ok) {
      throw new Error("Network Response Was Not Ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Error: ", error);
    throw error;
  }
};

// UPDATED FOR COMMENTSSCHEMA: Add a Comment
// export const addCommentSchema = async (parentID, comment) => {
//   try {
//     const response = await fetch(
//       `http://localhost:3000/api/comments/${parentID}/`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           body: JSON.stringify(comment),
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ": ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error Adding Comment:", error);
//     throw error;
//   }
// };

// Add a Comment
export const addComment = async (postId, comment) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error Adding Comment:", error);
    throw error;
  }
};
