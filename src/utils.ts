import { history, useSiteData } from 'dumi';

type ILocaleItem = ReturnType<typeof useSiteData>['locales'][0];

export function getTargetLocalePath({
  pathname = history.location.pathname,
  current,
  target
}: {
  pathname?: string;
  current: ILocaleItem;
  target: ILocaleItem;
}) {
  const clearPath =
    'base' in current
      ? pathname.replace(current.base.replace(/\/$/, ''), '')
      : pathname.replace(new RegExp(`${current.suffix}$`), '');

  return 'base' in target
    ? `${target.base}${clearPath}`.replace(/^\/\//, '/')
    : `${clearPath}${target.suffix}`;
}

// Delete the html tag in the title
export const removeTitleCode = (title = '') => {
  return title.replace(/<\w+>.*<\/\w+>/g, '');
};
