// /scripts/custom-tags/yax-tutorial-crumbs.js file

import { LitElement, html } from 'https://jspm.dev/lit-element@2.3.1';
import { until } from 'https://jspm.dev/lit-html@1.2.1/directives/until.js';

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
      return html`
        <nav class="breadcrumb">
          <ul>
            <li><a href="https://yax.com" style="padding-left: 0">Yax.com</a></li>
            <li><a href="https://tutorials.yax.com/learn/index.html">Tutorials</a></li>
            <li class="is-active"><a>${tutorial.group.charAt(0).toUpperCase() + tutorial.group.slice(1)}</a></li>
            <li class="is-active"><a>${tutorial.title}</a></li>
          </ul>
        </nav>
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
