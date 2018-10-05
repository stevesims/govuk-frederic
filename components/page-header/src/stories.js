import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { PageHeaderExample } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Page/PageHeader', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', PageHeaderExample);
