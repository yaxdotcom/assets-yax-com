// /scripts/custom-tags/yax-footer.js file
import { LitElement, html } from 'https://jspm.dev/lit-element@2';

export class YaxFooter extends LitElement {
  createRenderRoot() {
    return this;
  }
  render(){
    return html`
    <div class="footer has-text-white has-text-weight-semibold has-background-black">
    <div class="container">
        <div class="columns is-desktop">
          <div class="column is-5">
            <h2 class="title is-5 has-text-white">Yax.com</h2>
            <p class="block">Build a website for free with <a href="https://yax.com/">Yax.com</a>, the do-it-yourself alternative
            to commercial site builders. Own the code you create and take it anywhere, without
            vendor lock-in, using quality web components. Our tutorials will get you started.</p>
            <div>
              <a target="blank" href="https://github.com/yaxdotcom">
              <span class="icon  has-background-black">
              <img src="https://assets.yax.com/images/icons/github.jpg" alt="">
              </span>
              </a>
              <a target="blank" href="https://twitter.com/rails_apps">
              <span class="icon">
              <img src="https://assets.yax.com/images/icons/twitter.svg" alt="">
              </span>
              </a>
              <a target="blank" href="https://www.facebook.com/daniel.kehoe.sf">
              <span class="icon">
              <img src="https://assets.yax.com/images/icons/facebook-f.svg" alt="">
              </span>
              </a>
            </div>
          </div>
          <div class="column">
            <h3 class="title is-6 has-text-white">Get a Site</h3>
            <p>Build a website using Yax.com</p>
            <ul style="list-style-type: circle; list-style-position: inside;">
              <li><a href="https://try.yax.com/">try Yax</a></li>
            </ul>
          </div>
          <div class="column">
            <h6 class="title is-6 has-text-white">Tutorials</h6>
            <p>Learn more. And <br>support the project  <br>with a subscription <br>to our tutorials</p>
            <ul style="list-style-type: circle; list-style-position: inside;">
              <li><a href="https://tutorials.yax.com/">free</a></li>
              <li><a href="https://tutorials.yax.com/">Patron</a></li>
              <li><a href="https://tutorials.yax.com/">Premier</a></li>
            </ul>
          </div>
          <div class="column">
            <h6 class="title is-6 has-text-white">Resources</h6>
            <ul style="list-style-type: circle; list-style-position: inside;">
              <li><a href="#" onclick="$crisp.push(['do','chat:open'])">chat</a></li>
              <li><a href="mailto:support@yax.com">support@yax.com</a></li>
              <li><a href="https://blog.yax.com/">blog</a></li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <p class="subtitle is-7 has-text-white">© ${new Date().getFullYear()} Yax.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define('yax-footer', YaxFooter);
