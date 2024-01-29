import {Meta} from '@storybook/react'
import AccordionSummary from '@mui/material/AccordionSummary/AccordionSummary'
import Typography from '@mui/material/Typography/Typography'
import AccordionDetails from '@mui/material/AccordionDetails/AccordionDetails'

import Accordion, {AccordionBaseProps} from './accordion.component'

const meta: Meta<typeof Accordion> = {
  title: 'Core Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>
export default meta

export const Default = (args: AccordionBaseProps) => (
  <Accordion {...args}>
    <AccordionSummary>
      <Typography variant="subtitle1">Accordion</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
)
