import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import GridCol from '@govuk-react/grid-col';
import GridRow from '@govuk-react/grid-row';

import TOC from '.';
import ReadMe from '../README.md';

const stories = storiesOf('TableOfContents', module);
const examples = storiesOf('TableOfContents/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <TOC.Container>
    <GridRow>
      <GridCol>
        <TOC.Index>
          {
            ({ contents }) => <ul>
              {contents.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          }
        </TOC.Index>
      </GridCol>
      <GridCol>
        <TOC.Section id="first" title="First">
          <h3>First</h3>
          <p>
            Content of first section goes here<br/>
            Lorem ipsum and stuff like that
          </p>
        </TOC.Section>
        <TOC.Section id="second" title="Second">
          <h3>Second</h3>
          <p>
            Content of second section goes here<br/>
            Lorem ipsum and stuff like that
          </p>
        </TOC.Section>
      </GridCol>
    </GridRow>
  </TOC.Container>
));

examples.add('Standalone Section', () => (
  <TOC.Section id="first" title="First">
    <h3>First</h3>
    <p>
      Content of first section goes here<br/>
      Lorem ipsum and stuff like that
    </p>
  </TOC.Section>
));
