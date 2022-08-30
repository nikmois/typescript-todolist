import { useMutation } from '@apollo/client';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { CREATE_TODO } from '../../hooks/useCreateTodo';
import { GET_TODOS } from '../../hooks/useGetTodos';
import './TodoForm.css';

interface FormData {
    title: string;
    completed: boolean;
}

interface CreateTodoInput {
    variables: {
        input: {
            title: string;
            completed: boolean;
        };
    };
}

const TodoForm: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const [createTodo, { error }] = useMutation<CreateTodoInput>(CREATE_TODO, {
        update(cache, { data: { newTodo } }) {
            const { todos } = cache.readQuery({ query: GET_TODOS });
            cache.writeQuery({
                query: GET_TODOS,
                data: {
                    todos: [newTodo, ...todos]
                }
            });
        }
    });

    const onSubmit = handleSubmit(({ title, completed }) => {
        completed = false;
        createTodo({ variables: { input: { title, completed } } });
    });

    if (error) {
        return <h2>error...</h2>;
    }
    return (
        <div className="todo-form">
            <form onSubmit={onSubmit}>
                <input {...register('title')} type="text" name="title" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default TodoForm;
