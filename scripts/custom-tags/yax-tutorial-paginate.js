// /scripts/custom-tags/yax-tutorial-paginate.js file

import { LitElement, html } from 'https://jspm.dev/lit-element@2.3.1';
import { until } from 'https://jspm.dev/lit-html@1.2.1/directives/until.js';

export class YaxTutorialPaginate extends LitElement {
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
      let filename = window.location.href.split('/').pop().replace('.html', '');
      let mark = 0;
      if(filename !== 'index') mark = parseInt(filename, 10);
      if (Number.isNaN(mark)) {
        throw new Error('yax-tutorial-paginate tag fails unless filename is index or an integer');
      }
      let previous, next = html`&nbsp;`;
      // if mark == 0 then previous = html`&nbsp;`
      // if mark >= pages.length then next = html`&nbsp;`
      if (mark == 1) {
        previous = html`<a href="index.html" class="button prev">≪ ${pages[mark - 1]}</a>`
      } else if (mark > 1) {
        previous = html`<a href="${mark - 1}.html" class="button prev">≪ ${pages[mark - 1]}</a>`
      }
      if (mark < pages.length) {
        next = html`<a href="${mark + 1}.html" class="button next">${pages[mark + 1]} ≫</a>`
      }
      return html`
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
          ${previous}
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
          ${next}
          </div>
        </div>
      </nav>
      `;
    })
    .catch(error => {
      console.error(error);
      return html`&nbsp;`;
    })
  }
  render() {
    return until(
      this.load().then(content => content ),
      html`<h4>Loading...</h4>`
    )
  }
}

customElements.define('yax-tutorial-paginate', YaxTutorialPaginate);
