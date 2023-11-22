import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/apiClient";
import "../styles/PostListing.css";

function PostListing() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading posts:", error);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <Container className="mt-5">
      <div id="topicList">
        {posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id}>
            <div className="my-5">
              <div className="card">
                <div className="mx-4 my-2">
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <h3 className="fw-bold mb-0">{post.title}</h3>
                  </div>
                  <div className="description-wrapper mb-2">
                    <p className="description-preview mb-2">
                      {post.description}
                    </p>
                  </div>
                  <span className="fw-bold fs-6 badge bg-secondary rounded-pill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="bi bi-chat-square-text-fill me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                    </svg>
                    {post.commentCounter}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default PostListing;
