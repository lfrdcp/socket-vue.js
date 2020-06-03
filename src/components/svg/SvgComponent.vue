<template>
  <svg width="100%" height="100%">
    <defs>
      <pattern
        id="puzzle"
        ref="puzzle"
        x="0"
        y="0"
        width="192"
        height="192"
        patternUnits="userSpaceOnUse"
      >
        <path :d="content" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#puzzle)" />
  </svg>
</template>

<script>
export default {
  name: 'SvgComponent',

  props: {
    content: String,
  },
};
</script>
