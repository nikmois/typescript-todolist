import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import TodoGrid from '../../components/todoGrid/TodoGrid';
import { GET_TODOS } from '../../hooks/useGetTodos';
import { ITask } from '../../Interfaces';
import './HomePage.css';

interface DataTodos {
    todos: {
        data: ITask[];
    };
}

const HomePage: FC = () => {
    const { loading, error, data } = useQuery<DataTodos>(GET_TODOS);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>error...</div>;
    }

    return (
        <div className="container">
            <TodoGrid todos={data?.todos.data || []} />
        </div>
    );
};

export default HomePage;
