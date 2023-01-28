import 'styled-components';
import { IDefaultTheme } from './styles/types';

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}