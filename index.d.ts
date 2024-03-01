import {
  accordion as baseAccordion,
  banner as baseBanner,
  characterCount as baseCharacterCount,
  comboBox as baseComboBox,
  datePicker as baseDatePicker,
  dateRangePicker as baseDateRangePicker,
  fileInput as baseFileInput,
  footer as baseFooter,
  inPageNavigation as baseInPageNavigation,
  inputMask as baseInputMask,
  languageSelector as baseLanguageSelector,
  modal as baseModal,
  navigation as baseHeader,
  password as basePassword,
  search as baseSearch,
  skipnav as baseSkipnav,
  timePicker as baseTimePicker,
  table as baseTable,
  tooltip as baseTooltip,
  validator as baseValidation,
} from '@uswds/uswds';

type ComponentLifecycle = (target?: HTMLElement) => any;

interface BaseComponent {
  on: ComponentLifecycle;
  off: ComponentLifecycle;
}

interface Button extends BaseComponent {}

interface Range extends BaseComponent {
  updateCallout(targetRange: HTMLInputElement): void;
}

type Tooltip = typeof baseTooltip &
  BaseComponent & {
    show(
      tooltipBody: HTMLElement,
      tooltipTrigger: Element,
      position: 'top' | 'right' | 'left' | 'bottom',
    ): void;
  };

export const accordion: typeof baseAccordion & BaseComponent;
export const banner: typeof baseBanner & BaseComponent;
export const button: Button;
export const characterCount: typeof baseCharacterCount & BaseComponent;
export const comboBox: typeof baseComboBox & BaseComponent;
export const datePicker: typeof baseDatePicker & BaseComponent;
export const dateRangePicker: typeof baseDateRangePicker & BaseComponent;
export const fileInput: typeof baseFileInput & BaseComponent;
export const footer: typeof baseFooter & BaseComponent;
export const inPageNavigation: typeof baseInPageNavigation & BaseComponent;
export const inputMask: typeof baseInputMask & BaseComponent;
export const languageSelector: typeof baseLanguageSelector & BaseComponent;
export const modal: typeof baseModal & BaseComponent;
export const header: typeof baseHeader & BaseComponent;
export const password: typeof basePassword & BaseComponent;
export const range: Range;
export const search: typeof baseSearch & BaseComponent;
export const skipnav: typeof baseSkipnav & BaseComponent;
export const timePicker: typeof baseTimePicker & BaseComponent;
export const table: typeof baseTable & BaseComponent;
export const tooltip: Tooltip;
export const validation: typeof baseValidation & BaseComponent;
