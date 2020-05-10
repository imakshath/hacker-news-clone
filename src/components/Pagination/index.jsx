import React from 'react';
import { Link } from '@reach/router';
import './Pagination.scss';

function Pagination({ page, isFetching, totalPages }) {
    const isPrevDisabled = React.useMemo(() => {
        return ((page > 1) && !isFetching) ? false : true
    }, [page, isFetching]);

    const isNextDisabled = React.useMemo(() => {
        return ((page < totalPages) && !isFetching) ? false : true
    }, [page, totalPages, isFetching]);

    return (
        <div className="pagination-wrapper" data-testid="pagination-wrapper">
            <Link
                disabled={isPrevDisabled}
                className="text-bold base-bg-color"
                to={`/?page=${page - 1}`}
            >
                Previous
            </Link>
            <span className="vertical-line base-bg-color"></span>
            <Link
                disabled={isNextDisabled}
                className="text-bold base-bg-color"
                to={`/?page=${page + 1}`}
            >
                Next
            </Link>
        </div>
    );
}

export default React.memo(Pagination);