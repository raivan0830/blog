import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import PostViewer from '../components/post/PostViewer';
import Responsive from '../components/common/Responsive';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <PostViewer />
      </Responsive>
    </>
  );
};

export default PostPage;
