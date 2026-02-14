import React from 'react';

const FilterSidebar = ({ specialization, setSpecialization, uniqueSpecializations }) => {
    return (
        <aside className="glass" style={{ padding: '1.5rem', height: 'fit-content' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                Filter by Specialization
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                    onClick={() => setSpecialization('')}
                    style={{
                        background: specialization === '' ? 'var(--accent-color)' : 'transparent',
                        color: specialization === '' ? '#fff' : 'rgba(255,255,255,0.7)',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        textAlign: 'left',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        fontWeight: specialization === '' ? 'bold' : 'normal'
                    }}
                >
                    All
                </button>
                {uniqueSpecializations.map((spec) => (
                    <button
                        key={spec}
                        onClick={() => setSpecialization(spec)}
                        style={{
                            background: specialization === spec ? 'var(--accent-color)' : 'transparent',
                            color: specialization === spec ? '#fff' : 'rgba(255,255,255,0.7)',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            textAlign: 'left',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                            fontWeight: specialization === spec ? 'bold' : 'normal'
                        }}
                    >
                        {spec}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default FilterSidebar;
