import accordion from '@uswds/uswds/js/usa-accordion';
import animatedMedia from './animated-media.js';
import banner from '@uswds/uswds/js/usa-banner';
import button from '@uswds/uswds/js/usa-button';
import characterCount from '@uswds/uswds/js/usa-character-count';
import clipboardButton from './clipboard-button.js';
import comboBox from '@uswds/uswds/js/usa-combo-box';
import connectedServices from './connected-services.js';
import datePicker from '@uswds/uswds/js/usa-date-picker';
import dateRangePicker from '@uswds/uswds/js/usa-date-range-picker';
import fileInput from '@uswds/uswds/js/usa-file-input';
import footer from '@uswds/uswds/js/usa-footer';
import inPageNavigation from '@uswds/uswds/js/usa-in-page-navigation';
import inputMask from '@uswds/uswds/js/usa-input-mask';
import inputOtp from './input-otp.js';
import inputSsn from './input-ssn.js';
import languageSelector from '@uswds/uswds/js/usa-language-selector';
import modal from '@uswds/uswds/js/usa-modal';
import nativeModal from './native-modal.js';
import ndsFileInput from './nds-file-input.js';
import navigation from '@uswds/uswds/js/usa-header';
import officialBanner from './official-banner.js';
import pageFooter from './page-footer.js';
import password from '@uswds/uswds/js/_usa-password';
import phoneInput from './phone-input.js';
import popoverMenu from './popover-menu.js';
import progress from './progress.js';
import range from '@uswds/uswds/js/usa-range';
import search from '@uswds/uswds/js/usa-search';
import { withSelectOnly } from './select-only.js';
import skipnav from '@uswds/uswds/js/usa-skipnav';
import timePicker from '@uswds/uswds/js/usa-time-picker';
import table from '@uswds/uswds/js/usa-table';
import tooltip from '@uswds/uswds/js/usa-tooltip';
import toast from './toast.js';
import { withTooltipInteractions } from './tooltip.js';
import totpSetup from './totp-setup.js';
import validator from '@uswds/uswds/js/usa-validation';

const selectionBehavior = withSelectOnly(comboBox);
const tooltipBehavior = withTooltipInteractions(tooltip);
const passwordBehavior = {
  ...password,
  /** @param {HTMLElement | Document} [root] */
  on(root = document.body) {
    const element = root instanceof Document ? root.documentElement : root;
    password.on(element);
    element.setAttribute('data-password-toggle-ready', '');
  },
  /** @param {HTMLElement | Document} [root] */
  off(root = document.body) {
    const element = root instanceof Document ? root.documentElement : root;
    element.removeAttribute('data-password-toggle-ready');
    password.off(element);
  },
};

export {
  accordion,
  animatedMedia,
  banner,
  button,
  characterCount,
  clipboardButton,
  selectionBehavior as comboBox,
  connectedServices,
  datePicker,
  dateRangePicker,
  fileInput,
  footer,
  inPageNavigation,
  inputMask,
  inputOtp,
  inputSsn,
  languageSelector,
  modal,
  nativeModal,
  ndsFileInput,
  navigation,
  officialBanner,
  pageFooter,
  passwordBehavior as password,
  phoneInput,
  popoverMenu,
  progress,
  range,
  search,
  skipnav,
  timePicker,
  table,
  toast,
  tooltipBehavior as tooltip,
  totpSetup,
  validator,
};
