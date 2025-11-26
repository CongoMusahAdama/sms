import { useEffect } from 'react';

interface UnderDevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnderDevelopmentModal = ({ isOpen, onClose }: UnderDevelopmentModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="under-development-overlay" onClick={onClose}>
      <div className="under-development-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="under-development-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="under-development-content">
          <div className="under-development-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h2>Under Development</h2>
          <p>This feature is currently under development. Please check back soon!</p>
          <button type="button" className="primary-button" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopmentModal;

