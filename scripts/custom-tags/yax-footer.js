// /scripts/custom-tags/yax-footer.js file
import {LitElement, html} from 'https://jspm.dev/lit-element';
export class YaxFooter extends LitElement {
  render(){
    return html`
    <footer><p>© ${new Date().getFullYear()} Yax.com</p></footer>
    `;
  }
}
customElements.define('yax-footer', YaxFooter);
