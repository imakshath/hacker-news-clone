import React from "react";
import ListItemContainer from "../../containers/ListItemContainer";
import Pagination from "../Pagination";
import ListItemHeader from '../ListItemHeader';
import { useLocation } from "@reach/router";
import './List.scss';

export default function List({ stories = [], fetchStories, page, totalPages, isFetching }) {
    const { search } = useLocation();
    React.useEffect(() => {
        const fetchDetails = () => {
            const queryStringVal = parseInt(search.split('?page=').pop());
            const pageNum = queryStringVal || 1;
            fetchStories(pageNum);
        }
        //* Check whether  query string is proper or not. */
        if (search === '' || search.startsWith('?page=')){
            fetchDetails();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <div className="container">
            <div className="list-container">
                <ListItemHeader />
                {stories.map((story) => (
                    <ListItemContainer key={story.objectID} story={story} />
                ))}
            </div>
            <Pagination
                page={page}
                totalPages={totalPages}
                fetchStories={fetchStories}
                isFetching={isFetching}
            />
            <hr className="base-bg-color" />
        </div>
    );
}

