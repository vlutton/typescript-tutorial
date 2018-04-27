/**
 * 1. get data through props
 * 2. display the list
 */
import * as React from 'react';
import { Props } from '../Todos';
import Item from './Item';

export default function List(props: Props) {
  const { todos } = props;
  return <ul>{todos.map((todo) => <Item key={todo.id} title={todo.title} completed={todo.completed} />)}</ul>;
}
