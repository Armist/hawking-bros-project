import styled, {css} from "styled-components";
import {theme} from "./theme";

export const px2vw = (screen: number, px: number) => `${px / screen * 100}vw`


// TEXT STYLES

export const mText = css`
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
`

export const sText = css`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`

export const xsText = css`
  font-size: ${theme.fontSizes.xs};
  line-height: ${theme.lineHeights.xs};
`

export const xxsText = css`
  font-size: ${theme.fontSizes.xxs};
  line-height: ${theme.lineHeights.xxs};
`

export const lText = css`
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.l};
`

export const xlText = css`
  font-size: ${theme.fontSizes.xl};
  line-height: ${theme.lineHeights.xl};
`

export const xxlText = css`
  font-size: ${theme.fontSizes.xxl};
  line-height: ${theme.lineHeights.xxl};
`
