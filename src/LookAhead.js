import React from 'react';

class LookAhead extends React.Component {
    render = () => {
        return (
            <div className="look-ahead">
                <input type="text" className="query" />
                <div className="search-results">
                    <div className="result"></div>
                </div>
            </div>
        )
    }
}