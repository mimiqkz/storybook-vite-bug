import {Meta} from '@storybook/react'
import { Button } from './button.component'

const meta: Meta<typeof Button> = {
  title: 'Inputs/Buttons',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ikBgQUbMQELmtfVFUUzDnr/Arion-Design-System-Core---MUI---WIP?node-id=6543%3A36744&t=GWO9H9CBow5chH1Y-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta

export const Default = () => <Button variant="outlined">Default</Button>,
  Primary = () => <Button>Primary</Button>,
  Secondary = () => <Button color="secondary">Secondary</Button>
