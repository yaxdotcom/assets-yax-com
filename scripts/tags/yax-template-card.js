import { LitElement, html } from 'https://jspm.dev/lit-element@2';
import { unsafeHTML } from 'https://jspm.dev/lit-html@1/directives/unsafe-html.js';

export class YaxTemplateCard extends LitElement {

  constructor() {
    super();
    this.template_id = 'yaxt-new';
    this.author = '';
    this.template_title = 'Coming Soon';
    this.description = 'New template in development.';
    this.template_img = 'https://assets.yax.com/images/templates/yaxt-new.png';
    this.author_img = '';
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
    document.getElementById('templateImage').src = this.template_img;
  }

  _authorName() {
    let name = '';
    if (this.author !== null && this.author !== '') {
      console.log("name provided");
      name = this.author
    } else {
      console.log("name NOT provided");
      name = 'the Yax team';
    }
    return name;
  }

  _authorImage() {
    let image = '';
    if (this.author_img !== null && this.author_img !== '') {
      console.log("image provided");
      image = '<img src="';
      image += this.author_img;
      image += '" alt="">';
      console.log("image: " + image);
    } else {
      console.log("image NOT provided");
      image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.13 159.56"><defs><style>.cls-1{opacity:0.5;}.cls-2{fill:none;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><g class="cls-1"><path d="M138.6,55.5,135,63.17l-3.18-8h-6.21L131,67v.26L124.3,79.46h0l-.14.26,6.73-.27.43-.87,3.27-6.38,2.85,6.66h0l.21.49h0l0,.06c.48,0,6.4.36,6.4.36l-5.56-12.09,6.15-11.46Z"/><path d="M87.63,59.2l0,.11-3.49,9.8-6.79-7.54-7.84,2.07,12.09,12,2,9.86,1.89-.42h0L90.94,84,90,79.33,89,74.2,93.61,63l2-4.87.13-.29h0l.06-.13C93.06,58.15,90.34,58.65,87.63,59.2Z"/><path d="M114.18,60.25h0l-1.86-4.6c-3.13.23-7.85.81-7.85.81h0l-3,10.45h0l-2.59,8.85-2.13,7.18s4.7-.79,7.3-1.16h0l1.36-5.56,7.88-.51,1.58,4.75,7.28-.68-1-2.36Zm-7.56,10.6,2-8.9,2.9,8.58Z"/></g><path d="M174.85,119.42a7,7,0,0,0,.79-.45C175.38,119.12,175.12,119.29,174.85,119.42Z"/><polygon points="149.98 75.36 149.98 75.36 149.98 75.36 149.98 75.36"/><polygon points="19.79 118.57 19.85 118.59 19.79 118.57 19.79 118.57"/><path d="M29.38,101.8l0,0,0,0Z"/><path d="M68.26,5.08a.35.35,0,0,0,0-.22Z"/><path d="M83.45,5.72c0-.11,0-.2,0-.31A.58.58,0,0,0,83.45,5.72Z"/><path d="M72.42,0l0,0,0,0Z"/><path d="M68.31,5.86a.35.35,0,0,1,0,.22,11.87,11.87,0,0,1,1-.81,13.38,13.38,0,0,1,3-1.72,8.83,8.83,0,0,1,6.74,0,11.51,11.51,0,0,1,1.18.56l.14.08c.37.21.72.43,1,.65l.07,0a10.49,10.49,0,0,1,.9.73l.25.23a9.3,9.3,0,0,1,.84.89.58.58,0,0,1,0-.31,7.53,7.53,0,0,0-.2-1l.25.26a3.88,3.88,0,0,0-.26-.3c0-.12-.06-.25-.1-.37a6.12,6.12,0,0,0-1.7-2.61,11.48,11.48,0,0,0-1.5-1A7.28,7.28,0,0,0,79,1a8.77,8.77,0,0,0-6-.25,7.91,7.91,0,0,0-2.36,1.38,7.35,7.35,0,0,0-2.08,2.6c-.24.19-.38.32-.38.32s.24-.2.37-.3a4.35,4.35,0,0,0-.32,1.08Z"/><path d="M67,15.88l.23-.17-.22.15Z"/><polygon points="29.07 102.05 29.07 102.05 29.07 102.05 29.07 102.05"/><path d="M35.69,92.81v0l-.36,1.14C35.58,93.24,35.69,92.81,35.69,92.81Z"/><path d="M41.59,61.81a59.66,59.66,0,0,1,11-26.75,65.53,65.53,0,0,1,14-13.9c.49-.36,1-.7,1.52-1,1.2-.8,2.56-1.64,3.9-2.45,3.61-2.18,7.06-4.11,7.06-4.11A55.83,55.83,0,0,0,66,17.88a35.57,35.57,0,0,0-7.23,5c.33-.33.66-.67,1-1a15.66,15.66,0,0,0-1.42,1.4l-.23.24-.85.89c-.95,1-1.87,2.07-2.75,3.15a59,59,0,0,0-12.2,24.89c-1.29,6-2,12.19-3,18.26-.75,4.41-1.56,8.82-2.62,13.18C36.23,86,35.65,88,35,90h0a57.29,57.29,0,0,1-2,6c-.09.18-2.1,4.53-3.65,5.91l-.18.13,0,.06.14-.12.2-.15,0,0,.05,0,0,0a15.77,15.77,0,0,0,5.91-7.85c.13-.38.25-.76.37-1.14s.29-1,.42-1.46C38.75,81.69,40.08,71.67,41.59,61.81Z"/><path d="M46.84,121.8a.77.77,0,0,0,.32-.07Z"/><path d="M185.7,115.9c-1.06-2.91-3.54-5.27-5.74-7.33-3.13-2.91-6.51-5.55-9.83-8.22-1.81-1.46-3.62-2.93-5.39-4.43a44,44,0,0,0-3.88-3.21c-4.78-3.2-10.84-4.28-16.46-4.85a123.91,123.91,0,0,0-30.83,1.26c-2.12.33-4.18.93-6.27,1.43q-7.47,1.77-15,3.46-12.81,2.89-25.68,5.44c-11.78,2.32-23.62,4.41-35.54,5.79a136.9,136.9,0,0,1-18.87,1.18,39.63,39.63,0,0,1-4.75-.34,5.64,5.64,0,0,1-2.71-.77A6.93,6.93,0,0,1,3,102.56a28.23,28.23,0,0,1-1.62-5.25,53.18,53.18,0,0,1-1.1-7.53C.26,89,.21,88.28.18,87.54l0-.84c.06-1.6.12-3.2.26-4.8A94.28,94.28,0,0,1,5.78,58.13,99.7,99.7,0,0,1,19.29,32.44C26.55,22.76,37.51,17,49.11,14.24s23.75-2.84,35.56-1.71a177.37,177.37,0,0,1,27,4.74,49,49,0,0,1,9.39,3.1A48.64,48.64,0,0,1,139.2,35.29a37,37,0,0,1,3.17,6.05A135.45,135.45,0,0,1,148,62.85c.25,1.62.49,3.24.72,4.87.27,1.94.55,3.88.79,5.84s.39,4.3.52,6.54v.23a.49.49,0,0,0,0-.12c0,.13,0,.27,0,.41,0,1.19.08,2.38.13,3.58,0,.32,0-.41,0-.25,0,0,.06-1.29,0-3.7,0-.29,0-.58,0-.87,0-.56,0-1.12-.07-1.69,0-.23,0-.47,0-.7a6.11,6.11,0,0,0,0-1.17c0-1-.09-1.94-.17-2.89-.38-4.81-1.1-9.6-1.81-14.36C146.86,50.36,146,42,142,34.6a44.26,44.26,0,0,0-12-13.74A41.89,41.89,0,0,0,117,13.74,168.57,168.57,0,0,0,97.52,9.26,143.92,143.92,0,0,0,63.85,7.11C52.05,7.87,40,10.6,30,17.29A46.52,46.52,0,0,0,17,30.82,108.77,108.77,0,0,0,4.3,57.52,91.38,91.38,0,0,0,.18,80.41,91.32,91.32,0,0,0,1,99.89c.54,3.21,1.23,7.06,3.22,9.74A3.67,3.67,0,0,0,6.91,111a53.93,53.93,0,0,0,11.36.34,237.57,237.57,0,0,0,25.09-2.75c14.69-2.26,29.27-5.21,43.78-8.41q7.22-1.59,14.4-3.27c3.73-.86,7.45-2,11.21-2.65,3.23-.59,6.53-.91,9.79-1.21a125,125,0,0,1,18.15-.46c5.92.32,12.14,1.09,17.55,3.66,2.92,1.39,5.14,3.55,7.6,5.6,3.44,2.88,7,5.62,10.44,8.51a44.75,44.75,0,0,1,7.91,7.83,13.67,13.67,0,0,1,1.21,2c-.11.18-.21.35-.33.51-2.06,2.7-5.95,4.1-9.1,4.94a82.82,82.82,0,0,1-12.63,1.91,97,97,0,0,0-14.28,2.32,87,87,0,0,0-12.3,4.48c-7.24,3.11-14.31,6.59-21.3,10.2a101.62,101.62,0,0,0-9.44,5,27.59,27.59,0,0,1-14.07,5c-7.92.35-15.26-3.82-22.13-7.26-6.36-3.18-12.61-6.57-18.8-10-2.09-1.17-4.24-2.28-6.24-3.6l-.05,0-3.33-2-.07,0h0c-5.2-3.15-15.1-9.12-21.47-13l-.06,0h0l.06,0L13.93,115a25.19,25.19,0,0,0,3.52,4l.76.73a76.3,76.3,0,0,0,12.1,9l3.41,2.31,10.78,7.36c2.24,1.53,4.71,2.76,7.07,4.08,6.31,3.54,12.69,7,19.17,10.2,7,3.48,14.34,7.47,22.42,6.71a28.29,28.29,0,0,0,12.92-4.91c.88-.57,1.85-1,2.76-1.51,2.46-1.32,4.94-2.62,7.42-3.9,7.11-3.65,14.3-7.17,21.66-10.27a77.45,77.45,0,0,1,12.7-4.37,118.94,118.94,0,0,1,14.31-2.11,62.89,62.89,0,0,0,12.2-2.08c2.91-.9,6.76-2.41,8.35-5.21a7.93,7.93,0,0,0,.62-4.06A15,15,0,0,0,185.7,115.9ZM150,75.36Z"/><path d="M174.8,119.44l0,0Z"/><path d="M162.69,121.92h-.14l-.63.06Z"/><path d="M162.55,121.91l.37,0-.42,0Z"/><path d="M163.9,121.76h0l-1,.12Z"/><path d="M176.52,117.62h0c-1,.51-2.38,1.2-3.82,1.85a34.41,34.41,0,0,1-8.75,2.27h0l-.76.09-1.84.15h0c-1.86.11-3.71.24-5.55.45h.07s-13.7.85-33.17,10.35h0a70.89,70.89,0,0,0-8,4.41c-.67.43-1.32.91-2,1.39h0c-11.71,8.57-20,6.18-21.34,5.71s-2.56-1.19-3.79-1.81c-2.67-1.36-5.28-2.85-7.84-4.41l0,0c-3.89-2.29-32.82-16.26-32.82-16.26l18.89,12.57c4.34,2.89,8.72,5.71,13.29,8.22a50.07,50.07,0,0,0,11.73,5.1,10.32,10.32,0,0,0,1.54.26h0a18.34,18.34,0,0,0,6.58-.26h0l.33-.08a24.34,24.34,0,0,0,3.71-1.13c.73-.27,1.51-.58,2.3-.94h0l0,0a25.88,25.88,0,0,0,2.44-1.28c.7-.38,1.45-.8,2.12-1.2l.27-.18a67.87,67.87,0,0,0,6.28-4.19c1.74-1.29,3.4-2.64,5.26-3.76,2.25-1.35,4.59-2.56,7-3.7q4.69-2.27,9.58-4.1c1.88-.71,3.77-1.37,5.68-2,2.18-.42,3.85-.76,5.1-1,3-.4,5.9-.51,8.89-.73h0s1.58-.08,2.94-.3h0l.39-.07h0l.51-.08,1.26-.21c1.5-.27,3.44-.64,4.77-1h0l.74-.2h0c.87-.23,1.74-.49,2-.59a24.57,24.57,0,0,0,4.35-1.5l0,0c.27-.13.53-.3.79-.45a13.16,13.16,0,0,0,2.45-2.17S177.47,117.14,176.52,117.62Z"/><polygon class="cls-2" points="107.77 71.36 112.7 71.04 109.8 62.46 107.77 71.36"/></g></g></svg>'
    }
    return image;
  }

  render() {
    return html`
      <div class="card is-shady" style="max-width:368px; min-height:313px;">
        <div class="card-image">
          <figure class="image" style="max-width:368px; min-height:313px;">
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
                ${unsafeHTML(this._authorImage())}
              </figure>
              <p class="title is-7 has-text-grey">created by<br/>${unsafeHTML(this._authorName())}</p>
            </div>
          </footer>
        </div>
      </div>
    `;
  }
}
customElements.define('yax-template-card', YaxTemplateCard);
