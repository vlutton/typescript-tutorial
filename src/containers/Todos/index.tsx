import * as React from 'react';
import Todos from './Todos';

export interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface State {
  todos?: TodoItem[];
}
/**
 * TODOS:
 * 1. Render List by passing state down as props to List Component
 */
export default class TodosIndex extends React.Component<{}, State> {
  state = {
    todos: undefined
  };
  async componentDidMount() {
    await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then((json) => {
      this.setState({
        todos: json
      });
    });
  }

  render() {
    const { todos } = this.state;
    if (!todos) {
      return <div>Loading...</div>;
    }
    return <Todos todos={todos} />;
  }
}
