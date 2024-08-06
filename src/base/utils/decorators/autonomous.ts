// prettier-ignore
export abstract class CustomElement extends HTMLElement {
  static get observedAttributes(): string[] {
    return []
  }

  connectedCallback?(): void
  attributeChangedCallback?(
    name: string, prev?: string, next?: string
  ): void
  disconnectedCallback?(): void
}

export const autonomous = (tag: `${string}-${string}`) => {
  return <T extends CustomElementConstructor>(target: T) => {
    customElements.define(tag, target)
  }
}
