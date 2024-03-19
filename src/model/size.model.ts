export type Percentage = number;
export type Pixel = number;

export interface Dimension<T = Pixel | Percentage> {
  width: T;
  height: T;
}

export type DimensionPercentage = Dimension<Percentage>;
export type DimensionPixel = Dimension<Pixel>;
