// src/custom-elements.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      's-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: string;
        size?: string;
        fullWidth?: boolean;
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };
      's-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        value?: string;
        placeholder?: string;
        disabled?: boolean;
      };
    }
  }
  