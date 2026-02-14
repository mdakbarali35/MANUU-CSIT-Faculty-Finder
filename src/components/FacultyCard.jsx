import React from 'react';

const FacultyCard = ({ faculty, onSelect }) => {
    return (
        <div
            className="glass faculty-card"
            onClick={() => onSelect(faculty)}
            style={{
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1rem'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <img
                src={faculty.image_url}
                alt={faculty.name}
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--accent-color)'
                }}
            />
            <div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>{faculty.name}</h3>
                <p style={{ margin: 0, color: 'var(--accent-color)', fontWeight: '500' }}>{faculty.designation}</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>{faculty.qualification}</p>
            </div>
            <div style={{ marginTop: 'auto', width: '100%' }}>
                <span style={{
                    fontSize: '0.8rem',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    display: 'inline-block'
                }}>
                    {faculty.specialization}
                </span>
            </div>
        </div>
    );
};

export default FacultyCard;
