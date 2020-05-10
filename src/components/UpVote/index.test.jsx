import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import UpVote from '.';

afterEach(cleanup);

describe('<UpVote /> component', () => {
    let wrapper;
    const props = {
        storyId: "123",
        onVoteUpStory: jest.fn()
    };
    
    beforeEach(() => {
        wrapper = render(
            <UpVote {...props} />
        );
    });

    test('should render without crash', () => {
        expect(wrapper.container).toBeDefined();
    });

    test('should get by testid', () => {
        expect(wrapper.getByTestId('upvote-123')).toBeDefined();
    });

    test('should match snapshot', () => {
        const tree = renderer.create(<UpVote />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})