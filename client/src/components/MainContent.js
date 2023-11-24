import React, { useState, useEffect } from "react";
import MainContentHeader from "./MainContentHeader.js";
import PostListing from "./PostListing.js";
import { fetchPostsByCreate } from "../api/apiClient";

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    try {
      const data = await fetchPostsByCreate();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <>
      <MainContentHeader onAddPosts={loadPosts} />
      <PostListing posts={posts} />
    </>
  );
}

export default MainContent;
