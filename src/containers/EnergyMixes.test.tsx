import '../setupEnzyme';

import * as React from 'react';
import { mount } from 'enzyme';
import { EnergyMixes } from './EnergyMixes';

jest.mock('../components/PieChart/PieChart', () => {
    return { PieChart: () => (<>PieChart</>) };
});

// test does not work, needs fixing React.createElement: type is invalid
jest.mock('@material-ui/core', () => {
    return { Card: () => (<>PieChart</>) };
});

jest.mock('../core/api/getGenerationMix', () => {
    return {
        getGenerationMix: () => new Promise((resolve) => {
            resolve([]);
        })
    };
});

//TODO - snapshot serialization needs fixing, does not work correctly
describe('EnergyMixes', () => {
    it('should render correctly', () => {
        expect(mount(<EnergyMixes />)).toMatchSnapshot();
    });
});
