import { DimensionPixel } from './size.model';
import { PersonalDataField } from './personal-data.model';
import { CSSProperties } from 'react';
import { IconBaseProps } from 'react-icons';

export interface Template {
  id: string;
  name: string;
  style?: CSSProperties;
  layouts: Layout[];
  elements: Element[];
}

export interface LayoutField {
  field: PersonalDataField;
  elements: string[];
}

export interface Layout {
  fields: LayoutField[];
  style?: CSSProperties;
  elementWrapperStyle?: CSSProperties;
}

export interface Element {
  id: string;
  type: ElementType;
  staticData?: Record<PersonalDataField, string>;
}

export enum ElementType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  ICON = 'ICON',
}

export interface TextElement extends Element {
  type: ElementType.TEXT;
  style?: CSSProperties;
}

export interface ImageElement extends Element {
  type: ElementType.IMAGE;
  dimension: DimensionPixel;
  style?: CSSProperties;
  alt: string;
}

export interface IconElement extends Element {
  type: ElementType.ICON;
  style?: IconBaseProps;
}
