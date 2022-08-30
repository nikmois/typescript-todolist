import React, { FC } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage';
import AddTodoPage from './pages/todo/AddTodoPage';
import Header from './components/header/Header';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/todo" element={<AddTodoPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ApolloProvider>
    );
};

export default App;
