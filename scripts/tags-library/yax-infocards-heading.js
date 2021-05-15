import { LitElement, html } from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.1-VBzsFNL5Th0HrFTVPQSz/mode=imports/optimized/lit.js';
import { until } from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.1-VBzsFNL5Th0HrFTVPQSz/mode=imports/optimized/lit/directives/until.js';
import { unsafeHTML } from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.1-VBzsFNL5Th0HrFTVPQSz/mode=imports/optimized/lit/directives/unsafe-html.js';

export class YaxInfocardsHeading extends LitElement {
	createRenderRoot() {
		return this;
	}

	getFilename() {
		let filename = window.location.href
			.split('/')
			.pop()
			.replace('.html', '');
		if (filename == '') filename = 'index';
		return filename;
	}

	load() {
		return fetch('../manifest.json')
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
				let filename = this.getFilename();
				let heading = '';
				let subheading = '';
				for (const [key, value] of Object.entries(pages)) {
					if (value.url.includes(filename)) {
						heading = value.title;
						subheading = value.summary;
						break;
					}
				}
				return html`
        <section class="hero has-background-white-ter">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-capitalized">${heading}</h1>
              <p><strong>${subheading}</strong></p>
            </div>
          </div>
        </section>
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

customElements.define('yax-infocards-heading', YaxInfocardsHeading);
