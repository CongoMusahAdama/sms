type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

const SectionHeading = ({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) => (
  <div className={`section-heading ${align}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {description && <p className="lead">{description}</p>}
  </div>
);

export default SectionHeading;

