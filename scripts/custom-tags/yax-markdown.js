// derived from https://github.com/GermanMtzmx/prism-markdown-element
// thank you to German Martinez Solis

import prismjs from 'https://jspm.dev/prismjs';
import commonmark from 'https://jspm.dev/commonmark';
import { LitElement, html } from 'https://jspm.dev/lit-element';
import { unsafeHTML } from 'https://jspm.dev/lit-html/directives/unsafe-html.js';

const ALLOWED_THEMES = ['coy', 'dark', 'funky', 'okaidia','solarizedlight', 'tomorrow', 'twilight'];

export class YaxMarkdown extends LitElement {
  static get properties() {
     return {
       mdsrc: String,
       markdown: String,
       safe: Boolean,
       theme: String,
       customtheme: String,
       __markdownRendered: String,
       __styles: String,
    }
  }
  /**
  * Set default values for component attributes
  * @property {Boolean} safe enable safe render for commonmark
  * @property {String} mdsrc markdown resource
  * @property {String} theme prismjs theme name
  * @property {String} customtheme prismjs theme url
  * @property {String} __styles template object that contain styles
  * @property {Strin} __markdownRendered property used to render markdown
  * @property {Object} __reader Instance of commonmark parser
  * @property {Object} __writer Instance of commonmark writer
  */
  constructor() {
   super();
   this.safe = true;
   this.mdsrc  = "";
   this.markdown = "";
   this.theme = "";
   this.customtheme = "";
   this.__styles = "";
   this.__markdownRendered = "";
   this.__reader = new commonmark.Parser();
   this.__writer = new commonmark.HtmlRenderer({safe: this.safe });
  }

  connectedCallback() {
    super.connectedCallback();
    const customtheme = this.getAttribute('customtheme');
    const theme = this.getAttribute('theme');
    if (theme === null && customtheme === null) {
      this.setAttribute('theme','default');
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
     switch(name) {
        case 'mdsrc':
          this.fetchMd(newValue).then(markdown => {
            this.setAttribute('markdown',markdown);
          }).catch(err => err);
          return;
        case 'markdown':
          this.__markdownRendered = this.parseMarkdown(newValue);
          return;
        case 'theme':
        case 'customtheme':
          let body = {};
          body[name] = newValue;
          this.fetchStyles(body).then(styles => {
            this.__styles = html`${unsafeHTML(styles)}`;
          });
          return;
        default:
          break;
     }
  }
  /**
  * @method fetchMd
  * @description method to fetch markdown from a url or path
  * @param {String} src markdown url
  * @return {Promise}
  */
  fetchMd(src) {
    let filename = window.location.href.split('/').pop().replace('.html', '');
    if (filename == '') filename = 'index';
    if (src == '') src = filename + '.md';
    if (!src.includes('.md')) { return; }
    return fetch(src).then(res => res.text()).then(markdown => markdown);
  }
  /**
  * @method fetchStyles
  * @description method to fetch styles from a url or path
  * @param {Object} config - config to fetch styles required
  * @param {String} config.url url with the style theme
  * @param {String} config.theme name of the prismjs theme
  * @return {Promise}
  */
  async fetchStyles({ customtheme, theme }) {
   const theme_file = (ALLOWED_THEMES.includes(theme)) ? `prism-${theme}.min.css` : 'prism.min.css';
   const resource = customtheme !== undefined ? customtheme : `https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/${theme_file}`;
   const fetchedStyles = await fetch(resource).then(async response => await response.text()).catch(e => '');
   return `<style>
    :host {
      display: block;
    }
    ${fetchedStyles}
    </style>`;
  }
  /**
  * @method parseMarkdown
  * @description parse markdown string to html content
  * @param {String} markdown string with markdown content
  * @return {Object} html template string
  */
  parseMarkdown(markdown) {
   return html`${unsafeHTML(this.__writer.render(this.__reader.parse(markdown)))}`;
  }

  updated() {
     Prism.highlightAllUnder(this.shadowRoot);
  }

  render() {
    return html`
      ${this.__styles}
      ${this.__markdownRendered}`
  }
}
customElements.define('yax-markdown', YaxMarkdown);
