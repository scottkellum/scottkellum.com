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
        }
        ::slotted(*) {
          display: inline-block;
          scroll-snap-align: center;
          margin: 0.25rem !important;
          width: 90% !important;
          max-width: 90% !important;
        }
      </style>`
  }
}

customElements.define("el-slides", ElSlides)
