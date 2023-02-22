<template>
    <div>
        <sky-input-number 
            placeholder="请输入..." 
            v-model="val"
            maxlength="10"
            show-word-limit
        ></sky-input-number>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const val = ref('')
</script>

<style scoped>

</style>