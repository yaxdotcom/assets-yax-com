import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2.4.0';

export class YaxSubscriptionOffer extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
      <section id="ad">
      <div class="container has-text-centered py-4">
        <div class="columns is-centered">
          <div class="column pricing-plan has-background-link-light" style="max-width: 270px;">
            <div class="title has-text-weight-bold has-background-white">Stackless.</div>
            <div class="has-background-link-light">
              <p class="is-size-7 m-2 has-text-weight-medium">
              Don't miss out on a new thing. Go to <span class="has-text-weight-semibold"><a href="https://stackless.community/">stackless.community</a></span> and get the newsletter.
              </p>
            </div>
            <div class="">
              <a class="button is-rounded is-inverted has-text-weight-semibold mt-4" href="https://stackless.community/">Get the newsletter</a>
            </div>
          </div>
        </div>
      </div>
      </section>
    `;
	}
}

customElements.define('yax-subscription-offer', YaxSubscriptionOffer);
