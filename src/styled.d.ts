import 'styled-components';
import { TAppTheme } from './shared/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends TAppTheme {}
}
