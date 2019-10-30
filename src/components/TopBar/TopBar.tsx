import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';

interface Props {
    title: string;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1
        }
    })
);

export const TopBar: FunctionComponent<Props> = ({ title }) => {
    const classes = useStyles({});

    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};
