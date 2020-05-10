import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Pagination from '.';

afterEach(cleanup);

describe('<Pagination /> component', () => {
    let wrapper;
    const props = {
        page: 1,
        isFetching: false,
        totalPages: 10,
    };
    
    beforeEach(() => {
        wrapper = render(
            <Pagination {...props} />
        );
    });

    test('should render without crash', () => {
        expect(wrapper.container).toBeDefined();
    });

    test('should get by testid', () => {
        expect(wrapper.getByTestId('pagination-wrapper')).toBeDefined();
    });

    test('should match snapshot', () => {
        const tree = renderer.create(<Pagination />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});