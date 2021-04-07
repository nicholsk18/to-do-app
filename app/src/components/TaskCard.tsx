import React from "react";
import {Box, Button, Card, Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '2px'
    }
}));

const TaskCard = () => {
    const classes = useStyles();

    return (
        <Box my={3}>
            <Card variant='outlined'>
                <Grid container spacing={1}>
                    <Grid item xs={9}>
                        <Box p={1}>
                            <Typography variant="h6" component="h3">
                                Task that needs to be complete
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box p={1} textAlign='center'>
                            <Button
                                className={classes.margin}
                                variant='contained'
                                color='primary'
                                size='small'
                            >
                                <DoneIcon fontSize='small' />
                            </Button>
                            <Button
                                className={classes.margin}
                                variant='contained'
                                color='primary'
                                size='small'
                            >
                                <EditIcon fontSize='small' />
                            </Button>
                            <Button
                                className={classes.margin}
                                variant='contained'
                                color='secondary'
                                size='small'
                            >
                                <DeleteIcon fontSize='small' />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default TaskCard