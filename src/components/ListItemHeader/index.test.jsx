import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ListItemHeader from '.';

afterEach(cleanup);

describe('<ListItemHeader /> component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = render(
            <ListItemHeader />
        );
    });

    test('should render without crash', () => {
        expect(wrapper.container).toBeDefined();
    });

    test('should get by testid', () => {
        expect(wrapper.getByTestId('list-item-header')).toBeDefined();
        expect(wrapper.getByText('Comments')).toBeDefined();
        expect(wrapper.getByText('Vote Count')).toBeDefined();
        expect(wrapper.getByText('Up Vote')).toBeDefined();
        expect(wrapper.getByText('News Detail')).toBeDefined();
    });

    test('should match snapshot', () => {
        const tree = renderer.create(<ListItemHeader />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})