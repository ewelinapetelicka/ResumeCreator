import { Pixel } from './size.model';
import * as CSS from 'csstype';

export interface TextStyle {
  color?: string;
  fontSize?: Pixel;
  fontFamily?: string;
  fontWeight?: number;
  textTransform?: CSS.Property.TextTransform;
}

export interface BoxStyle {
  bg?: string;
  padding?: Pixel;
  borderRadius?: string;
}

export interface ImageStyle {
  borderRadius?: Pixel;
}
