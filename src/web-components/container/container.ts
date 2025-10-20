"use client";

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("spk-container")
export class SpkContainer extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: #aaf;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = "World";

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
