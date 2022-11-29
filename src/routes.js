import React from 'react';
import { BrowserRouter, Routes as Path, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { User } from './pages/User';
import { Post } from './pages/Post';

export const Routes = () => {
  return (
    <section>
      <BrowserRouter basename={"/"}>
        <Path basename={"/"}>
          <Route path="/" element={<Home />}  />
          <Route path="/blog-btix" element={<Home />}  />
          <Route path="/User/:id/:username" element={<User />} />
          <Route path="/Post/:id" element={<Post />} />
        </Path>
      </BrowserRouter>
    </section>
  );
};
