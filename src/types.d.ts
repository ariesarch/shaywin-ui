declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Declare your custom elements here
      's-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      's-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}