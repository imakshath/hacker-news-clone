import React from 'react';
import * as moment from 'moment';
import UpVote from '../UpVote';
import HideStory from '../HideStory';
import './ListItem.scss';

function ListItem({ story, voteUpStory, hideStory }) {
    return (
        <div className="list-item-wrapper">
            <div className="item text-center">{story.num_comments || 0}</div>
            <div className="item text-center">{story.num_voteup || 0}</div>
            <div className="item">
                <UpVote onVoteUpStory={voteUpStory} storyId={story.objectID}/>
            </div>
            <div className="item">
               <StoryDetail story={story} onHideStory={hideStory} />
            </div>
        </div>
    )
};

const StoryDetail = ({ story, onHideStory }) => {
    const { url } = story;

    const getUrl = React.useMemo(() => {
        return url ? new URL(url) : {};
    }, [url]);

    return (
        <div className="story-detail-wrapper">
            <a
                className="title text-bold"
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {story.title}
            </a>
            <div className="detail-inner-wrapper">
                <span className="ml-5 mr-5">
                    <a href={getUrl.href} target="_blank" rel="noopener noreferrer">
                        ({getUrl.host})
                    </a>
                </span>
                <span className="ml-5 mr-5">
                    by <span className="dark-color text-bold">{story.author}</span>
                </span>
                <span className="ml-5 mr-5">
                    {moment(story.created_at).startOf('day').fromNow()}
                </span>
                <HideStory storyId={story.objectID} onHideStory={onHideStory} />
            </div>
        </div>
    );
}

export default React.memo(ListItem);

