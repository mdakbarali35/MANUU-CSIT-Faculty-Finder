import React from 'react';

const SearchBar = ({ search, setSearch }) => {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <input
                type="text"
                className="glass"
                placeholder="Search faculty by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    fontSize: '1.1rem',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(0,0,0,0.2)'
                }}
            />
        </div>
    );
};

export default SearchBar;
