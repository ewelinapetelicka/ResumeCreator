import { DimensionPixel } from './size.model';
import { PersonalDataField, PersonalDataValue } from './personal-data.model';
import { CSSProperties } from 'react';
import { IconBaseProps } from 'react-icons';

export interface Template {
  id: number;
  name: string;
  style?: CSSProperties;
  layouts: Layout[];
}

export interface FieldDefinition {
  field: PersonalDataField;
  elements: Element[];
}

export interface Layout {
  fields: FieldDefinition[];
  style?: CSSProperties;
  elementWrapperStyle?: CSSProperties;
}

export interface Element {
  type: ElementType;
  staticData?: PersonalDataValue;
}

export enum ElementType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  ICON = 'ICON',
  LIST = 'LIST',
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

export interface ListElement extends Element {
  type: ElementType.LIST;
  fields: FieldDefinition[];
  elementWrapperStyle?: CSSProperties;
  listElementWrapperStyle?: CSSProperties;
  style?: CSSProperties;
}
