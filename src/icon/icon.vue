<!-- <template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script setup lang="ts">
    import "../assets/js/iconfont.js"
    import { computed } from "vue";
    const props = defineProps({
        name:{
            type:String,
            default:''
        }
    })
    const iconName = computed(()=>{
        return `#icon-${props.name}`
    })
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style> -->
<template>
    <i class="i" :class="[`${name}`]"></i>
</template>
  
<script lang="ts">
export default {
    name: 'skyicon',
    props: {
        name: {
            type: String,
            default: ''
        },
    },
};
</script>

<style scoped lang="scss">
.sky-icon--right{
    margin-left:5px
}

</style>
