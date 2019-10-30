import React from 'react';
import { TopBar } from './components/TopBar/TopBar';
import { EnergyMixes } from './containers/EnergyMixes';

//todo - add roots/ possibly reducer store and themes - depending on requirements
export const App = () => (
    <>
        <TopBar title="UK Energy Mix" />
        <EnergyMixes />
    </>
);
