import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Context from '../Context';

export class Entry extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    toc: PropTypes.shape({
      addContent: PropTypes.func.isRequired,
      removeContent: PropTypes.func.isRequired,
    }),
  }

  componentDidMount() {
    if (this.props.toc) {
      this.props.toc.addContent(this.props.id, this.props.title);
    }
  }

  componentWillUnmount() {
    if (this.props.toc) {
      this.props.toc.removeContent(this.props.id);
    }
  }

  render() {
    return <div id={this.props.id}>{this.props.children}</div>;
  }
}

const Section = props => (
  <Context.Consumer>
    {toc => <Entry {...props} toc={toc} />}
  </Context.Consumer>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};

export default Section;
