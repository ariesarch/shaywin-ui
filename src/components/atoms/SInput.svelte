<script lang="ts">
  export let type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' = 'text';
  export let value: string = '';
  export let placeholder: string = '';
  export let disabled: boolean = false;
  export let error: string = '';
  export let required: boolean = false;
  export let name: string = '';

  const baseStyles = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = type === 'number' ? target.valueAsNumber.toString() : target.value;
  }
</script>

<div class="grid w-full max-w-sm gap-1.5">
  {#if $$slots.label}
    <label
      for={name}
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      <slot name="label" />
    </label>
  {/if}
  
  <input
    {type}
    {name}
    value={value}
    on:input={handleInput}
    {placeholder}
    {disabled}
    {required}
    class={`${baseStyles} ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
    aria-invalid={!!error}
    aria-describedby={error ? `${name}-error` : undefined}
    {...$$restProps}
  />

  {#if error}
    <p class="text-sm text-red-500" id="{name}-error">{error}</p>
  {/if}
</div>
