type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => (
  <section className="page-hero">
    <div className="shell">
      <div className="page-hero__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="lead">{description}</p>}
      </div>
      {children && <div className="page-hero__actions">{children}</div>}
    </div>
  </section>
);

export default PageHero;

