<template>
    <!-- 进度条容器  skyProgress -->
    <div class="skyProgress">
      <sky-span class="skyProgress-fill"  :style="[{'background-color':color}]"></sky-span>
    </div>
  </template>   

  <script lang="ts">
  export default {
    name: "sky-progress",
    props: {
      color: {
        type: String,
        default: "hsl(260, 90%, 70%)"
      },
      value: {
        type: [String, Number],
        default: false
      }
    },
    mounted() {
        setTimeout(()=>this.render())
    },
    methods: {
      render(){
          this.$refs.fill.style.width = this.value + "%";
      }
    },
  };
  </script>

<!-- 样式 -->
<style scoped lang="scss">
    .skyProgress {
      width: 280px;
      height: 40px;
      border-radius: 40px;
      overflow: hidden;
      position: relative;
      background-color: red;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8), 
                  6px 2px 12px -2px rgba(0, 0, 0, 0.6);
  .skyProgress-fill {
    display: block;
    width: 0;
    max-width: 100%;
    height: 100%;
    transition: 2s width ease-in-out;
  }
}
.skyProgress-fill {
&:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.3) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.3) 75%,
        transparent 75%,
        transparent
      );
      background-size: 45px 45px;
      animation: loading-line 2s linear infinite;
    }
}
@keyframes loading-line {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 45px 45px;
  }
}
</style>
