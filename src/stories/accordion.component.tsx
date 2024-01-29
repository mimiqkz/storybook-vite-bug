import Accordion, {AccordionProps} from '@mui/material/Accordion'

export type AccordionBaseProps = Pick<
  AccordionProps,
  | 'defaultExpanded'
  | 'disabled'
  | 'disableGutters'
  | 'expanded'
  | 'children'
  | 'sx'
  | 'variant'
>

const MuiAccordion = ({children, ...rest}: AccordionBaseProps) => (
  <Accordion {...rest}>{children}</Accordion>
)

export default MuiAccordion
