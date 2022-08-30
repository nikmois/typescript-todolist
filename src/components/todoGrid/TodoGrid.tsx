import React, { FC } from 'react';
import { ITask } from '../../Interfaces';
import Todo from '../todo/Todo';
import './TodoGrid.css';

interface TodosGridProps {
    todos: ITask[];
}

const TodoGrid: FC<TodosGridProps> = ({ todos }: TodosGridProps) => {
    return (
        <div className="container">
            {todos.map((todo) => (
                <div key={todo.id} className="todo">
                    <Todo todo={todo} />
                </div>
            ))}
        </div>
    );
};

export default TodoGrid;
