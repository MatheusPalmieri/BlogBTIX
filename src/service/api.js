export const api = async () => {
  // Users
  const responseUsers = fetch("https://jsonplaceholder.typicode.com/users");
  // Posts
  const responsePosts = fetch("https://jsonplaceholder.typicode.com/posts");
  // Comments
  const responseComments = fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const [users, posts, comments] = await Promise.all([
    responseUsers,
    responsePosts,
    responseComments,
  ]);

  const usersJson = await users.json();
  const postsJson = await posts.json();
  const commentsJson = await comments.json();

  const postsPorUser = postsJson.map((post, index) => {
    var user;
    var comment = [];

    usersJson.forEach((userFiltered) => {
      if (post.userId === userFiltered.id) {
        user = userFiltered;
      }
    });

    commentsJson.forEach((commentsFiltered) => {
      if (post.id === commentsFiltered.postId) {
        comment.push(commentsFiltered);
      }
    });

    return { ...post, user, comment };
  });

  return postsPorUser;
};
