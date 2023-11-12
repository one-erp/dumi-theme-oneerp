import type { SerializedStyles } from '@emotion/react';
import { type IThemeConfig } from 'dumi/dist/client/theme-api/types';

export type ISidebarGroupModePathItem = string | RegExp;

export interface ILocaleEnhance {
  /** The ID in the Locales item in ThemeConfig */
  id: string;
  /** When there are only two multi -languages, there are only two items to show the switching prefix */
  switchPrefix: string;
  /** Support multi -language by switching hostname */
  hostname?: string;
}

interface IAction {
  /** Button text description */
  text: string;
  /** Button link */
  link: string;
  /** Button type */
  type?: 'primary' | 'default';
}

interface IMoreLink {
  /** Link text description */
  text: string;
  /** Link */
  link: string;
}

interface IFeature {
  /** Characteristic name */
  title: string;
  /** Specific description */
  details: string;
  /** css in js style */
  itemCss?: SerializedStyles;
}

// Group type, replace the children string array

export type SidebarEnhanceItemType = {
  title: string;
  link: string;
  target?: string;
};

export type SidebarEnhanceChildrenType = string | SidebarEnhanceItemType;
export type SidebarEnhanceSubType = {
  children: SidebarEnhanceChildrenType[];
  title: string;
  subTitle?: string;
};

// Sidebar related type of enhanced mode
export type SidebarEnhanceGroupChildren = (SidebarEnhanceSubType | SidebarEnhanceChildrenType)[];
export type SidebarEnhanceGroupType = {
  type: 'group';
  title: string;
  children: SidebarEnhanceGroupChildren;
};
export type SidebarEnhanceType =
  | SidebarEnhanceSubType
  | SidebarEnhanceGroupType
  | SidebarEnhanceChildrenType;
export type SidebarEnhanceItems = SidebarEnhanceType[];

interface IDocVersion {
  [propName: string]: string;
}

export interface IBannerConfig {
  /** Whether to show the head of Banner */
  showBanner?: boolean;
  /** banner The map's address */
  bannerImgUrl?: string;
  /** banner Mobile picture address */
  bannerMobileImgUrl?: string;
}

interface IAdditionalThemeConfig extends Omit<IThemeConfig, 'prefersColor' | 'socialLinks'> {
  // I don't know why the type of inheriting iThemeconfig does not take effect, so I wrote it here directly
  name?: IThemeConfig['name'];
  logo?: IThemeConfig['logo'];
  nav?: IThemeConfig['nav'];
  sidebar?: IThemeConfig['sidebar'];
  footer?: IThemeConfig['footer'];
  showLineNum?: IThemeConfig['showLineNum'];
  prefersColor?: IThemeConfig['prefersColor'];
  nprogress?: IThemeConfig['nprogress'];
  // https://github.com/umijs/dumi/pull/1694
  socialLinks?: Partial<IThemeConfig['socialLinks']>;

  /** github Link */
  github?: string;
  /** The link after clicking in the upper left corner, the default is the homepage by default */
  homeLink?: string;
  /** Multi -language additional configuration is mainly used to display language switching text (only for two multi -language) */
  localesEnhance?: ILocaleEnhance[];
  /** Configure the title of the first screen area of the homepage. */
  title?: string | Record<string, string>;
  /** Configure the profile text on the first screen area of the homepage */
  description?: string | Record<string, string>;
  /** Configure the operation button on the first screen area of the homepage */
  actions?: IAction[] | Record<string, IAction[]>;
  /** Configure home page feature description */
  features?: IFeature[] | Record<string, IFeature[]>;
  /** sidebar group Pattern route */
  sidebarGroupModePath?: true | ISidebarGroupModePathItem[];
  /** Document version */
  docVersions?: IDocVersion;
  /** More link */
  moreLinks?: IMoreLink[];
  /** banner Configuration */
  bannerConfig?: IBannerConfig;
  /** Enhanced mode sidebar */
  sidebarEnhance?: Record<string, SidebarEnhanceItems>;
}

export { IAction, IAdditionalThemeConfig, IFeature, ILocaleEnhance };
