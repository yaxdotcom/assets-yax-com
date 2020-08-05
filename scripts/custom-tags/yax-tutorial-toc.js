// /scripts/custom-tags/yax-tutorial-toc.js file

import { LitElement, html } from 'https://jspm.dev/lit-element@2.3.1';
import { until } from 'https://jspm.dev/lit-html@1.2.1/directives/until.js';
import { unsafeHTML } from 'https://jspm.dev/lit-html@1.2.1/directives/unsafe-html.js';

export class YaxTutorialToc extends LitElement {
  createRenderRoot() {
    return this;
  }
  load() {
    let type = 'tutorial';
    return fetch('manifest.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not find manifest file');
      }
      return response.json();
    })
    .then(tutorial => {
      if (tutorial.type == 'article') {
        type = 'article';;
      }
      return tutorial.pages;
    })
    .then(pages => {
      let heading = 'Tutorial Contents';
      let list_item = '';
      if (type == 'article') {
        heading = 'Articles';
      }
      for (const [key, value] of Object.entries(pages)) {
        list_item += '<li><a href="';
        list_item += value.url;
        list_item += '">';
        list_item += value.title;
        list_item += '</a></li>';
        list_item += '\n'
      }
      return html`
      <aside class="menu">
        <p class="menu-label">
          ${heading}
        </p>
        <ul class="menu-list">
          ${unsafeHTML(list_item)}
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
