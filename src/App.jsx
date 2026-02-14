import { useState, useMemo } from "react";
import facultyData from "./data/faculty.json";
import FacultyCard from "./components/FacultyCard";
import FacultyDetails from "./components/FacultyDetails";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";

function App() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Extract unique specializations for filter
  const uniqueSpecializations = useMemo(() => {
    const specs = new Set(facultyData.map(f => f.specialization));
    return Array.from(specs);
  }, []);

  // Filter logic
  const filteredFaculty = facultyData.filter((faculty) => {
    const matchesSearch = faculty.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpecialization = specialization ? faculty.specialization === specialization : true;
    return matchesSearch && matchesSpecialization;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '3rem',
          margin: '0 0 0.5rem 0',
          background: 'linear-gradient(to right, #fff, var(--accent-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Anti-Gravity
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Faculty Finder System</p>
      </header>

      {selectedFaculty ? (
        <FacultyDetails
          faculty={selectedFaculty}
          onBack={() => setSelectedFaculty(null)}
        />
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
          <FilterSidebar
            specialization={specialization}
            setSpecialization={setSpecialization}
            uniqueSpecializations={uniqueSpecializations}
          />

          <main>
            <SearchBar search={search} setSearch={setSearch} />

            {filteredFaculty.length === 0 ? (
              <div className="glass" style={{ padding: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                No faculty found matching your criteria.
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {filteredFaculty.map((faculty) => (
                  <FacultyCard
                    key={faculty.id}
                    faculty={faculty}
                    onSelect={setSelectedFaculty}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
