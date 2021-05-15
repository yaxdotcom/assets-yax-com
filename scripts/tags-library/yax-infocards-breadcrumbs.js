import { LitElement, html } from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.1-VBzsFNL5Th0HrFTVPQSz/mode=imports/optimized/lit.js';

export class YaxInfocardsBreadcrumbs extends LitElement {
	createRenderRoot() {
		return this;
	}
	render() {
		return html`
      <nav class="breadcrumb">
        <ul>
          <li><a href="https://tutorials.yax.com" style="padding-left: 0">Tutorials.yax.com</a></li>
          <li><a href="/articles/index.html">Articles</a></li>
          <li><a href="/articles/build-websites-the-yax-way/index.html">Quick Reads About Stackless</a></li>
        </ul>
      </nav>
  `;
	}
}

customElements.define('yax-infocards-breadcrumbs', YaxInfocardsBreadcrumbs);
