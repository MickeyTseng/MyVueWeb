<template>
  <button @click="btnClickEvent">
    <slot name="icon"> </slot>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      default: "預設文字"
    },
    msg: {
      default: "預設彈出文字"
    }
  },
  methods: {
    // 绑定事件的關鍵代碼
    btnClickEvent: function() {
      this.$emit("btnClickEvent");
    }
  }
};
</script>
