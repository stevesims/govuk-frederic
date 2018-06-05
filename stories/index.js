import '../src/stylesheets/main.scss';
import '../src/stylesheets/app.css';

import * as all from './all.js';

Object.values(all).forEach(stories => stories({module}));
