import { useState, useMemo } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { branches } from '../data/content';

const BranchesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter branches based on search
  const filteredBranches = useMemo(() => {
    return branches.filter(branch => {
      const matchesSearch = branch.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

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
          </div>

          <div className="branches-results">
            <p className="branches-count">
              Showing {filteredBranches.length} of {branches.length} branches
            </p>
          </div>

          <div className="branches-grid">
            {filteredBranches.length > 0 ? (
              filteredBranches.map((branch) => (
                <article key={branch.name} className="branch-card">
                  <div className="branch-header">
                    <h3 className="branch-name">{branch.name}</h3>
                  </div>
                  <div className="branch-footer">
                    <div className="branch-info">
                      <span className="branch-lead">{branch.lead}</span>
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
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchesPage;

