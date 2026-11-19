class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="main-footer">
        <nav aria-label="Social Media">
	  <h2>Social Media</h2>
		<ul>
		   <li><a href="tel:+16617706875" aria-label="Call Me" target="_blank" rel="noopener noreferrer"><img src="images/phone-icon.png" alt=""></a></li>
		   <li><a href="mailto:bush.juliana.333@gmail.com" aria-label="Email Me" target="_blank" rel="noopener noreferrer"><img src="images/email-icon.png" alt=""></a></li>
		   <li><a href="https://github.com/jmbush3" aria-label="Visit my GitHub Profile" target="_blank" rel="noopener noreferrer"><img src="images/github-icon.png" alt=""></a></li>
		   <li><a href="https://www.linkedin.com/in/julianamaybush/" aria-label="Visit my LinkedIn Profile" target="_blank" rel="noopener noreferrer"><img src="images/linkedin-icon.png" alt=""></a></li>
		</ul>
        </nav>
        <p>&copy; 2026 Juliana Bush. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define('main-footer', MainFooter);
