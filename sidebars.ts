import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/intro', 'getting-started/quick-start'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/integrations',
        'core-concepts/connections',
        'core-concepts/merged-integrations',
        'core-concepts/flows',
        'core-concepts/transformations',
        'core-concepts/scheduling',
      ],
    },
    {
      type: 'category',
      label: 'How-To Guides',
      items: [
        'how-to/managing-your-organization',
        'how-to/managing-your-subscription',
        'how-to/building-a-transformation-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Connector Reference',
      items: [
        'connector-reference/postgresql',
        'connector-reference/mysql',
        'connector-reference/google-sheets',
        'connector-reference/bigquery',
        'connector-reference/email-reports',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api-reference/authentication', 'api-reference/endpoints'],
    },
  ],
};

export default sidebars;