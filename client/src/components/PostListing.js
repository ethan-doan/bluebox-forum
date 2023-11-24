import Container from "react-bootstrap/Container";
import PostPreview from "./PostPreview";
import "../styles/PostListing.css";

function PostListing({ posts }) {
  return (
    <Container className="mt-5">
      <div id="topicList">
        {posts.map((post) => (
          <PostPreview key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
}

export default PostListing;
