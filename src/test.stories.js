import VButton from "./Button";

export default {
  title: "Sandbox"
};

export const demo = () => ({
  components: { VButton },
  template: `<v-button>
    <template slot="icon">:)</template>
    Vue Storybook sandbox
  </v-button>`
});
