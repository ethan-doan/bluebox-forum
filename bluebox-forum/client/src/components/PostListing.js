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

  const comment = posts.commentCounter === 1 ? "Comment" : "Comments";

  return (
    <Container className="mt-5">
      <div id="topicList">
        {posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id}>
            <div className="my-5">
              <div className="card">
                <div className="mx-4 my-2">
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <h5 className="fw-bold mb-0">{post.title}</h5>
                    <span className="badge bg-secondary">
                      {post.commentCounter} {comment}
                    </span>
                  </div>
                  <div className="description-wrapper mb-2">
                    <p className="description-preview mb-2">
                      {post.description}
                    </p>
                  </div>
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
