import '../../setupEnzyme';

import * as React from 'react';
import { mount } from 'enzyme';
import { TopBar } from './TopBar';

jest.mock('@material-ui/core',() => {
    return {CssBaseline: () => (<>CssBaseline</>)};
});

//TODO - snapshot serialization needs fixing, does not work correctly
describe('TopBar', () => {
    it('should render correctly', () => {
        expect(mount(<TopBar title='some title' />)).toMatchSnapshot();
    });
});
