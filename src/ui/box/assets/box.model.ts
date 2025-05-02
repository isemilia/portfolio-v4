import { CSSObject, DefaultTheme } from 'styled-components';
import { ComponentType } from 'react';

export interface TBoxProps {
  sx?: (theme: DefaultTheme) => CSSObject;
  as?: keyof HTMLElementTagNameMap | ComponentType<any>;
}
