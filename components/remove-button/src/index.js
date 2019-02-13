import React from 'react';
import styled from 'styled-components';
import { NTA_LIGHT } from '@govuk-react/constants';

const RemoveButtonInner = styled('button')({
  '&:first-child': {
    margin: 0,
  },

  backgroundColor: '#0C60A2',
  border: 0,
  color: '#fff',
  fontFamily: NTA_LIGHT,
  fontSize: '11px',
  fontWeight: 400,
  height: '20px',
  lineHeight: 'normal',
  margin: '0 12px',
  padding: 0,
  width: '20px',
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <RemoveButton title="Remove" />
 * ```
 *
 * Next to some text
 * ```jsx
 * <div><span>Text here</span><RemoveButton title="Remove" /></div>
 * ```
 */
const RemoveButton = props => <RemoveButtonInner {...props}>X</RemoveButtonInner>;

export default RemoveButton;
