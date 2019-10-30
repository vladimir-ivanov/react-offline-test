import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card as MuiCard } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
);

export const Card = ({ children }) => {
    const classes = useStyles({});

    return (
        <MuiCard className={classes.card}>
            <CardContent>
                {children}
            </CardContent>
        </MuiCard>
    );
};
