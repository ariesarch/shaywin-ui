// src/index.ts

import SButton from './components/atoms/SButton.svelte';  // Import the Svelte component
import SInput from './components/atoms/SInput.svelte';    // Import the Svelte component

// Create a wrapper class to use Svelte component as a Custom Element
class SButtonElement extends HTMLElement {
  constructor() {
    super();
    const variant = this.getAttribute('variant');
    const validVariants: ("primary" | "secondary" | "outline")[] = ["primary", "secondary", "outline"];
    const selectedVariant = validVariants.includes(variant as "primary" | "secondary" | "outline") ? (variant as "primary" | "secondary" | "outline") : 'primary';

    const sizeAttribute = this.getAttribute('size');
const validSizes: ("sm" | "md" | "lg")[] = ["sm", "md", "lg"];
const selectedSize = validSizes.includes(sizeAttribute as "sm" | "md" | "lg") ? (sizeAttribute as "sm" | "md" | "lg") : 'md';

    const svelteComponent = new SButton({
      target: this,
      props: {
        variant: selectedVariant,
        size: selectedSize,
      },
    });
  }
}

class SInputElement extends HTMLElement {
  constructor() {
    super();

    // Get the value and placeholder from the attributes (these may also be null)
    const value = this.getAttribute('value') || '';
    const placeholder = this.getAttribute('placeholder') || '';

    // Create an instance of the Svelte component
    new SInput({
      target: this,  // Targeting the custom element itself
      props: {
        value,
        placeholder,
        disabled: this.hasAttribute('disabled'),
      },
    });
  }
}

// Register the components as custom elements (Web Components)
customElements.define('s-button', SButtonElement);
customElements.define('s-input', SInputElement);

// Export the components for use in other parts of your library or for direct use
export { default as SButton } from './components/atoms/SButton.svelte';
export { default as SInput } from './components/atoms/SInput.svelte';
// export * from './types';  