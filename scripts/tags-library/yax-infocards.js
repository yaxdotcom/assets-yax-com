import { LitElement, html } from 'https://jspm.dev/lit@2.0.0-rc.2';
import { until } from 'https://jspm.dev/lit@2.0.0-rc.2/directives/until.js';
import { unsafeHTML } from 'https://jspm.dev/lit@2.0.0-rc.2/directives/unsafe-html.js';

export class YaxInfocards extends LitElement {
	constructor() {
		super();
		this.cards_per_row = 3;
	}

	static get properties() {
		return {
			cards_per_row: { type: Number },
		};
	}

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
			.then(content => {
				return content.pages;
			})
			.then(pages => {
				let cards = '';
				let count = 0;
				cards += '<section>';
				for (const [key, value] of Object.entries(pages)) {
					count = parseInt(key);
					cards += '<article class="card" style="background: #eee;">';
					cards += '<h4 class="title is-5"><a href="';
					cards += value.url;
					cards += '">';
					cards += value.title;
					cards += '</a></h4>';
					cards += '<p class="is-size-7">';
					cards += value.summary;
					cards += '</p>';
					cards += '<br>\n';
					cards += '<a class="button is-small is-info is-rounded" href="';
					cards += value.url;
					cards += '">Quick Read</a>';
					cards += '</article>';
					if ((count + 1) % this.cards_per_row == 0) {
						cards += '</section><section>';
					}
				}
				cards += '</section>';
				return html`
      <div>
      <style>
        section {display: flex; flex-flow: row wrap}
        [style*="--c:"], section>section, aside, article {flex:var(--c,1); margin: 16px;}
        article {background: #eee; border-radius: 8px;; padding: 1em; box-shadow: 0px 1px 0px rgba(0,0,0,0.3)}
        [style*="--c:"]:first-child, section>section:first-child, article:first-child {margin-left:0}
        [style*="--c:"]:last-child, section>section:last-child, article:last-child {margin-right:0}
        article a {
          color: black;
        }
      </style>
        ${unsafeHTML(cards)}
      </div>
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

customElements.define('yax-infocards', YaxInfocards);
