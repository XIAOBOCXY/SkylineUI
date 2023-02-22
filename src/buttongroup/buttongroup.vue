<template>
    <div class="sky-button-group">
        <slot></slot>
    </div>
</template>


<script lang="ts">
    export default {
      name: 'sky-button-group',
    };
</script>

<style scoped lang="scss">
.sky-button-group{
    display: inline-block;
    padding: 5px;
}
.sky-button-group :not(:first-child):not(:last-child){
    border-radius: 0%;
    border-right-color: rgba(rgb(246, 235, 235), 0.5);
    border-left-color: rgba(rgb(246, 235, 235), 0.5);
    margin: 0;
}
.sky-button-group :first-child{
    border-top-right-radius:0%;
    border-bottom-right-radius:0%;
    border-right-color: rgba(rgb(246, 235, 235), 0.5);
    border-left-color: rgba(rgb(246, 235, 235), 0.5);
    margin: 0;
}
.sky-button-group :last-child{
    border-top-left-radius: 0%;
    border-bottom-left-radius:0%;
    border-right-color: rgba(rgb(246, 235, 235), 0.5);
    border-left-color: rgba(rgb(246, 235, 235), 0.5);
    margin: 0;
}
//按钮之间有空隙
.sky-button-group :not(:last-child) {
    margin-right: -1px;
}
</style>