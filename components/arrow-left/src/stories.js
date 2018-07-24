import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { GREY_1, WHITE } from 'govuk-colours';

import ArrowLeft from '.';
import ReadMe from '../README.md';

const darkBackground = {
  backgroundColor: GREY_1,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

const lightBackground = {
  backgroundColor: WHITE,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

const stories = storiesOf('Icons/ArrowLeft', module);
const examples = storiesOf('Icons/ArrowLeft/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories
  .add('Component default', () => (
    <ArrowLeft />
  ));

examples
  .add('Dark background', () => (
    <div style={darkBackground}>
      <ArrowLeft width={28} fill="white" />
    </div>
  ));

examples.add('Light background', () => (
  <div style={lightBackground}>
    <ArrowLeft width={28} fill="black" />
  </div>
));

examples.add('Dark background & title', () => (
  <div style={darkBackground}>
    <ArrowLeft width={28} fill="white" color="white">
          Back to previous page
    </ArrowLeft>
  </div>
));

examples.add('Light background & title', () => (
  <div style={lightBackground}>
    <ArrowLeft width={28} fill="black">
          Back to previous page
    </ArrowLeft>
  </div>
));

examples.add('Wrapped with anchor with title text', () => (
  <div style={lightBackground}>
    <a href="http://example.com" style={{ color: '#005CA7' }}>
      <ArrowLeft width={28} fill="black">
            Back to previous page
      </ArrowLeft>
    </a>
  </div>
));

examples.add('Wrapped with anchor with title text on dark background', () => (
  <div style={darkBackground}>
    <a href="http://example.com" style={{ color: 'white' }}>
      <ArrowLeft width={28} fill="white">
            Back to previous page
      </ArrowLeft>
    </a>
  </div>
));

examples.add('Passing down onClick with title text', () => (
  <div style={darkBackground}>
    <ArrowLeft width={28} fill="white" color="white" onClick={action('clicked arrow button')}>
          Back to previous page
    </ArrowLeft>
  </div>
));
