// src/types.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      's-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: 'primary' | 'secondary' | 'outline';
        size?: 'sm' | 'md' | 'lg';
        disabled?: boolean;
        fullWidth?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };

      's-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        value?: string;
        placeholder?: string;
        disabled?: boolean;
      };
    }
  }
}

export {};
