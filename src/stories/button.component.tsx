import {Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material'

export type ButtonBaseProps = Pick<
  MuiButtonProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'onClick'
  | 'disabled'
  | 'children'
  | 'href'
  | 'startIcon'
  | 'endIcon'
>
export const Button = ({children, ...rest}: ButtonBaseProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
)
export default Button
