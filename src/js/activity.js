import '/scss/activity.scss';

// component

import { useTheme } from './components/theme.js';
import { useTab } from './components/activity/tab.js';
import {
  useHeroActivitySlider,
  useArticleActivitySlider,
} from './components/activity/slider.js';
import { useBurger } from './components/burger.js';

useTheme();
useTab();
useBurger();
useHeroActivitySlider();
useArticleActivitySlider();
