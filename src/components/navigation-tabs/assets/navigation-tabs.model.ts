import { TBoxProps } from '../../../ui/box/assets/box.model.ts';

export type TTab = { label: string; value: string | number };

export interface TTabsProps {
  sx?: TBoxProps['sx'];
  getValue?: (tab: TTab) => void;
  tabs: (TTab & { href: string })[];
  currentValue?: TTab['value'];
  tabComponent?: TBoxProps['as'];
}
