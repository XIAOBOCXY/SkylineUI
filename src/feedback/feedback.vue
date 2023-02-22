<template>
    //进度条容器  skyProgress
    <div class="skyProgress">
        //进度
      <span class="skyProgress-fill" ref="fill" :style="[{'background-color':color}]"></span>
    </div>
  </template>   

  <script lang="ts">
  export default {
    name: "loading",
    props: {
      color: {
        type: String,
        default: "hsl(260, 90%, 70%)"
      },
      value: {
        type: [String, Number],
        default: 0
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

//样式
<style>
    .progress-bar {
        width: 280px;
        height: 40px;
        overflow: hidden;
        position: relative;
        border-radius: 40px;
        background-color: rgb(232, 232, 232);
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8), 
                    6px 2px 12px -2px rgba(0, 0, 0, 0.6);
    }

    .skyProgress-fill {
        display: block;
        width: 0;
        height: 100%;
        max-width: 100%;
        transition: 3s width ease-in-out;
  }

  .shyProgress-fill:after {
      display: block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      content: "";
      background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.4) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0.4) 75%,
        transparent 75%,
        transparent
      );
      background-size: 45px 45px;
      animation: loading-line 3s linear infinite;
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
