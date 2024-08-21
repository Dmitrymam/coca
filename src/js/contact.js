import '/scss/contact.scss';

// component

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contact/phone.js';
import { usePartnersMobileSlider } from './components/parents.js';

useTheme();
useBurger();
usePhone();
usePartnersMobileSlider();
