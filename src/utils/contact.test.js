import { describe, expect, it } from 'vitest';
import { makeMailto, validateContact } from './contact';

describe('contact form helpers', () => {
  it('returns errors for incomplete or invalid values', () => {
    expect(validateContact({ name: '', email: 'not-an-email', subject: '', message: '' })).toEqual({
      name: 'Please enter your name.', email: 'Please enter a valid email address.', subject: 'Please add a subject.', message: 'Please write a message.',
    });
  });

  it('creates a prefilled mailto fallback', () => {
    expect(makeMailto({ name: 'Ada', email: 'ada@example.com', subject: 'Hello', message: 'Hi there' }, 'me@example.com')).toContain('mailto:me@example.com?subject=Hello');
  });
});
