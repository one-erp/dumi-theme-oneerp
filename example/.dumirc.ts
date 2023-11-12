import { defineConfig } from 'dumi';
import pkgJSON from '../package.json';
import { defineThemeConfig } from './.dumi/theme';

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  publicPath: '/dumi-theme-oneerp/',
  base: '/dumi-theme-oneerp',
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  locales: [
    { id: 'zh-CN', name: 'Chinese', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' }
  ],
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  // pass theme config
  themeConfig: defineThemeConfig({
    name: 'dumi-theme-oneerp',
    nav: {
      'zh-CN': [
        { title: 'guide', link: '/guide/introduce' },
        { title: 'Configuration', link: '/config/base' }
      ],
      'en-US': [
        { title: 'guide', link: '/guide/introduce-en' },
        { title: 'config', link: '/config/base-en' }
      ]
    },
    footer: 'oneerp | Copyright © 2023-present',
    github: 'https://github.com/one-erp/dumi-theme-oneerp',
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中' },
      { id: 'en-US', switchPrefix: 'en' }
    ],
    sidebarGroupModePath: ['/config'],
    title: 'Dumi Theme Ant Design',
    description: {
      'zh-CN': 'Ant Design 5.0 Dumi2 theme plug-in with similar official website style',
      'en-US': 'dumi2 theme similar to antd v5 website'
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: 'start using',
          link: '/guide/introduce'
        },
        {
          text: 'Configuration',
          link: '/config/base'
        }
      ],
      'en-US': [
        {
          type: 'primary',
          text: 'Start',
          link: '/guide/introduce-en'
        },
        {
          text: 'Config',
          link: '/config/base-en'
        }
      ]
    },
    features: {
      'zh-CN': [
        {
          title: 'Built-in full text search',
          details:
            'No three-party services are required. The title, text, DEMO, etc. can be searched, supporting multiple keyword search without bringing the product volume increase.'
        },
        {
          title: 'Better compilation performance',
          details:
            'By combining using UMI 4 MFSU, ESBUILD, SWC, lasting cache and other solutions, it brings faster compilation speed than Dumi 1.x.'
        },
        {
          title: 'Use it as soon as possible',
          details: 'The access is simple. Even if the installation is used, it is fully integrated into the Ant Design style.'
        }
      ],
      'en-US': [
        {
          title: 'Built-in Full-Text search',
          details:
            'There is no need to access any third-party services, and the contents such as title, text, demo, etc. can be searched, which supports multi-keyword search and will not increase the product volume.'
        },
        {
          title: 'Better Compilation Performance',
          details:
            'By combining Umi 4 MFSU, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than dumi1.x.'
        },
        {
          title: 'Simple Use',
          details:
            'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'
        }
      ]
    },
    docVersions: {
      [pkgJSON.version]: ''
    },
    moreLinks: [
      {
        text: 'Dumi',
        link: 'https://d.umijs.org/'
      },
      {
        text: 'Ant Design',
        link: 'https://ant.design/'
      }
    ]
  })
});
