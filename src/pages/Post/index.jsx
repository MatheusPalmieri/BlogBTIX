import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";
import { LoadingPostDetails } from "../../components/Loading/LoadingPostDetails";
import { PostDetails } from "../../components/PostDetails";
import { request } from "../../service/request";
import "./style.css";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLoadPosts = useCallback(async () => {
    const postsJson = await request("posts", id);
    setPost(postsJson);
    setLoading(false);
  }, []);

  useEffect(() => {
    handleLoadPosts();
  }, []);

  return (
    <div className="post-details">
      <ButtonBack />

      <div className="post-details-container">
        {loading && <LoadingPostDetails />}
        {!loading && <PostDetails post={post} />}
      </div>
    </div>
  );
};
