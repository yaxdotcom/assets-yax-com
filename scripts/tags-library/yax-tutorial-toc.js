import { LitElement, html } from 'https://jspm.dev/lit-element@2';
import { until } from 'https://jspm.dev/lit-html@1/directives/until.js';
import { unsafeHTML } from 'https://jspm.dev/lit-html@1/directives/unsafe-html.js';

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
					type = 'article';
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
					list_item += '\n';
				}
				return html`
      <style>
        .card {
          border-radius: 6px;
          overflow: hidden;
          max-width: 300px;
          max-height: 380px;
          margin: 0 auto;
        }
        .card .header {
          height: 60px;
          background: #e3efee;
        }
        .card .header .avatar {
          width: 80px;
          height: 100%;
          position: relative;
          margin: 0 auto;
        }
        .card .header .avatar img {
          display: block;
          border-radius: 50%;
          position: absolute;
          bottom: -42px;
          border: 4px solid white;
        }
        .card .card-body {
          padding: 30px;
        }
        .card .card-body .toc-headline {
          font-size: 90%;
          color: #8fada9;
        }
        .card .toc-list {
          padding-top: 8px;
          font-size: 92%;
          color: #999;
        }
      </style>
      <aside class="mt-6">
        <div class="card">
          <div class="header"></div>
          <div class="card-body">
            <h5 class="toc-headline">${heading}</h5>
            <div class="toc-list is-size-7">
              <ul class="menu-list">
              ${unsafeHTML(list_item)}
            </ul>
            </div>
          </div>
        </div>
      </aside>
      `;
			})
			.catch(error => {
				console.error('Fetch failure:', error);
				return html`<h4>Error</h4>`;
			});
	}
	render() {
		return until(
			this.load().then(content => content),
			html`<h4>Loading...</h4>`
		);
	}
}

customElements.define('yax-tutorial-toc', YaxTutorialToc);
