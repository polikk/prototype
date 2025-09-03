import { defineStore } from 'pinia';

export const useAccordionStore = defineStore('accordion', {
  state: () => ({
    accordionData: []
  }),
  actions: {
    setAccordionData(data) {
      this.accordionData = Array.isArray(data) ? data : [];
    }
  }
});
