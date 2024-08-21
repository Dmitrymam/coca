import '/scss/main.scss';

// component

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider } from './components/home/slider.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { usePartnersMobileSlider } from './components/parents.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
usePartnersMobileSlider();
