import palette from './palette';
import text from './text.ts';

const theme = {
  palette,
  text,
};

export type TAppTheme = Omit<typeof theme, 'text'> & {
  text: {
    variants: (typeof theme)['text']['variants']['default'];
  } & Omit<(typeof theme)['text'], 'variants'>;
};

export default theme;
