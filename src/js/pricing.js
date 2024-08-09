import '../assets/scss/pricing.scss';

// component

import { useTheme } from './components/theme.js';
import { usePlans } from './components/pricing/plans.js';
import { useBurger } from './components/burger.js';

useTheme();
useBurger();
usePlans();
