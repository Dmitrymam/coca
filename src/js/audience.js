import '/scss/audience.scss';

// component

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useHeroAudienceSlider,
  useOurTeamSlider,
} from './components/audience/slider.js';

useTheme();
useBurger();
useHeroAudienceSlider();
useOurTeamSlider();
