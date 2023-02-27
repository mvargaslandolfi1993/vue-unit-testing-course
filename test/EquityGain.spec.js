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

// mount() returns a wrapped Vue component we can interact with
// pass the `localVue` to the mount options
// pass $router
const wrapper = mount(EquityGainComponent, {
    localVue,
    mocks: {
        $router: mockRouter,
    },
    // propsData: {
    //     name: 'Miguel'
    // }
});

describe("EquityGain.vue", () => {
    test("Equity gain component should contain string Home Equity Gain", () => {
        // Assert the rendered text of the component
        expect(wrapper.text()).toContain(
            "Add your Property Value to discover your"
        );

        expect(wrapper.text()).toContain("Add Property Value");
        
        expect(wrapper.text()).toContain("Home Equity Gain");
    });

    it("Add Property Value button should redirect to home", () => {
        const button = wrapper.find("button");
        button.trigger("click");
        expect(mockRouter.push).toHaveBeenCalledTimes(1);
        expect(mockRouter.push).toHaveBeenCalledWith("/");
    });

    it('Message component has the .custom-card class', () => {
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

    it('verify that button has style background', () => {
        const button = wrapper.find('#bar')
        expect(button.element.style.getPropertyValue('background')).toBe('rgb(255, 255, 255)');
    })

    test('img src attribute is', () => {
        expect(wrapper.find("img").attributes("src")).toBe("/icons/home-equity.svg")
    })
});
