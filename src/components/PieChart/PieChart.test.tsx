import '../../setupEnzyme';

import * as React from 'react';
import { mount } from 'enzyme';
import { PieChart } from './PieChart';

const fixture = [
    {
        label: 'one',
        id: 'one',
        value: 12
    },
    {
        label: 'two',
        id: 'two',
        value: 78
    }
];

//TODO - snapshot serialization needs fixing, does not work correctly
describe('PieChart', () => {
    it('should render correctly', () => {
        expect(mount(<PieChart data={fixture} />)).toMatchSnapshot();
    });
});
