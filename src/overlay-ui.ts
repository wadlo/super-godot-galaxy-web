import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('overlay-ui')
export class OverlayUI extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div class="test">
        Player 1
      </div>
    `;

  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      pointer-events: none;
      width: 100%;
      height: 100%;
      padding: 2rem;
      box-sizing: border-box;
      position: absolute;
      display: flex;
    }
    .test {
      pointer-events: auto;
      color: black;
      background-color: white;
      border-radius: 8px;
      width: 120px;
      height: 40px;
      padding: 10px;
      transition: background-color 0.3s, color 0.3s, left 0.3s;
      position: relative;
      left: 0px;
      user-select: none;
    }

    .test:hover {
      left: 10px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'overlay-ui': OverlayUI
  }
}
