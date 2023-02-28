import { createLocalVue, mount } from "@vue/test-utils";
import MonthlyPayment from "@/components/cards/MonthlyPayment.vue";
import { BootstrapVue } from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

const mockRouter = {
    push: jest.fn(),
};

const createWrapper = propsData => mount(MonthlyPayment, { 
    propsData,
    localVue,
    mocks: {
        $router: mockRouter,
    },
})


describe("EquityGain.vue", () => {
    test.failing('monthly payment price prop is not a number', () => {
        const wrapper = createWrapper({price: "4.3"});
        expect(typeof wrapper.vm.price).toBe('number');
    });


    test.failing('monthly payment percent prop is not a number', () => {
        const wrapper = createWrapper({percent: [0]});
        expect(typeof wrapper.vm.percent).toBe('number');
    });

    test('monthly payment price default should be 0', () => {
        const wrapper = createWrapper();
        const price_title = wrapper.find('#price_title')
        expect(wrapper.vm.price).toEqual(0);
        expect(price_title.text()).toEqual("$0 * USD");
    })

    test('monthly payment price should be 10', () => {
        const wrapper = createWrapper({price: 10});
        const price_title = wrapper.find('#price_title')
        expect(wrapper.vm.price).toEqual(10);
        expect(price_title.text()).toEqual("$10 * USD");
    })

    test('monthly payment percent default should be 0', () => {
        const wrapper = createWrapper();
        const price_title = wrapper.find('#percent_title')
        expect(wrapper.vm.percent).toEqual(0);
        expect(price_title.text()).toEqual("Montly payment 0% APR");
    })

    test('monthly payment percent should be 4.3', () => {
        const wrapper = createWrapper({percent: 4.3});
        const price_title = wrapper.find('#percent_title')
        expect(wrapper.vm.percent).toEqual(4.3);
        expect(price_title.text()).toEqual("Montly payment 4.3% APR");
    })
});