import { useState } from "react";
import type { PostRequest } from "../models/post-request";
import { ApiService } from "../services/api-service";

function PostFetcher() {
  const [postId, setPostId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleCreatePost = async () => {
    try {
      setIsLoading(true);

      const newPostRequest: PostRequest = {
        title: "This is title",
        body: "this is the body of the post",
        userId: 1,
      };

      const response = await ApiService.createPost(newPostRequest);

      if (response?.data) {
        setPostId(response.data?.id);
      } else {
        setError("No Data");
      }
    } catch (err: unknown) {
      console.error(err);
      setPostId(0);
      if (err instanceof Error) {
        setError(err?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        style={{
          padding: "8px 16px",
          background: isLoading ? "gray" : "brown",
          borderColor: "unset",
          color: "white",
          borderRadius: 8,
          cursor: "pointer",
        }}
        disabled={isLoading}
        onClick={handleCreatePost}
      >
        {isLoading ? "Loading..." : "Create Post"}
      </button>
      {!!postId && <p style={{ color: "green" }}> New Post Id: {postId} </p>}
      {error && <p style={{ color: "red" }}> {error} </p>}
    </div>
  );
}

export default PostFetcher;
