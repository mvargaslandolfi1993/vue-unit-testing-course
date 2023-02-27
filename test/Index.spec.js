import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import IndexPage from "@/pages/index.vue";
import { BootstrapVue } from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

const mockRouter = {
    push: jest.fn(),
};

const wrapper = mount(IndexPage, {
    localVue,
    mocks: {
        $router: mockRouter,
    },
    stubs: {
        NuxtLink: RouterLinkStub
    }
});

describe("Index.vue", () => {
    test("index", () => {
        expect(wrapper.text()).toContain("Explore");
    });

    test('first img src attribute is', () => {
        expect(wrapper.find("img").attributes("src")).toContain("/images/bg-index-mask.png")
    })

    it("Explore button should redirect to /calculator/step-2", () => {
        const button = wrapper.find("button");
        button.trigger("click");
        expect(mockRouter.push).toHaveBeenCalledTimes(1);
        expect(mockRouter.push).toHaveBeenCalledWith("/calculator/step-1");
    });
});
