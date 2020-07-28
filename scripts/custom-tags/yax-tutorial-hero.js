// /scripts/custom-tags/yax-tutorial-hero.js file

import { LitElement, html } from 'https://jspm.dev/lit-element';
import { until } from 'https://jspm.dev/lit-html/directives/until.js';

export class YaxTutorialHero extends LitElement {
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
          let level_color = 'is-success'
          switch (tutorial.level) {
            case 'advanced':
              level_color = 'is-warning'
          }
          return html`
          <section class="hero has-background-white-ter">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">${tutorial.title}</h1>
              </div>
              <div class="field is-grouped is-grouped-multiline is-grouped-centered mt-5">
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag is-dark">audience</span>
                    <span class="tag is-info">${tutorial.audience}</span>
                  </div>
                </div>

                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag is-dark">level</span>
                    <span class="tag ${level_color}">${tutorial.level}</span>
                  </div>
                </div>

                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag is-dark">topic</span>
                    <span class="tag is-primary">${tutorial.topic}</span>
                  </div>
                </div>

                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag is-dark">subtopic</span>
                    <span class="tag is-primary">${tutorial.subtopic}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          `;
        })
        .catch(error => {
          console.error('Fetch failure:', error);
          return html`<h4>Error</h4>`;
        }),
      html`<h4>Loading</h4>`
    )}
  `;
  }
}

customElements.define('yax-tutorial-hero', YaxTutorialHero);