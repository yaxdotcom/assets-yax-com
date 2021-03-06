import { LitElement, html } from 'https://jspm.dev/lit@2.0.0-rc.2';

export class YaxSubscriptionOffer extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
      <aside class="mt-4 container has-text-centered" id="ad">
      <div class="columns is-centered">
        <div class="column card has-background-link-light" style="max-width: 270px;">
          <div class="card-content">
            <div class="title has-text-weight-bold has-background-white">Stackless.</div>
            <p class="is-size-7 m-2 has-text-weight-medium">
              Don't miss out on a new thing. Go to <span class="has-text-weight-semibold"><a @click="analytics.track('View Subscr Offer')" href="https://stackless.community/">stackless.community</a></span> and get the newsletter.
            </p>
            <a @click="analytics.track('View Subscr Offer')" class="button is-rounded is-inverted has-text-weight-semibold mt-4" href="https://stackless.community/">Get the newsletter</a>
          </div>
        </div>
      </div>
      </aside>
    `;
	}
}

customElements.define('yax-subscription-offer', YaxSubscriptionOffer);
