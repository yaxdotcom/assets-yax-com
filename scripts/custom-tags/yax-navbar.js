// /scripts/custom-tags/yax-navbar.js file
import { LitElement } from 'https://jspm.dev/lit-element@2.3.1';
import { html } from 'https://jspm.dev/lit-html@1.2.1';
export class YaxNavbar extends LitElement {
  createRenderRoot() {
    return this;
  }
  render(){
    return html`
    <nav class="navbar is-transparent is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://yax.com/">
          <span class="icon is-large">
            <img src="https://assets.yax.com/images/icons/yax.jpg" alt="">
          </span>
        </a>
        <a class="navbar-item" target="blank" href="https://github.com/yaxdotcom">
            <span class="icon">
              <img src="https://assets.yax.com/images/icons/github.jpg" alt="">
            </span>
          </a>
          <a class="navbar-item" target="blank" href="https://twitter.com/rails_apps">
            <span class="icon">
              <img src="https://assets.yax.com/images/icons/twitter.svg" alt="">
            </span>
          </a>
          <a class="navbar-item" target="blank" href="https://www.facebook.com/daniel.kehoe.sf">
            <span class="icon">
              <img src="https://assets.yax.com/images/icons/facebook-f.svg" alt="">
            </span>
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
            <a itemprop="url" class="navbar-item has-text-white" href="https://tutorials.yax.com/">
              <span itemprop="name">Tutorials</span></a>
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

//  toggles the class is-active on both the navbar-burger and the targeted navbar-menu
document.addEventListener('DOMContentLoaded', () => {

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

});
