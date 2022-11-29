export const request = async (parameter, id) => {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/${parameter}/${id}`
  );

  const [data] = await Promise.all([response]);
  const dataJson = await data.json();

  if (parameter === "posts") {
    // User
    const responseUser = fetch(
      `https://jsonplaceholder.typicode.com/users/${dataJson.userId}`
    );
    // Comments
    const responseComments = fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    const [user, comments] = await Promise.all([
      responseUser,
      responseComments,
    ]);

    const userJson = await user.json();
    const commentsJson = await comments.json();

    return { ...dataJson, userJson, commentsJson };
  }

  return dataJson;
};
