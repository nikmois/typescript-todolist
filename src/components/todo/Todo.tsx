import { gql, useMutation } from '@apollo/client';
import React, { FC } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { ITask } from '../../Interfaces';
import './Todo.css';

const UPDATE_TODO = gql`
    mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
        updateTodo(id: $id, input: $input) {
            id
            title
            completed
        }
    }
`;

const Todo: FC<{ todo: ITask }> = ({ todo }: { todo: ITask }) => {
    const [updateTodo] = useMutation(UPDATE_TODO, {
        onError: (error) => alert(error.message)
    });

    return (
        <>
            <p className="title">{todo.title}</p>
            <div className="checkbox">
                <label htmlFor="chk">Done</label>
                <input
                    type="checkbox"
                    id="chk"
                    checked={todo.completed}
                    onChange={(event) =>
                        updateTodo({
                            variables: {
                                id: todo.id,
                                input: {
                                    completed: event.target.checked
                                }
                            }
                        })
                    }
                />
            </div>
            <div className="buttons">
                <BsFillTrashFill />
            </div>
        </>
    );
};

export default Todo;
