import React, { useEffect } from 'react';
import PostViewer from '../../components/post/PostViewer';
import { useDispatch, useSelector } from 'react-redux';
import { unloadPost, readPost } from '../../modules/post';
import { withRouter } from 'react-router-dom';

const PostViewerContainer = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);
  return <PostViewer post={post} loading={loading} error={error} />;
};

export default withRouter(PostViewerContainer);
