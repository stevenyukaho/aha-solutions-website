'use client';

export function NewsletterForm() {
  return (
    <form
      style={{ display: 'flex', gap: 8 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="input"
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="btn btn-primary btn-sm"
        style={{ paddingRight: 14, whiteSpace: 'nowrap' }}
      >
        Subscribe
      </button>
    </form>
  );
}
