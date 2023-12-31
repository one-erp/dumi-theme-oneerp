// Obtain dumi-theme-oneerp Additional configuration
import { useSiteData } from 'dumi';

import type { IAdditionalThemeConfig } from '../types';

const useAdditionalThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig: IAdditionalThemeConfig = themeConfig;

  return additionalThemeConfig;
};

export default useAdditionalThemeConfig;
