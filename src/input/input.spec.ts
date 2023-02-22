import { describe,expect,it,test } from "vitest";
import { mount } from "@vue/test-utils";
import skyInput from './input.vue'

describe('skyInput Test',()=>{
    it("should show placeholder text",()=>{
        const demoInput = mount(skyInput,{
            props:{
                placeholder:'please input...'
            }
        })
        expect(demoInput.props()).toContain('please input...')
    })
})