// /scripts/custom-tags/yax-tutorial-paginate.js file

import { LitElement, html } from 'https://jspm.dev/lit-element';
import { until } from 'https://jspm.dev/lit-html/directives/until.js';

export class YaxTutorialPaginate extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    ${until(
      fetch('manifest.json')
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
          return html`
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                ${mark == 0 ?
                html`&nbsp;` :
                html`<a href="${mark - 1}.html" class="button prev">≪ ${pages[mark -1]}</a>`}
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
              ${mark >= pages.length ?
                html`&nbsp;` :
                html`<a href="${mark + 1}.html" class="button next">${pages[mark +1]} ≫</a>`}
              </div>
            </div>
          </nav>
          `;
        })
        .catch(error => {
          console.error(error);
          return html`&nbsp;`;
        }),
      html`<h4>Loading</h4>`
    )}
  `;
  }
}

customElements.define('yax-tutorial-paginate', YaxTutorialPaginate);