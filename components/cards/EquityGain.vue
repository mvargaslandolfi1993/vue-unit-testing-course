<template>
    <b-card
        class="custom-card border-radius-05 border-0 custom-card-shadow h-auto"
        no-body
    >
        <b-card-body class="d-flex flex-column" style="padding: 20px; flex: 1">
            <b-card-sub-title
                sub-title-text-variant="primary"
                class="font-weight-600 font-size-14"
                style="margin-bottom: 24px"
            >
                <b-img src="/icons/home-equity.svg"></b-img> Home Equity Gains
            </b-card-sub-title>

            <div class="position-relative h-100 d-flex flex-column">
                <div class="position-absolute w-100 h-100">
                    <b-img
                        src="/images/overlay.png"
                        fluid-grow
                        style="height: inherit"
                    ></b-img>
                </div>

                <div
                    class="h-100 d-flex flex-column justify-content-between"
                    style="z-index: 1"
                >
                    <b-card-text
                        class="text-muted font-size-14 font-weight-500"
                        style="margin-bottom: 24px"
                        id="second-text"
                    >
                        Add your Property Value to discover your Home Equity Gain
                    </b-card-text>

                    <div>
                        <b-button
                            style="background: #fff"
                            class="font-weight-600 font-size-14 text-primary border-secondary"
                            @click="redirect"
                            id="bar"
                        >
                            Add Property Value
                        </b-button>
                    </div>
                </div>
            </div>
            <div id="my-prop-id">
                <p>{{ getName }}</p>
            </div>
        </b-card-body>
    </b-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        name: {
            type: String,
        },
    },

    computed: {
        getName() {
            return this.name ? this.name : "Guest";
        },
    },

    methods: {
        redirect() {
            this.$router.push("/calculator/test-2");
        },
    },
});
</script>

<style lang="scss">
.btn {
    padding: 8px 12px;
}
</style>
