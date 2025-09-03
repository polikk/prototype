import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import AccordionCustom from '../../src/components/AccordionCustom.vue';
import FileUploadList from '../../src/components/FileUploadList.vue';
import MessageCard from '../../src/components/MessageCard.vue';
import NavigationPanel from '../../src/components/NavigationPanel.vue';

describe('AccordionCustom', () => {
  it('renders accordion data', () => {
    const wrapper = mount(AccordionCustom, {
      global: {
        plugins: [createTestingPinia()]
      },
      props: { disabled: false }
    });
    expect(wrapper.findAll('.p-accordion')).not.toHaveLength(0);
  });
});

describe('FileUploadList', () => {
  it('does not show upload button when disabled', () => {
    const wrapper = mount(FileUploadList, { props: { disabled: true } });
    expect(wrapper.find('label').exists()).toBe(false);
  });
});

describe('MessageCard', () => {
  it('hides edit button when disabled', () => {
    const wrapper = mount(MessageCard, { props: { disabled: true, title: '', message: '', author: '', date: '', photoUrl: '' } });
    expect(wrapper.find('.edit-btn').exists()).toBe(false);
  });
});

describe('NavigationPanel', () => {
  it('renders all navigation links', () => {
    const wrapper = mount(NavigationPanel);
    expect(wrapper.findAll('li').length).toBeGreaterThan(5);
  });
});
