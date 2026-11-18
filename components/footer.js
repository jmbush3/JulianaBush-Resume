class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <nav class="main-footer" aria-label="Main Footer">
	  <h2>Social Media</h2>
		<ul>
		   <li><a href="tel:+16617706875"><img src="images/phone-icon.png" alt="Call Me"></a></li>
		   <li><a href="mailto:bush.juliana.333@gmail.com"><img src="images/email-icon.png" alt="Email Me"></a></li>
		   <li><a href="https://github.com/jmbush3"><img src="images/github-icon.png" alt="Visit my GitHub Profile"></a></li>
		   <li><a href="https://www.linkedin.com/in/julianamaybush/"><img src="images/linkedin-icon.png" alt="Visit my LinkedIn Profile"></a></li>
		</ul>
        </nav>
      </footer>
    `;
  }
}

customElements.define('main-footer', MainFooter);
