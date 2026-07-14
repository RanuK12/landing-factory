import React from 'react';

const WcagTemplate: React.FC = () => {
  return (
    <div>
      <header role="banner">
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#main-content">Skip to main content</a></li>
            <li><a href="#footer">Skip to footer</a></li>
          </ul>
        </nav>
        <h1>Accessible Landing Page</h1>
      </header>

      <main id="main-content" role="main">
        <section aria-labelledby="section1-heading">
          <h2 id="section1-heading">Section 1</h2>
          <img src="/path/to/image.jpg" alt="Descriptive alt text" />
          <p>Content goes here...</p>
        </section>

        <section aria-labelledby="section2-heading">
          <h2 id="section2-heading">Section 2</h2>
          <form aria-labelledby="form-heading">
            <h3 id="form-heading">Contact Form</h3>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer id="footer" role="contentinfo">
        <p>&copy; 2026 Ranuk IT Solutions</p>
      </footer>
    </div>
  );
};

export default WcagTemplate;