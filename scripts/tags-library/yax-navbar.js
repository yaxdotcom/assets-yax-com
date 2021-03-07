import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2.4.0';

export class YaxNavbar extends LitElement {

  async performUpdate() {
    super.performUpdate();
    // set up hamburger menu after super.performUpdate() calls render()
    // toggles the class is-active on both the navbar-burger and the targeted navbar-menu

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  createRenderRoot() {
    return this;
  }

  render(){
    return html`
    <nav class="navbar is-transparent is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://yax.com/">
        <figure class="image is-36x36" style="margin-left:-60px;margin-right:-60px;">
            <img src="https://assets.yax.com/images/icons/yax-cap-white-solid.svg" />
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://github.com/yaxdotcom">
          <figure class="image is-24x24 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://twitter.com/yaxdotcom">
          <figure class="image is-24x24" style="">
            <svg width="26" height="26" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://www.instagram.com/yaxdotcom/">
          <figure class="image is-32x32" style="margin-left:-8px;">
            <svg width="36" height="36" id="Layer_1" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="24" cy="24" fill="#000000" r="24"/><path d="M31.2,12.3H16.8c-2.5,0-4.5,2-4.5,4.5v4.8v9.6c0,2.5,2,4.5,4.5,4.5h14.4c2.5,0,4.5-2,4.5-4.5v-9.6v-4.8  C35.7,14.3,33.7,12.3,31.2,12.3z M32.5,15l0.5,0v0.5V19l-4,0l0-4L32.5,15z M20.7,21.6c0.7-1,2-1.7,3.3-1.7s2.6,0.7,3.3,1.7  c0.5,0.7,0.8,1.5,0.8,2.4c0,2.3-1.9,4.1-4.1,4.1s-4.1-1.8-4.1-4.1C19.9,23.1,20.2,22.3,20.7,21.6z M33.4,31.2c0,1.2-1,2.2-2.2,2.2  H16.8c-1.2,0-2.2-1-2.2-2.2v-9.6h3.5c-0.3,0.7-0.5,1.6-0.5,2.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4c0-0.8-0.2-1.7-0.5-2.4  h3.5V31.2z" fill="#FFFFFF"/></svg>
          </figure>
        </a>
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu has-background-black">
        <div class="navbar-end">
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://try.yax.com/">
              <span itemprop="name">Try Yax</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://sites.yax.com/">
              <span itemprop="name">Websites</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://tutorials.yax.com/">
              <span itemprop="name">Tutorials</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://yax.com/pricing.html">
              <span itemprop="name">Pricing</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://blog.yax.com/">
              <span itemprop="name">Blog</span></a>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}
customElements.define('yax-navbar', YaxNavbar);
