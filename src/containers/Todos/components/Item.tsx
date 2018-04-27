import * as React from 'react';

interface Props {
  title: string;
  completed: boolean;
}

interface State {
  completed: boolean;
}
export default class Item extends React.Component<Props, State> {
  state = {
    completed: this.props.completed
  };

  handleChange = () => {
    this.setState({
      completed: !this.state.completed
    });
  };

  render() {
    const { title } = this.props;
    const { completed } = this.state;
    return (
      <li>
        <input type="checkbox" checked={completed} onChange={this.handleChange} /> {title}
      </li>
    );
  }
}
