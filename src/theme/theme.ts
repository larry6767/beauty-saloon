export enum ColorsEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
  textTertiary = 'textTertiary',
  borderColor = 'borderColor',
  hover = 'hover',
}

export const theme = {
  colors: {
    [ColorsEnum.primary]: '#faf1ff',
    [ColorsEnum.secondary]: '#e68dba',
    [ColorsEnum.tertiary]: '#343a40',
    [ColorsEnum.textPrimary]: 'white',
    [ColorsEnum.textSecondary]: '#707070',
    [ColorsEnum.textTertiary]: '#e68dba',
    [ColorsEnum.borderColor]: '#efefef',
    [ColorsEnum.hover]: '#bcbcbc',
  } as const,
  fontSize: {
    smallFont: '9px',
    mediumFont: '12px',
    bigFont: '14px',
  } as const,
}
