export default function ButtonLink({ href, children, className = '', disabled = false, onClick, title }) {
  if (disabled) {
    return (
      <button className={`button ${className} disabled`} type="button" aria-disabled="true" title={title}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={`button ${className}`} onClick={onClick}>
      {children}
    </a>
  );
}
