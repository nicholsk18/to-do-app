import React, { useState } from 'react'
import Header from './components/Header'
import {Box, Card, Checkbox, Container, FormControlLabel, FormGroup, Typography, Button} from '@material-ui/core'

const App = () => {
    const [state, setState] = useState({
        todoKey: true
    });

    const handleChange = (event) => {
        // spread old state reasign new state
        setState({ ...state, [event.target.name]: event.target.checked })
    }

    const { todoKey } = state

    return (
        <Container maxWidth="md">
            <Header />

            <Box m={3}>
                <Card variant='outlined'>
                    <Box px={3} display='flex' justifyContent='space-between' alignItems='center'>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={todoKey} onChange={handleChange} name="todoKey" />}
                            />
                        </FormGroup>
                        <Typography variant="h6" component="h3">
                            Task that needs to be complete
                        </Typography>
                        <Box>
                            <Button>
                                Done
                            </Button>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Container>
    )
}

export default App