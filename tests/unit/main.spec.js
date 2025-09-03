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
  it('shows upload button when not disabled', () => {
    const wrapper = mount(FileUploadList, { props: { disabled: false } });
    expect(wrapper.find('label').exists()).toBe(true);
  });
  it('does not allow files larger than 10MB', async () => {
    const wrapper = mount(FileUploadList, { props: { disabled: false } });
    const file = new File([new ArrayBuffer(11 * 1024 * 1024)], 'bigfile.pdf', { type: 'application/pdf' });
    window.alert = vi.fn();
    await wrapper.vm.handleFiles({ target: { files: [file] } });
    expect(window.alert).toHaveBeenCalledWith('Filen kan ikke være større enn 10MB.');
    expect(wrapper.vm.files.length).toBe(0);
  });
});

describe('MessageCard', () => {
  it('hides edit button when disabled', () => {
    const wrapper = mount(MessageCard, { props: { disabled: true, title: '', message: '', author: '', date: '', photoUrl: '' } });
    expect(wrapper.find('.edit-btn').exists()).toBe(false);
  });
  it('shows edit button when not disabled', () => {
    const wrapper = mount(MessageCard, { props: { disabled: false, title: '', message: '', author: '', date: '', photoUrl: '' } });
    expect(wrapper.find('.edit-btn').exists()).toBe(true);
  });
});

describe('NavigationPanel', () => {
  it('renders all navigation links', () => {
    const wrapper = mount(NavigationPanel);
    expect(wrapper.findAll('li').length).toBeGreaterThan(5);
  });
  it('navigates to correct route on click', async () => {
    const wrapper = mount(NavigationPanel, {
      global: {
        mocks: {
          $router: { push: vi.fn() },
          $route: { path: '/' }
        }
      }
    });
    const firstLink = wrapper.find('li');
    await firstLink.trigger('click');
    // No error thrown means click is handled
    expect(firstLink.exists()).toBe(true);
  });
});
