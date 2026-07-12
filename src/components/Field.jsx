export default function Field({ label, name, value, error, onChange, type = 'text', textarea = false }) {
  const id = `contact-${name}`;
  const props = {
    id,
    name,
    value,
    onChange,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
  };

  return (
    <label className={`field ${error ? 'has-error' : ''}`}>
      {label}
      {textarea ? <textarea {...props} rows="5" /> : <input {...props} type={type} />}
      {error && <span id={`${id}-error`} role="alert">{error}</span>}
    </label>
  );
}
