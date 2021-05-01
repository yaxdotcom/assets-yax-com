import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2.4.0';
import { until } from 'https://cdn.skypack.dev/lit-html@1.3.0/directives/until.js';
import { unsafeHTML } from 'https://cdn.skypack.dev/lit-html@1.3.0/directives/unsafe-html.js';

export class YaxTutorialCrumbs extends LitElement {
  createRenderRoot() {
    return this;
  }
  load() {
    return fetch('manifest.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not find manifest file');
      }
      return response.json();
    })
    .then(tutorial => {
      let crumbs = '';
      crumbs += `
        <nav class="breadcrumb">
        <ul>
          <li><a href="https://yax.com" style="padding-left: 0">Yax.com</a></li>
          <li><a href="/learn/index.html">Tutorials</a></li>
      `;
      if(tutorial.title != null){
        crumbs += `
          <li class="is-active"><a>${tutorial.title}</a></li>
        `;
      }
      crumbs += `
        </ul>
      `;
      if(tutorial.pubdate != null){
        let date = new Date(tutorial.pubdate);
        crumbs += `
          <span class="is-size-7 is-italic">Published ${(date.toDateString()).substring(4)}</span>
        `;
      }
      crumbs += `
        </nav>
      `;
      return html`
        ${unsafeHTML(crumbs)}
      `;
    })
    .catch(error => {
      console.error('Fetch failure:', error);
      return html`<h4>Error</h4>`;
    })
  }
  render() {
    return until(
      this.load().then(content => content ),
      html`<h4>Loading...</h4>`
    )
  }
}

customElements.define('yax-tutorial-crumbs', YaxTutorialCrumbs);
