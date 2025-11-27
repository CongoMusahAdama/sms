import { useState, useMemo } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { branches, type Branch } from '../data/content';

// Helper function to calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const BranchesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>('');
  const [maxDistance, setMaxDistance] = useState<number>(50); // Default 50km radius

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setIsLocating(false);
      },
      (error) => {
        let errorMessage = 'Unable to get your location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location services.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
        }
        setLocationError(errorMessage);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // Filter branches based on search and location
  const filteredBranches = useMemo(() => {
    type BranchWithDistance = Branch & { distance?: number };
    
    let filtered: BranchWithDistance[] = branches.filter(branch => {
      const matchesSearch = branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    }) as BranchWithDistance[];

    // Filter by distance if user location is available
    if (userLocation) {
      filtered = filtered
        .map(branch => ({
          ...branch,
          distance: calculateDistance(
            userLocation.lat,
            userLocation.lng,
            branch.coordinates.lat,
            branch.coordinates.lng
          )
        }))
        .filter(branch => branch.distance! <= maxDistance)
        .sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return filtered;
  }, [searchQuery, userLocation, maxDistance]);

  // Create a clickable map link
  const mapLink = useMemo(() => {
    const query = filteredBranches
      .map(branch => `${branch.name},+${branch.address || 'Sekondi-Takoradi'}`)
      .join('/');
    return `https://www.google.com/maps/search/${query}`;
  }, [filteredBranches]);

  return (
    <>
      <PageHero
        eyebrow="Branches"
        title="Local hubs powering global masquerade excellence."
        description="Each branch runs community engagement, payments, forums, and galleries with support from the Supreme platform."
      />

      <section className="branches-section">
        <div className="shell">
          <SectionHeading eyebrow="Directory" title="Explore our active branches" />
          
          {/* Filter Bar */}
          <div className="branches-filter-bar">
            <div className="filter-search">
              <input
                type="text"
                placeholder="Search branches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="filter-search-input"
              />
            </div>
            
            <div className="filter-actions">
              {/* Location filter */}
              <div className="location-filter">
                {!userLocation ? (
                  <button
                    onClick={getCurrentLocation}
                    disabled={isLocating}
                    className="location-btn"
                  >
                    {isLocating ? '📍 Locating...' : '📍 Find Branches Near Me'}
                  </button>
                ) : (
                  <div className="location-active">
                    <span>📍 Location Active</span>
                    <button onClick={() => setUserLocation(null)} className="clear-location-btn">
                      ✕
                    </button>
                    <select 
                      value={maxDistance} 
                      onChange={(e) => setMaxDistance(Number(e.target.value))}
                      className="distance-select"
                    >
                      <option value={10}>Within 10km</option>
                      <option value={25}>Within 25km</option>
                      <option value={50}>Within 50km</option>
                      <option value={100}>Within 100km</option>
                      <option value={500}>Within 500km</option>
                    </select>
                  </div>
                )}
                {locationError && (
                  <div className="location-error">{locationError}</div>
                )}
              </div>

              {/* View toggle */}
              <div className="view-toggle">
                <button
                  onClick={() => setViewMode('list')}
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`view-btn ${viewMode === 'map' ? 'active' : ''}`}
                >
                  Map
                </button>
              </div>
            </div>
          </div>

          <div className="branches-results">
            <p className="branches-count">
              Showing {filteredBranches.length} of {branches.length} branches
              {userLocation && filteredBranches.length > 0 && (
                <span className="nearest-branch">
                  {' • '}Nearest: {filteredBranches[0].name} 
                  {filteredBranches[0].distance && ` (${filteredBranches[0].distance.toFixed(1)}km away)`}
                </span>
              )}
            </p>
          </div>

          {viewMode === 'list' ? (
            <div className="branches-grid">
              {filteredBranches.length > 0 ? (
                filteredBranches.map((branch) => (
                  <article key={branch.name} className="branch-card">
                    <div className="branch-header">
                      <h3 className="branch-name">{branch.name}</h3>
                      {branch.distance && (
                        <span className="branch-distance">{branch.distance.toFixed(1)}km away</span>
                      )}
                    </div>
                    {branch.address && (
                      <div className="branch-address">{branch.address}</div>
                    )}
                    <div className="branch-leaders">
                      <div className="leaders-label">Branch Leaders:</div>
                      <div className="leaders-list">
                        {branch.leaders.map((leader, index) => {
                          // Generate human placeholder avatar based on branch name
                          const avatarUrl = leader.image.includes('BRANCH') || leader.image.includes('logo.png')
                            ? `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(branch.name)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
                            : leader.image;
                          
                          return (
                            <div key={index} className="leader-item">
                              <img 
                                src={avatarUrl} 
                                alt={leader.name}
                                className="leader-avatar"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(branch.name)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
                                }}
                              />
                            <div className="leader-info">
                              <span className="leader-name">{leader.name}</span>
                              {leader.role && <span className="leader-role">{leader.role}</span>}
                            </div>
                          </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="branch-footer">
                      <div className="branch-info">
                        {branch.members > 0 && (
                          <span className="branch-members">{branch.members} members</span>
                        )}
                      </div>
                      <a href={`mailto:${branch.contact}`} className="branch-contact">
                        Contact
                      </a>
                    </div>
                  </article>
                ))
              ) : (
                <div className="no-results">
                  <p>No branches found matching your search criteria.</p>
                  {userLocation && (
                    <p className="no-results-hint">
                      Try increasing the search radius or clearing the location filter.
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="branches-map-container">
              <div className="map-wrapper">
                <div className="map-placeholder">
                  <div className="map-content">
                    <h3>Branch Locations</h3>
                    <p>View all branch locations on Google Maps</p>
                    <a 
                      href={mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="map-link-btn"
                    >
                      Open in Google Maps
                    </a>
                    <div className="branch-locations-list">
                      {filteredBranches.map((branch, index) => (
                        <div key={branch.name} className="map-location-item">
                          <div className="map-location-number">{index + 1}</div>
                          <div className="map-location-details">
                            <strong>{branch.name}</strong>
                            {branch.address && <span>{branch.address}</span>}
                            {branch.distance && <span className="distance">{branch.distance.toFixed(1)}km away</span>}
                          </div>
                          <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address || branch.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-directions-btn"
                          >
                            Directions
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {userLocation && (
                <div className="map-legend">
                  <div className="legend-item">
                    <span className="legend-marker red"></span> Your Location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BranchesPage;
