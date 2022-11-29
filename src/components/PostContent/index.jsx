import { useState, useEffect } from "react";
import { CommentForm } from "../CommentForm";
import { PostComment } from "../PostComment";
import "./style.css";

export const PostContent = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState([]);

  useEffect(() => {
    setComments(post.commentsJson);
  }, []);

  return (
    <div className="post-content">
      <div className="post-content-card">
        <h2 className="post-content-title">{post.title}</h2>
        <p className="post-content-body">{post.body}</p>
      </div>

      <div className="post-content-hr"></div>

      {comments.map((comment) => (
        <PostComment comment={comment} key={comment.id} />
      ))}

      {newComments.length > 0 &&
        newComments.map((newComment, index) => (
          <PostComment comment={newComment} key={index} />
        ))}

      <div className="post-content-hr"></div>

      <CommentForm
        buttonText={"Enviar Comentário"}
        newComments={newComments}
        setNewComments={setNewComments}
      />
    </div>
  );
};
