import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palettes';
import { Link } from 'react-router-dom';

const SubinfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const Subinfo = ({ username, publishDate, hasMarginTop }) => {
  return (
    <SubinfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishDate).toLocaleDateString()}</span>
    </SubinfoBlock>
  );
};

export default Subinfo;
