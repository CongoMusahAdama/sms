import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { galleryItems, galleryYears } from '../data/content';

const GalleryPage = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  const groupedByOuting = galleryItems.reduce((acc, item) => {
    const key = `${item.year}-${item.outing}`;
    if (!acc[key]) {
      acc[key] = {
        year: item.year,
        outing: item.outing,
        date: item.date,
        items: [],
      };
    }
    acc[key].items.push(item);
    return acc;
  }, {} as Record<string, { year: number; outing: string; date: string; items: typeof galleryItems }>);

  const albums = Object.values(groupedByOuting).filter(album =>
    selectedYear === 'all' || album.year === selectedYear
  );

  // Filter items based on selected year and album
  let filteredItems = selectedYear === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.year === selectedYear);

  // If an album is selected, filter to that album's items
  if (selectedAlbum) {
    const selectedAlbumData = albums.find((a) => `${a.year}-${a.outing}` === selectedAlbum);
    if (selectedAlbumData) {
      filteredItems = selectedAlbumData.items;
    }
  }

  // Handle ESC key to close modal and prevent body scroll
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        }
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
      };
    }
  }, [selectedImage]);

  // Save image to device
  const saveImage = async () => {
    if (!selectedImage) return;

    try {
      const response = await fetch(selectedImage.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedImage.caption.replace(/\s+/g, '-')}.${selectedImage.image.split('.').pop()?.split('?')[0] || 'png'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  // Share image
  const shareImage = async () => {
    if (!selectedImage) return;

    if (navigator.share) {
      try {
        const response = await fetch(selectedImage.image);
        const blob = await response.blob();
        const file = new File([blob], `${selectedImage.caption}.png`, { type: blob.type });

        await navigator.share({
          title: selectedImage.caption,
          text: `Check out this photo from ${selectedImage.outing}`,
          files: [file],
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      // Fallback: copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Image link copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Media hub across turnouts, branches, and years."
        description="Curated photo and video drops showcasing costumes, choreography, mentorship, and behind-the-scenes rituals."
      />

      <section className="shell">
        <SectionHeading
          eyebrow="Photo Albums"
          title="Browse by Year & Outing"
          description="Explore our collection of photos organized by year and event outings."
        />

        {/* Filter Bar */}
        <div className="gallery-filter-bar">
          <button
            type="button"
            className={`filter-btn ${selectedYear === 'all' ? 'active' : ''}`}
            onClick={() => { setSelectedYear('all'); setSelectedAlbum(null); }}
          >
            All Years
          </button>
          {galleryYears.map((year) => (
            <button
              key={year}
              type="button"
              className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => { setSelectedYear(year); setSelectedAlbum(null); }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Albums Grid */}
        <div className="albums-container">
          {albums.map((album) => {
            const albumKey = `${album.year}-${album.outing}`;
            return (
              <div
                key={albumKey}
                className="album-card"
                onClick={() => {
                  setSelectedAlbum(albumKey);
                  setSelectedYear(album.year);
                  // Scroll to photos section
                  setTimeout(() => {
                    document.querySelector('.all-photos-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="album-thumbnail">
                  <img src={album.items[0]?.image || ''} alt={album.outing} loading="lazy" />
                  <div className="album-overlay">
                    <span className="album-count">{album.items.length} {album.items.length === 1 ? 'Photo' : 'Photos'}</span>
                  </div>
                </div>
                <div className="album-info">
                  <h3 className="album-title">{album.outing} {album.year}</h3>
                  <p className="album-date">{album.date}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Photos Grid */}
        <div className="all-photos-section">
          <div className="section-subtitle-wrapper">
            <h3 className="section-subtitle">
              {selectedAlbum
                ? (() => {
                  const selectedAlbumData = albums.find((a) => `${a.year}-${a.outing}` === selectedAlbum);
                  return selectedAlbumData ? `Photos from ${selectedAlbumData.outing} ${selectedAlbumData.year}` : 'All Photos';
                })()
                : 'All Photos'}
            </h3>
            {selectedAlbum && (
              <button
                type="button"
                onClick={() => {
                  setSelectedAlbum(null);
                  setSelectedYear('all');
                }}
                className="clear-filter-btn"
              >
                Show All
              </button>
            )}
          </div>
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <figure
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedImage(item)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.image} alt={item.caption} loading="lazy" />
                <figcaption>
                  <div>
                    <p className="eyebrow">{item.outing}</p>
                    <span className="pill">{item.mediaType.toUpperCase()}</span>
                  </div>
                  <h3>{item.caption}</h3>
                  <p>{item.date}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Image Modal */}
      {selectedImage && (
        <div className="gallery-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="gallery-modal-image-container">
              <img src={selectedImage.image} alt={selectedImage.caption} className="gallery-modal-image" />
            </div>
            <div className="gallery-modal-actions">
              <button type="button" className="gallery-action-btn" onClick={saveImage}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Save to Gallery
              </button>
              <button type="button" className="gallery-action-btn" onClick={shareImage}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share
              </button>
            </div>
            <div className="gallery-modal-info">
              <p className="eyebrow">{selectedImage.outing}</p>
              <h3>{selectedImage.caption}</h3>
              <p className="gallery-modal-date">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;

