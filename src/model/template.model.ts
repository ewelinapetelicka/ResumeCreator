import { AbsolutePosition } from './position.model';
import { BoxStyle, TextStyle } from './style.model';
import { DimensionPercentage } from './size.model';
import { PersonalDataField } from './personal-data.model';

export interface Template {
  id: string;
  name: string;
  elements: Element[];
}

export enum ElementType {
  BOX = 'BOX',
  TEXT = 'TEXT',
}

export interface Element {
  position: AbsolutePosition;
  type: ElementType;
}

export interface BoxElement extends Element {
  type: ElementType.BOX;
  dimension: DimensionPercentage;
  style: BoxStyle;
}

export interface TextElement extends Element {
  type: ElementType.TEXT;
  personalDataField: PersonalDataField;
  style: TextStyle;
}
