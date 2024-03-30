import styled, {createGlobalStyle} from "styled-components";
import theme from "../../shared/theme";

export const AppContainer = styled('div')(() => ({
  maxWidth: '768px',
  margin: '0 auto'
}));

export const GlobalStyles = createGlobalStyle({
  body: {
    background: theme.palette.background.main
  },
  '#root': {
    padding: '30px 0 50px'
  }
})