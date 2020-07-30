// /scripts/custom-tags/yax-tutorial-toc.js file

import { LitElement, html } from 'https://jspm.dev/lit-element@2.3.1';
import { until } from 'https://jspm.dev/lit-html@1.2.1/directives/until.js';

export class YaxTutorialToc extends LitElement {
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
      return tutorial.pages;
    })
    .then(pages => {
      return html`
      <aside class="menu">
        <p class="menu-label">
          Tutorial contents
        </p>
        <ul class="menu-list">
          <li><a href="index.html">${pages.shift()}</a></li>
          ${pages.map((item, index) => html`<li><a href="${index + 1}.html">${item}</a></li>`)}
        </ul>
      </aside>
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

customElements.define('yax-tutorial-toc', YaxTutorialToc);
