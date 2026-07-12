import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Field from './Field';
import { makeMailto, validateContact } from '../utils/contact';
import { portfolioData as data } from '../data/portfolio';

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const configured = Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const update = (event) => setValues((v) => ({ ...v, [event.target.name]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus('Please correct the highlighted fields.');
      return;
    }

    if (!configured) {
      setStatus('Opening your email app with your message ready to send.');
      window.location.href = makeMailto(values, data.email);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, values, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
      setStatus('Thanks — your message is on its way.');
      setValues({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('Something went wrong. Please email me directly instead.');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-grid">
        <div>
          <SectionHeading eyebrow="07 · Contact" title="Let’s make something memorable." />
          <Reveal>
            <p className="body-copy">Have a project in mind, or simply want to say hello? I’m always happy to connect.</p>
            <div className="contact-details">
              <a href={`mailto:${data.email}`}>
                <Mail />
                <span>
                  <small>Email</small>
                  {data.email}
                </span>
              </a>
              <a href={`tel:${data.phone.replace(/\s/g, '')}`}>
                <span className="phone-symbol">✦</span>
                <span>
                  <small>Phone</small>
                  {data.phone}
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Location</small>
                  {data.location}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="contact-form-wrap">
          <form onSubmit={submit} noValidate>
            <div className="field-row">
              <Field label="Name" name="name" value={values.name} error={errors.name} onChange={update} />
              <Field label="Email" name="email" value={values.email} error={errors.email} onChange={update} type="email" />
            </div>
            <Field label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={update} />
            <Field label="Message" name="message" value={values.message} error={errors.message} onChange={update} textarea />
            <button className="button primary submit" type="submit">
              Send message <Send size={17} />
            </button>
            <p className="form-status" aria-live="polite">{status}</p>
          </form>
          <div className="map-placeholder">
            <MapPin />
            <span>Based in {data.location}</span>
            <i />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
