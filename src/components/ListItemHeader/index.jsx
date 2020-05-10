import React from 'react';
    
function ListItemHeader({ story }) {
    return (
        <div className="list-item-header">
            <div className="item">Comments</div>
            <div className="item">Vote Count</div>
            <div className="item">Up Vote</div>
            <div className="item">News Detail</div>
        </div>
    )
};

export default React.memo(ListItemHeader);