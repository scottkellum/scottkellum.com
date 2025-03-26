class ElSlides extends HTMLElement {
  constructor() {
    super()
    //Add ShadowDOM to Component
    this.attachShadow({ mode: "open" })
    //Add template to shadowDOM
    this.shadowRoot.innerHTML = `
      <slot></slot>
      <style>
        :host {
          display: block;
          position: relative;
          white-space: nowrap;
          overflow: auto;
          scroll-snap-type: x mandatory;
          margin-block: 1rem;
          width: calc(100% + (var(--margin) * 2));
          margin-left: calc(var(--margin) * -1);
          padding-inline: calc(var(--margin) + 0.125rem);
          box-sizing: border-box;
        }
        ::slotted(img) {
          display: inline-block;
          scroll-snap-align: center;
          margin: 0.25rem !important;
          width: 100% !important;
          max-width: calc(var(--width) - 0.75rem) !important;
        }
      </style>`
  }
}

customElements.define("el-slides", ElSlides)
