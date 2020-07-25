// /scripts/custom-tags/yax-footer.js file
import {LitElement, html} from 'https://jspm.dev/lit-element';
export class YaxFooter extends LitElement {
  createRenderRoot() {
    return this;
  }
  render(){
    return html`
    <footer class="footer has-text-white has-text-weight-semibold" style="background-color:black;">
    <p>© ${new Date().getFullYear()} Yax.com</p></footer>
    `;
  }
}
customElements.define('yax-footer', YaxFooter);
