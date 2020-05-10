import React from 'react';
import './UpVote.scss';

function UpVote({ onVoteUpStory, storyId }) {
    const handleVoteUp = React.useCallback(() => {
        onVoteUpStory(storyId);
    }, [onVoteUpStory, storyId]);

    return (
        <div data-testid={`upvote-${storyId}`} className="upvote-arrow" onClick={handleVoteUp}></div>
    );
}

export default React.memo(UpVote);
