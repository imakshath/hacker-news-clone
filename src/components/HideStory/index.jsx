import React from 'react';

function HideStory({ onHideStory, storyId }){
    const handleHideStory = React.useCallback(() => {
        onHideStory(storyId);
    }, [onHideStory, storyId]);
    return (
        <span data-testid={`hide-story-${storyId}`} className="hide-action-wrapper ml-5" onClick={handleHideStory}>[ hide ]</span>
    )
};

export default React.memo(HideStory);