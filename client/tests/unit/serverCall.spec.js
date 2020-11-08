import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Example test', () => {
    it("Checks if h1 is blank", () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.find("h1").text()).toBe("");
    })
});