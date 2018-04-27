import * as React from 'react';
import { TodoItem } from './';
import List from './components/List';

export interface Props {
  todos: TodoItem[];
}

export default function Todos(props: Props) {
  const { todos } = props;
  return <List todos={todos} />;
}
