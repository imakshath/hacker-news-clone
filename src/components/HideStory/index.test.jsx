import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HideStory from '.';

afterEach(cleanup);

describe('<HideStory /> component', () => {
    let wrapper;
    const props = {
        storyId: "123",
        onHideStory: jest.fn()
    };
    
    beforeEach(() => {
        wrapper = render(
            <HideStory {...props} />
        );
    });

    test('should render without crash', () => {
        expect(wrapper.container).toBeDefined();
    });

    test('should get by testid', () => {
        expect(wrapper.getByTestId('hide-story-123')).toBeDefined();
        expect(wrapper.getByText('[ hide ]')).toBeDefined();
    });

    test('should match snapshot', () => {
        const tree = renderer.create(<HideStory />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})