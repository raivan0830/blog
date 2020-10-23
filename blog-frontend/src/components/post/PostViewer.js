import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palettes';
import Subinfo from '../common/Subinfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled.div`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock> 오류발생! </PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishDate, tags } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <Subinfo
          username={user.username}
          publishDate={publishDate}
          hasMarginTop={true}
        />

        <Tags tags={tags} />
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }}></PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
