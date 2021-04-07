import React from 'react'
import Header from './components/Header'
import { Container } from '@material-ui/core'
import TaskCard from "./components/TaskCard";

const App = () => {

    return (
        <Container maxWidth="md">
            <Header />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </Container>
    )
}

export default App