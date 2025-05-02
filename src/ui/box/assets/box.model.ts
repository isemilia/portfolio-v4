import { CSSObject, DefaultTheme } from 'styled-components';
import { ComponentType } from 'react';
import palette from '../../../shared/theme/palette.ts';

export interface TBoxProps {
  sx?: (theme: DefaultTheme & { palette: typeof palette }) => CSSObject;
  as?: keyof HTMLElementTagNameMap | ComponentType<any>;
}
