declare global {
  namespace JSX {
    interface IntrinsicElements {
      's-button': {
        variant?: 'primary' | 'secondary' | 'outline';
        size?: 'sm' | 'md' | 'lg';
      };
      's-input': {
        value?: string;
        placeholder?: string;
        disabled?: boolean;
      };
    }
  }
}