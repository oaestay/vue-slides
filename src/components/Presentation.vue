<template>
  <div class="presentation eg-slideshow">
    <welcome />
    <wifi-password/>
    <slides-url />
    <vue />
    <fintual />

    <vue-guide />
    <vue-instance />
    <vue-component />
    <vue-templates />
    <vue-events />
    <component-example />
    <vue-component-registration />

    <vue-component-properties :steps="2" />
    <vue-custom-events :steps="2" />
    <vue-hierarchy-example />
    <vue-forms />
    <vue-v-model />
    <fintual-chart />
    <vue-custom-input />
    <fintual-modal />

    <vue-slots :steps="2" />
    <vue-slots-example />
    <vue-slots-uses />

    <welcome />
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js';

import {
  Welcome,
  WifiPassword,
  SlidesUrl,
  Vue,
  Fintual,
} from './intro';

import {
  VueGuide,
  VueInstance,
  VueComponent,
  VueTemplates,
  VueEvents,
  ComponentExample,
  VueComponentRegistration,
} from './vue';

import {
  VueComponentProperties,
  VueCustomEvents,
  VueHierarchyExample,
  VueForms,
  VueVModel,
  FintualChart,
  VueCustomInput,
  FintualModal,
} from './custom-inputs';

import {
  VueSlots,
  VueSlotsExample,
  VueSlotsUses,
} from './slots';

export default {
  mixins: [Slideshow],
  components: {
    Welcome,
    WifiPassword,
    SlidesUrl,
    Vue,
    Fintual,
    VueGuide,
    VueInstance,
    VueComponent,
    VueTemplates,
    VueEvents,
    ComponentExample,
    VueComponentRegistration,
    VueComponentProperties,
    VueCustomEvents,
    VueHierarchyExample,
    VueForms,
    VueVModel,
    FintualChart,
    VueCustomInput,
    FintualModal,
    VueSlots,
    VueSlotsExample,
    VueSlotsUses,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.eg-slideshow h1 {
  font-size: 3em;
}

.code-container {
  margin: 0 auto;
  min-width: 800px;
  width: fit-content;

  @media(max-width: 800px) {
    min-width: 100%;
    width: 100%;
  }
}

.code-example {
  align-items: center;
  display: flex;
  margin: 15px;
  @media(max-width: 800px) {
    flex-direction: column;

    &__code,
    &__component {
      flex-grow: 0;
      width: 100%;
    }
  }

  &__code,
  &__component {
    flex-grow: 1;
  }

  &__filename {
    font-family: monospace;
    font-size: .5em;
    text-align: left;
    margin-left: 20px;
  }
}
</style>
