import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GREY_1, WHITE } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';

import ArrowLeft from '@govuk-frederic/arrow-left';

const Background = styled('div')({
  alignItems: 'center',
  backgroundColor: GREY_1,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  left: 0,
  padding: '0 32px 0 90px',
});

const Header = styled('header')({
  '> span': {
    textDecoration: 'underline',
  },
  maxWidth: '1158px',
  padding: '20px 0',
  width: '100%',
});

const Body = styled('article')({
  backgroundColor: WHITE,
  fontFamily: NTA_LIGHT,
  height: '100%',
  maxWidth: '1158px',
  minHeight: '640px',
  width: '100%',
});
const Button = styled('button')({
  backgroundColor: 'transparent',
  border: 0,
});

/**
 *
 * ### Usage

 * Simple
 * ```jsx
 * <DistractionFree onClick={(e) => {}}>
 *    content goes here
 * </DistractionFree>
 * ```
 *
 * With title
 * ```jsx
 * <DistractionFree arrowLeftTitle="Back to example" onClick={(e) => {}}>
 *    content goes here
 * </DistractionFree>
 * ```
 */
const DistractionFree = ({ children, onClick, arrowLeftTitle, ...props }) => {
  return (
    <Background {...props}>
      <Header>
        <Button onClick={onClick}>
          <ArrowLeft fill={WHITE} color={WHITE} width={28}>
            {arrowLeftTitle}
          </ArrowLeft>
        </Button>
      </Header>
      <Body>{children}</Body>
    </Background>
  );
};

DistractionFree.propTypes = {
  arrowLeftTitle: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default DistractionFree;
