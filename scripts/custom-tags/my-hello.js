import { LitElement } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import { html } from 'https://cdn.skypack.dev/lit-html@1.2.1';
class HelloWorld extends LitElement {
  render(){
    return html`
      <p>Hello World</p>
    `;
  }
}
customElements.define('my-hello', HelloWorld);