import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
    mutation CreateTodo($input: CreateTodoInput!) {
        newTodo: createTodo(input: $input) {
            id
            title
            completed
        }
    }
`;
