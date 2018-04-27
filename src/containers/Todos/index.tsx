import * as React from 'react';

/**
 * TODOS:
 * 1. Render List by passing state down as props to List Component
 */
export default class Todos extends React.Component {
  async componentDidMount() {
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return <h1>Testing</h1>;
  }
}
