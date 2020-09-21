import { LitElement, html } from 'https://jspm.dev/lit-element@2';

export class YaxTemplateModal extends LitElement {

  constructor() {
    super();
    this.GITHUB_CLIENT_ID = '6fdfd2e72ae4345b0361';
    this.encoded_state = '';
  }

  static get properties() {
    return {
      GITHUB_CLIENT_ID: { type: String },
      encoded_state: { type: String }
    };
  }

  createRenderRoot() {
    return this;
  }

  _beginDeploy(event) {
      // capture form data after 'deploy now' button is clicked
      event.preventDefault();
      const form = document.getElementById('github-oauth');
      let formData = new FormData(form);
      const data = {};
      for(let [name, value] of formData) {
        data[name] = value;
      }
      this.encoded_state = btoa(JSON.stringify(data));
      if (!('URLSearchParams' in window)) {
        alert('Your browser does not support JavaScript URLSearchParams. Please use a newer browser.');
      } else {
        this._confirm(data);
      }
  }

  _confirm(data) {
    // display the 'confirm button' after form data is captured
    const repo_name = document.getElementById('repo-name');
    repo_name.innerHTML = data['repository'];
    const deploy_button = document.getElementById('deploy-button');
    deploy_button.style.display = 'none';
    const confirmable = document.getElementsByClassName('confirmable');
    for (var i = 0; i < confirmable.length; i ++) {
      confirmable[i].style.display = 'block';
    }
  }

  // reset form after 'reset form' link is clicked
  _reset(event) {
    const form = document.getElementById('github-oauth');
    form.reset();
    const deploy_button = document.getElementById('deploy-button');
    deploy_button.style.display = 'block';
    const confirmable = document.getElementsByClassName('confirmable');
    for (var i = 0; i < confirmable.length; i ++) {
      confirmable[i].style.display = 'none';
    }
  }

  _deploy(event) {
    // Request GitHub user authentication
    // with form data hidden in a 'state' query parameter
    // and display pageloader after 'confirm' button is clicked
    event.preventDefault();
    const spinner = document.getElementById('spinner');
    spinner.classList.add('is-active');
    // URL for GitHub authentication containing form data hidden in a 'state' query parameter
    const url = new URL('https://github.com/login/oauth/authorize');
    url.searchParams.set('client_id', this.GITHUB_CLIENT_ID);
    url.searchParams.set('scope', 'public_repo');
    url.searchParams.set('state', this.encoded_state);
    url.searchParams.set(
      'redirect_uri',
      'https://api.yax.com/api/deploy.rb'
    );
    window.open(url, "_self");
  }

  render() {
    return html`
      <div id="modal-card" class="modal modal-fx-3dSlit">
        <div class="modal-background"></div>
        <div class="modal-content is-tiny">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img id="templateImage" src="https://assets.yax.com/images/templates/yax-template-new.png" alt="Yax template">
              </figure>
            </div>
            <div class="card-content">

              <form id="github-oauth" class="form-horizontal" action="#" method="POST">

                <!-- Template ID-->
                <input type="hidden" id="templateId" name="templateId" value="yax-template-demo">

                <fieldset>

                  <!-- Radio buttons-->
                  <div class="field">
                    <label class="label">GitHub</label>
                    <p class="help">We'll store your website files on <a href="https://github.com/">GitHub</a>.</p>
                    <div>
                      <input class="is-checkradio is-small" id="github-account-yes" type="radio" name="github-account" checked="checked">
                      <label for="github-account-yes">I have a GitHub account</label>
                    </div>
                    <div>
                      <input class="is-checkradio is-small" id="github-account-no" type="radio" name="github-account">
                      <label for="github-account-no">I'll create a GitHub account</label>
                    </div>

                  </div>

                  <!-- Text input-->
                  <div class="field">
                    <label class="label" for="repository">Project name</label>
                    <div class="control">
                      <input id="repository" name="repository" type="text" placeholder="my-website" class="input is-small" required="">
                      <p class="help">A name for a GitHub repository for your website files.</p>
                    </div>
                  </div>

                  <!-- Text input-->
                  <div class="field">
                    <label class="label" for="title">Website title</label>
                    <div class="control">
                      <input id="title" name="title" type="text" placeholder="My.com | My Website" class="input is-small">
                      <p class="help">A title you'd like to see in search results and the browser tab.</p>
                    </div>
                  </div>

                  <!-- Text input-->
                  <div class="field">
                    <label class="label" for="description">Describe your website</label>
                    <div class="control">
                      <input id="description" name="description" type="text" placeholder="One line description (with some keywords)." class="input is-small">
                      <p class="help">A description you'd like to see in search results.</p>
                    </div>
                  </div>

                  <!-- Deploy Button -->
                  <div class="field">
                    <label class="label" for="deploybutton"></label>
                    <div class="control">
                      <button @click="${e => this._beginDeploy(e)}" id="deploy-button" name="deploy-button" class="button is-info" style="display:block">Deploy Now</button>
                      <div class="confirmable" style="display:none">
                        <a @click="${e => this._deploy(e)}" id="confirm-button" name="confirm-button" class="button is-success" href="#">Confirm</a>
                      </div>
                    </div>
                  </div>

                  <!-- Confirm Button -->
                  <div class="field">
                    <div class="confirmable" style="display:none">
                      <p class="help">Click "Confirm" or <a @click="${e => this._reset(e)}" href="#" id="reset-link">reset form</a>. Yax will create a website from this template, storing the files in your GitHub account in a repository named <span id="repo-name">repo</span>. We won't access any user information or request your email address; you'll only grant permission to create a repo.</p>
                    </div>
                  </div>
                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('yax-template-modal', YaxTemplateModal);
