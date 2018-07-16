import React, { Component } from 'react';

import Context from '../Context';

class Container extends Component {
  state = {
    contents: [],
  };

  addContent(id, title) {
    this.setState(prevState => {
      const { contents } = prevState;

      if (!contents.find(item => item.id === id)) {
        contents.push({ id, title });
        return { ...prevState, contents };
      }

      return undefined;
    });
  }

  removeContent(id) {
    this.setState(prevState => {
      const { contents } = prevState;
      const newContents = contents.filter(item => item.id !== id);

      if (contents.length === newContents.length) {
        return undefined;
      }

      return { ...prevState, contents: newContents };
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          contents: this.state.contents,
          addContent: (...args) => this.addContent(...args),
          removeContent: (...args) => this.removeContent(...args),
        }}
        {...this.props}
      />
    );
  }
}

export default Container;
