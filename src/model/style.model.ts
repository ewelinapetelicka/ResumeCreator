import { Pixel } from './size.model';

export interface TextStyle {
  color?: string;
  size?: Pixel;
}

export interface BoxStyle {
  bg?: string;
  padding?: number;
  borderRadius?: string;
}
