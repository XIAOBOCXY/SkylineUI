<template>
    <div class="sky-input-number-wrap">
        <sky-input id="el" type="number" class="sky-input-number"
        center v-model="inputValue" :class="[disabledClass]"
        :disabled="props.disabled"
        :size="props.size" 
        :name="props.name"
        :placeholder="props.placeholder"
        :label="props.label"
        @change="stepStrictlyEvent"
        @blur="blurEvent"
        @focus="focusEvent"
        >
            <!-- 减号 -->
            <template v-slot:prepend v-if="props.controls">
                <sky-button class="sky-input-number__decrease input-number-btn"
                :class="{'is-disabled':decreaseClass}" 
                @click="handleClick('decrease')"
                :disabled="props.disabled"
                >
                        <sky-icon class="sky-icon-minus1"></sky-icon>
                </sky-button>
            </template>
            <!-- 加号 -->    
            <template v-slot:append v-if="props.controls">
                <sky-button class="sky-input-number__increase input-number-btn"
                @click="handleClick('increase')"
                :class="{'is-disabled':increaseClass}"
                :disabled="props.disabled">
                        <sky-icon class="sky-icon-add1"></sky-icon>
                </sky-button>
            </template>
        </sky-input>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'sky-input-number',
  }
</script>
<script setup lang="ts">
    import { computed,onMounted } from 'vue';
    const props = defineProps({
        modelValue:{
            type:[Number,String],
            default:''
        },
        step:{
            type:Number,
            default:1
        },
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        },
        disabled:{
            type:Boolean,
            default:false
        },
        precision:{
            type:Number,
            default:0
        },
        size:String,
        stepStrictly:{
            type:Boolean,
            default:false,
        },
        name:{
            type:String,
            default:''
        },
        placeholder:{
            type:String,
            default:''
        },
        label:{
            type:String,
            default:""
        },
        controls:{
            type:Boolean,
            default:true
        },
        onBlur:Function,
        onFocus:Function,
    })
    const emit = defineEmits(['update:modelValue','blur'])
    let inputValue = computed({
        get(){
            if(props.placeholder){
                return props.modelValue
            }
            return Number(props.modelValue).toFixed(props.precision)
        },
        set(newValue:any){
            newValue = 
                newValue >= props.max? 
                    props.max : (newValue<props.min? props.min:newValue)
            let precision_Value = Number(newValue).toFixed(props.precision)
            emit('update:modelValue',precision_Value)
        }
    })
    const handleClick = (type:String)=>{
        if(type === 'decrease'){
            inputValue.value = Number(inputValue.value) - props.step
        }
        if(type === 'increase'){
            inputValue.value = Number(inputValue.value) + props.step
        }
    }
    const decreaseClass = computed(()=>{
        return props.disabled || inputValue.value<=props.min
    })
    const increaseClass = computed(()=>{
        return props.disabled || inputValue.value>=props.max
    })
    const disabledClass = computed(()=>{
        return props.disabled?'is-disabled':''
    })
    const stepStrictlyEvent = ()=>{
        if(props.stepStrictly){
            inputValue.value = Math.round(Number(props.modelValue)/props.step)*props.step
        }
    }
    onMounted(()=>{
        stepStrictlyEvent()
    })
    const blurEvent = ()=>{
        if(props.onBlur){
            props.onBlur()
        }
    }
    const focusEvent = ()=>{
        if(props.onFocus){
            props.onFocus()
        }
    }
</script>

<style scoped lang="scss">
    .sky-input-number-wrap{
        width: 300px;
        // .sky-input-number__increase.is-disabled, .sky-input-number__decrease.is-disabled {
        //     color: #a8abb2;
        //     cursor: not-allowed;
        // }
        .input-number-btn{
            margin: 0;
            padding: 7px 20px;
            background-color: transparent;
            border: none;
        }
    }
    
</style>