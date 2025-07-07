export type TypographySizeType = {
  fontSize: number;
  lineHeight: number;
};

const TypographySize: Record<string, TypographySizeType> = {
  ExtraLarge: {
    fontSize: 40,
    lineHeight: 58,
  },
  XXXXLarge: {
    fontSize: 32,
    lineHeight: 42,
  },
  XXXLarge: {
    fontSize: 28,
    lineHeight: 42,
  },
  XXLarge: {
    fontSize: 26,
    lineHeight: 39,
  },
  XLarge: {
    fontSize: 24,
    lineHeight: 36,
  },
  Large: {
    fontSize: 22,
    lineHeight: 33,
  },
  Medium: {
    fontSize: 20,
    lineHeight: 30,
  },
  Small: {
    fontSize: 18,
    lineHeight: 27,
  },
  XSmall: {
    fontSize: 16,
    lineHeight: 24,
  },
  XXSmall: {
    fontSize: 14,
    lineHeight: 21,
  },
  XXXSmall: {
    fontSize: 12,
    lineHeight: 18,
  },
  XXXXSmall: {
    fontSize: 10,
    lineHeight: 13,
  },
};

export const Typography = Object.entries(TypographySize).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: `
        font-size: ${value.fontSize}px;
        line-height: ${value.lineHeight}px;
    `,
  }),
  {} as { [Key in keyof typeof TypographySize]: string }
);
