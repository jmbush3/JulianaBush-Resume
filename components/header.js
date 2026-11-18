class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="main-nav" aria-label="Main Navigation">
	 <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="work-history.html">Work History</a></li>
          <li><a href="education.html">Education</a></li>
	  <li><a href="skills.html">Skills</a></li>
	 </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);
