class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
	<a class="skip-link" href="#main">Skip to Main Content</a>
        <nav class="main-nav" aria-label="Main Navigation" id="main-nav">
          <button
            class="menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="main-nav-links">
            <span aria-hidden="true">&#9776;</span>
          </button>

	 <ul id="main-nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="work-history.html">Work History</a></li>
          <li><a href="education.html">Education</a></li>
	  <li><a href="skills.html">Skills</a></li>
	 </ul>
        </nav>
      </header>
    `;

    const nav = this.querySelector(".main-nav");
    const toggle = this.querySelector(".menu-toggle");
    const links = this.querySelectorAll(".main-nav a");

    toggle.addEventListener("click", () => {
      const expanded = nav.classList.toggle("responsive");

      toggle.setAttribute("aria-expanded", expanded);
      toggle.setAttribute(
        "aria-label",
        expanded ? "Close navigation menu" : "Open navigation menu"
      );
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("responsive");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }
}

customElements.define('main-header', MainHeader);
