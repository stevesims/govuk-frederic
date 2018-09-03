import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import TableOfContents from '.';

const renderIndex = ({ contents }) =>
  contents.map(({ id, title }) => <div id={`index-${id}`} key={id}>{id}: {title}</div>);

describe('TableOfContents', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <TableOfContents.Container>
        <TableOfContents.Section id="id" title="Title">Section text here</TableOfContents.Section>
        <TableOfContents.Index>{ renderIndex }</TableOfContents.Index>
      </TableOfContents.Container>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('can remove a section', () => {
    const TestContainer = ({ showSection }) => (
      <TableOfContents.Container>
        <TableOfContents.Section id="id" title="Title">Section text here</TableOfContents.Section>
        { showSection &&
        <TableOfContents.Section id="optional" title="Optional">Optional section here</TableOfContents.Section>
      }
        { showSection &&
        <TableOfContents.Section id="optional" title="Optional">Duplicate section here</TableOfContents.Section>
      }
        <TableOfContents.Index>{ renderIndex }</TableOfContents.Index>
      </TableOfContents.Container>
    );
    TestContainer.propTypes = {
      showSection: PropTypes.bool,
    };

    const wrapper = mount(<TestContainer showSection />);

    expect(wrapper.find('#index-optional').length).toBe(1);

    wrapper.setProps({ showSection: false });
    wrapper.update();

    expect(wrapper.find('#index-optional').length).toBe(0);
  });

  it('matches snapshot', () => {
    const wrapper = mount(
      <TableOfContents.Container>
        <TableOfContents.Section id="id" title="Title">Section text here</TableOfContents.Section>
        <TableOfContents.Index>{ renderIndex }</TableOfContents.Index>
      </TableOfContents.Container>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
