import { createLocalVue, mount } from "@vue/test-utils";
import EquityGainComponent from "@/components/cards/EquityGain.vue";
import { BootstrapVue } from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

const mockRouter = {
    push: jest.fn(),
};

const createWrapper = (propsData, data) => mount(EquityGainComponent, { 
    propsData,
    localVue,
    mocks: {
        $router: mockRouter,
    },
})

const wrapper = createWrapper();

describe("Test Component EquityGain.vue", () => {
    test.failing('it is not equal', () => {
        const byId = wrapper.find('#my-prop-id')
        expect(wrapper.vm.name).toContain("Miguel");
    });

    test("Equity gain component should contain string called Home Equity Gain", () => {
        // Assert the rendered text of the component
        expect(wrapper.find('#second-text').text()).toBe(
            `Add your Property Value to discover your Home Equity Gain`
        );

        expect(wrapper.text()).toContain("Add Property Value");
        
        expect(wrapper.text()).toContain("Home Equity Gain");
    });

    it("Add Property Value button should redirect to home", () => {
        const button = wrapper.find("button");
        button.trigger("click");
        expect(mockRouter.push).toHaveBeenCalledTimes(1);
        expect(mockRouter.push).toHaveBeenCalledWith("/calculator/test-2");
    });

    it('Root Card component has the .custom-card class', () => {
        expect(wrapper.find('.custom-card').exists()).toBe(true)
    })

    it('Exist element with id bar', () => {
        const byId = wrapper.find('#bar')
        expect(byId.element.id).toBe('bar')
    })

    it('Prop name should be undefined', () => {
        expect(wrapper.props().name).toBeUndefined();
    })

    it('Prop render name should contain text Guest', () => {
        const byId = wrapper.find('#my-prop-id')
        expect(byId.text()).toContain("Guest");
    })

    test.failing('it is not equal', () => {
        const byId = wrapper.find('#my-prop-id')
        expect(wrapper.vm.name).toContain("Miguel");
    });

    it("Set props and expect render messsage", async () => {
        await wrapper.setProps({ name: 'Miguel' })
        const byId = wrapper.find('#my-prop-id')
        expect(wrapper.vm.name).toContain("Miguel");
        expect(byId.text()).toContain("Miguel");
    })

    it('verify that button has style background', () => {
        const button = wrapper.find('#bar')
        expect(button.element.style.getPropertyValue('background')).toBe('rgb(255, 255, 255)');
    })

    test('img src attribute is', () => {
        expect(wrapper.find("img").attributes("src")).toBe("/icons/home-equity.svg")
    })
});
