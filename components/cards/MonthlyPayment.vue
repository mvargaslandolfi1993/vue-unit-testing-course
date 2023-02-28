<template>
    <b-card
        class="custom-card border-radius-05 border-0 custom-card-shadow h-auto"
        no-body
    >
        <b-card-body
            class="d-flex flex-column"
            style="
                padding-inline: 24px;
                padding-bottom: 24px;
                padding-top: 48px;
                flex: 1;
            "
        >
            <b-img
                src="/images/bg-monthly-payment.png"
                class="position-absolute h-100"
                style="top: 0; left: 0"
                fluid-grow
            ></b-img>

            <div class="text-center" style="z-index: 1">
                <h1 id="price_title" class="mb-3 font-weight-bolder" style="color: #fff">
                    ${{ price }} * USD
                </h1>

                <p
                    class="font-size-18 text-light-dark-purp"
                    style="margin-bottom: 24px"
                    id="percent_title"
                >
                    Montly payment {{ percent }}% APR
                </p>

                <div>
                    <b-row no-gutters>
                        <b-col class="mr-2">
                            <b-button
                                style="background: #58ff9d"
                                class="font-weight-600 font-size-14 text-primary"
                                block
                            >
                                Save
                            </b-button>
                        </b-col>
                        <b-col class="ml-2">
                            <b-button
                                style="background: transparent"
                                class="font-weight-600 font-size-14 text-secondary border-secondary"
                                block
                            >
                                Share
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-card-body>
    </b-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        price: {
            type: Number,
            default: 0,
        },
        percent: {
            type: Number,
            default: 0,
        },
    },
});
</script>
