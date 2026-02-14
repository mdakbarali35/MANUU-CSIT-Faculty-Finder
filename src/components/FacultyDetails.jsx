import React from 'react';

const FacultyDetails = ({ faculty, onBack }) => {
    return (
        <div className="glass" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <button
                onClick={onBack}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1rem'
                }}
            >
                ← Back to list
            </button>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <img
                    src={faculty.image_url}
                    alt={faculty.name}
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        border: '4px solid var(--accent-color)'
                    }}
                />

                <div style={{ flex: 1 }}>
                    <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem' }}>{faculty.name}</h2>
                    <p style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>{faculty.designation}</p>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div>
                            <strong style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>QUALIFICATION</strong>
                            <p style={{ margin: '0.2rem 0 0 0' }}>{faculty.qualification}</p>
                        </div>

                        <div>
                            <strong style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>EXPERIENCE</strong>
                            <p style={{ margin: '0.2rem 0 0 0' }}>{faculty.experience}</p>
                        </div>

                        <div>
                            <strong style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>SPECIALIZATION</strong>
                            <p style={{ margin: '0.2rem 0 0 0' }}>{faculty.specialization}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ marginTop: 0 }}>Research Areas</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {faculty.research_areas.map((area, index) => (
                        <span key={index} style={{
                            background: 'rgba(0, 188, 212, 0.15)',
                            color: 'var(--accent-color)',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            border: '1px solid rgba(0, 188, 212, 0.3)'
                        }}>
                            {area}
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="glass" style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)' }}>
                    <strong style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>EMAIL</strong>
                    <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                </div>
                <div className="glass" style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)' }}>
                    <strong style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>PHONE</strong>
                    <span>{faculty.phone}</span>
                </div>
            </div>
        </div>
    );
};

export default FacultyDetails;
