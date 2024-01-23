import { h } from '@stencil/core';

const SvgHelp = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.965-12.435V9.5a1.5 1.5 0 0 0-1.5-1.5c-.654 0-1.294.417-1.5 1H9a3.5 3.5 0 0 1 6.965.5C15.965 11.263 15 13 13 13v1h-2v-.5c0-.378 0-.736.04-1.056C11.15 11.59 11.548 11 13 11c.967 0 .966-.792.965-1.435ZM13 16v2h-2v-2h2Z"
      />
    </svg>
  );
};
export default SvgHelp;
