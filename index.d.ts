export {
  accordion,
  banner,
  characterCount,
  comboBox,
  datePicker,
  dateRangePicker,
  fileInput,
  footer,
  inPageNavigation,
  inputMask,
  languageSelector,
  modal,
  navigation as header,
  password,
  search,
  skipnav,
  timePicker,
  table,
  tooltip,
  validator as validation,
} from '@uswds/uswds';

export interface button {
  on(target?: HTMLElement): void;
  off(target?: HTMLElement): void;
}

export interface range {
  on(target?: HTMLElement): void;
  off(target?: HTMLElement): void;
  updateCallout(targetRange: HTMLInputElement): void;
}
