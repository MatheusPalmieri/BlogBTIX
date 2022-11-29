import React from 'react';
import P from 'prop-types';
import { useState } from 'react';
import './style.css';

export const CommentForm = ({ buttonText, newComments, setNewComments }) => {
  const [email, setEmail] = useState('');
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState('');
  const [showErrorComment, setShowErrorComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
      setShowErrorEmail('show-error-email');
      return;
    }
    if (commentText.length <= 3) {
      setShowErrorComment('show-error-comment');
      return;
    }

    let name = commentName;
    let body = commentText;

    setNewComments([...newComments, { email, name, body }]);

    setShowErrorEmail('');
    setShowErrorComment('');

    setEmail('');
    setCommentName('');
    setCommentText('');
  };

  return (
    <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
      {/* Email and Title */}
      <div className="comment-form-top">
        {/* Email */}
        <div className="comment-form-email">
          <label htmlFor="email">
            E-mail
            <span className={`${showErrorEmail} comment-form-error`}>Digite seu E-mail</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            title="Digite seu e-mail."
            autoComplete="off"
            placeholder="seuemail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Title for Comment */}
        <div className="comment-form-name">
          <label htmlFor="name">Título do seu Comentário</label>
          <input
            type="text"
            name="name"
            id="name"
            title="Digite um Título para seu Comentário."
            placeholder="Digite o Título"
            autoComplete="off"
            onChange={(e) => setCommentName(e.target.value)}
            value={commentName}
          />
        </div>
      </div>

      {/* Text Comment */}
      <div className="comment-form-middle">
        <label htmlFor="comment">
          O{"'"}que deseja comentar?
          <span className={`${showErrorComment} comment-form-error`}>Digite um Comentário</span>
        </label>
        <textarea
          name="comment"
          autoComplete="off"
          minLength={5}
          maxLength={200}
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
        />
      </div>

      {/* Button Send */}
      <div className="comment-form-footer">
        <button type="submit" className="comment-form-button">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

CommentForm.defaultProps = {
  newComments: [],
};

CommentForm.propTypes = {
  buttonText: P.string.isRequired,
  newComments: P.array.isRequired,
  setNewComments: P.func.isRequired,
};
