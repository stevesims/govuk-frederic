import React from 'react';
import styled from 'react-emotion';

const RemoveButtonInner = styled('button')({
  '&:first-child': {
    margin: 0,
  },

  backgroundColor: '#0C60A2',
  border: 0,
  color: '#fff',
  fontFamily: '"system-ui", Arial, sans-serif',
  fontSize: '11px',
  fontWeight: 400,
  height: '20px',
  lineHeight: 'normal',
  margin: '0 12px',
  padding: 0,
  width: '20px',
});

const RemoveButton = props => <RemoveButtonInner {...props}>X</RemoveButtonInner>;

export default RemoveButton;
