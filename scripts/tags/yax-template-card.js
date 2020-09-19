import { LitElement, html } from 'https://jspm.dev/lit-element@2';

export class YaxTemplateCard extends LitElement {

  constructor() {
    super();
    this.template_id = 'yax-template-new';
    this.author = 'Yax team';
    this.template_title = 'Coming Soon';
    this.description = 'New template in development.';
    this.template_img = '/assets/images/yax-template-demo.png';
    this.author_img = '/assets/images/danielkehoe.jpg';
  }

  static get properties() {
    return {
      template_id: { type: String },
      author: { type: String },
      template_title: { type: String },
      description: { type: String },
      template_img: { type: String },
      author_img: { type: String }
    };
  }

  createRenderRoot() {
    return this;
  }

  _showModal(e) {
    document.getElementById('modal-card').classList.add('is-active');
    document.getElementById('templateId').value = this.template_id;
  }

  render() {
    return html`
      <div class="card is-shady" style="max-width:368px;">
        <div class="card-image">
          <figure class="image" style="max-width:368px;">
            <img src="${this.template_img}" alt="">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h4>${this.template_title}</h4>
            <p>${this.description}</p>
          </div>
          <footer class="card-footer" style="border-top:0;">
            <div class="card-footer-item" style="border-right:0;">
              <span class="button is-link" @click="${this._showModal}">Select</span>
            </div>
            <div class="card-footer-item" style="display: block; text-align: center;">
              <figure class="image is-48x48" style="margin-left: auto; margin-right: auto;">
                <img src="${this.author_img}" alt="">
              </figure>
              <p class="title is-7 has-text-grey">created by<br/>${this.author}</p>
            </div>
          </footer>
        </div>
      </div>
    `;
  }
}
customElements.define('yax-template-card', YaxTemplateCard);
