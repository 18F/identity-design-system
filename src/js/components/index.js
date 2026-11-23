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
import password from '@uswds/uswds/js/_usa-password';
import phoneInput from './phone-input.js';
import range from '@uswds/uswds/js/usa-range';
import search from '@uswds/uswds/js/usa-search';
import { withSelectOnly } from './select-only.js';
import skipnav from '@uswds/uswds/js/usa-skipnav';
import timePicker from '@uswds/uswds/js/usa-time-picker';
import table from '@uswds/uswds/js/usa-table';
import tooltip from '@uswds/uswds/js/usa-tooltip';
import totpSetup from './totp-setup.js';
import validator from '@uswds/uswds/js/usa-validation';

const selectionBehavior = withSelectOnly(comboBox);

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
  password,
  phoneInput,
  range,
  search,
  skipnav,
  timePicker,
  table,
  tooltip,
  totpSetup,
  validator,
};
