<template>
  <button style="margin: 0.5rem">{{ label }}</button>
</template>

<script>
  export default {
    name: "PlwButton",
    data() {
      return {
        label: "Button Say Hi",
      };
    },
  };
</script>