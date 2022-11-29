import { useCallback, useEffect, useState } from "react";
import "./style.css";

import { api } from "../../service/api";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import LoadingPost from "../../components/Loading/LoadingPost";
import { Posts } from "../../components/Posts";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsInOrder = await api();

    // Shuffling of Array Posts
    const postsContent = postsInOrder.sort(() => Math.random() - 0.5);

    setPosts(postsContent.slice(page, postsPerPage));
    setAllPosts(postsContent);

    // Stop animation loading
    setLoading(false);
  }, []);

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  return (
    <section className="container">
      {/* Search */}
      <div className="search-container">
        <Header
          searchValue={searchValue}
          handleChange={handleChange}
          loading={loading}
        />
      </div>

      {/* Loading Posts */}
      {loading && <LoadingPost />}

      {/* Card Posts */}
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      
      {!loading && filteredPosts.length === 0 && (
        <p className="searchNotResult">
          Sua pesquisa não encontrou nenhum documento correspondente :(
        </p>
      )}

      {/* Button */}
      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load more posts"
            loadMorePosts={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};
