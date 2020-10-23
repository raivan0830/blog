import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import Responsive from '../components/common/Responsive';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <PostViewerContainer />
      </Responsive>
    </>
  );
};

export default PostPage;
