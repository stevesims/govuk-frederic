import '../src/stylesheets/main.scss';

import * as all from './all.js';

Object.values(all).forEach(stories => stories({ module }));
