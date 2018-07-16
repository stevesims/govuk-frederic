import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import TOC from '.';

const renderIndex = ({ contents }) =>
  contents.map(({ id, title }) => <div id={`index-${id}`} key={id}>{id}: {title}</div>);

describe('TableOfContents', () => {
  it('renders without crashing', () => {
    mount(<TOC.Container>
      <TOC.Section id="id" title="Title">Section text here</TOC.Section>
      <TOC.Index>{ renderIndex }</TOC.Index>
    </TOC.Container>);
  });

  it('can remove a section', () => {
    const TestContainer = ({ showSection }) => <TOC.Container>
      <TOC.Section id="id" title="Title">Section text here</TOC.Section>
      { showSection &&
        <TOC.Section id="optional" title="Optional">Optional section here</TOC.Section>
      }
      { showSection &&
        <TOC.Section id="optional" title="Optional">Duplicate section here</TOC.Section>
      }
      <TOC.Index>{ renderIndex }</TOC.Index>
    </TOC.Container>;
    TestContainer.propTypes = {
      showSection: PropTypes.bool,
    };

    const wrapper = mount(<TestContainer showSection />);

    expect(wrapper.find('#index-optional').length).toBe(1);

    wrapper.setProps({ showSection: false });
    wrapper.update();

    expect(wrapper.find('#index-optional').length).toBe(0);
  });
});
