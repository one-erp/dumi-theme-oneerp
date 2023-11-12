---
nav:
  title: config
  order: 2
title: Base
---

`dumi-theme-oneerp` In order to better adapt to the theme style of the antd v5 official website, some unique fields have been added and placed in the `themeConfig` field of the `dumi` theme configuration item. The specific configuration fields are as follows:

## Basic configuration

### github

- type：`string`
- default：`null`

The Github icon link in the navigation bar. If this field is not configured, it will not be displayed.

### bannerConfig

- type：`IBannerConfig`
- default：`bannerConfigDefault`

```ts
export interface IBannerConfig {
  /** Whether to display the header banner background*/
  showBanner?: boolean;
  /** banner url */
  bannerImgUrl?: string;
  /** banner mobile url */
  bannerMobileImgUrl?: string;
}

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl: 'xx', // antd v5 official website comes with banner image
  bannerImgUrl: 'xx' // antd v5 official website comes with banner image
};
```

Home page header banner image configuration options

### localesEnhance

- type：`ILocaleEnhance[]`
- default：`dumi-theme-oneerp`

```ts
interface ILocaleEnhance {
  /** Same as the id in the locales item in themeConfig */
  id: string;
  /** The prefix used to display switching when there are only two items in multiple languages */
  switchPrefix: string;
}
```

The display of the multi-language switching prefix icon in the navigation header is only applicable to two multi-language situations.

### title

- type：`string | Record<string, string>`
- default：`Dumi Theme AntD`

```ts
// multi-language configuration object, the key is the language name
title: {
  'zh-CN': 'Dumi Ant Design theme',
  'en-US': 'Dumi Theme Ant Design'
}
```

Configure the title of the first screen area on the home page.

### description

- type：`string | Record<string, string>`
- default：`null`

Configure the introduction text of the first screen area on the home page.

### docVersions

- type：`IDocVersion`
- default value：`null`

```ts
interface IDocVersion {
  [propName: string]: string;
}
// .dumi.ts
docVersions: {
  '1.0.0': '',
  '0.x.x': 'http://xxxx.com'
}
```

Display the current document version or multi-document drop-down selection box in the navigation bar, and the default first attribute is the current document version.

### moreLinks

- type：`IMoreLink[]`
- default value：`null`

```ts
interface IMoreLink {
  /** link text description */
  text: string;
  /** link */
  link: string;
}
// .dumi.ts
moreLinks: [
  {
    text: 'Dumi',
    link: 'https://d.umijs.org/'
  },
  {
    text: 'Ant Design',
    link: 'https://ant.design/'
  }
];
```

Configure more ecosystem links in the navigation bar.

### actions

- type：`IAction[] | Record<string, IAction[]>`
- default：`null`

```ts
interface IAction {
  /** Button text description */
  text: string;
  /** Button link */
  link: string;
  /** Button type */
  type?: 'primary' | 'default';
}

// Just configure the array for single language
actions: [{ type: 'primary', text: 'start using', link: '/guide/introduce' }]
// Multi-language configuration object, the key is the language name
actions: {
  'zh-CN': [{ type: 'primary', text: 'start using', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
```

Configure the operation buttons in the first screen area of the home page.

### features

- type：`IFeature[] | Record<string, IFeature[]>`
- default：`null`

```ts
interface IFeature {
  /** title */
  title: string;
  /** detail */
  details: string;
}
// Just configure the array for single language
features: [{ title: 'Use it as soon as possible'}, { details: 'The access is simple. Even if the installation is used, it is fully integrated into the Ant Design 5.0 style.'}]
// Multi-language configuration object, the key is the language name
features: {
  'zh-CN': [{ title: 'Use it as soon as possible'}, { details: 'The access is simple. Even if the installation is used, it is fully integrated into the Ant Design 5.0 style.'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
```

After configuration, the page will be presented as the homepage, used to display the features of the component library in the form of 3 per row.

### sidebarGroupModePath

- type：`Array<string | RegExp> | true`
- default：`[]`

```ts
export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // when true, all routes will be treated as a group
      sidebarGroupModePath: [
        // Matches routes starting with `/config`
        '/config',
        // Support regular matching
        /\/guide\//
      ]
    }
  }
};
```

### sidebarEnhance

- type：`Record<string, SidebarEnhanceItems>`
- default：`undefined`

```ts
export default {
  themeConfig: {
    sidebarEnhance: {
      '/welcome': [
        {
          title: 'Start quickly',
          type: 'group',
          children: [
            {
              // support multiple nesting
              title: 'Install',
              children: [
                '/welcome/getting-started/installation',
                '/welcome/getting-started/installation/docker'
              ]
            },
            {
              title: 'upgrade',
              children: [
                '/welcome/getting-started/upgrading',
                '/welcome/getting-started/upgrading/docker-compose'
              ]
            }
          ]
        },
        // The way to support objects
        {
          title: 'update record',
          link: 'https://github.com/xx/xx/changelog.md'
        }
      ]
    }
  }
};
```

Support for multi-level directories，Configuration parameter reference ant-design menu 组件的 [items prop](https://ant.design/components/menu-cn#itemtype)。

Whether the left navigation bar needs to be treated as a group, please refer to antd [menuitemgrouptype][antd-menuitemgrouptype-url].

[antd-menuitemgrouptype-url]: https://ant.design/components/menu-cn#menuitemgrouptype
