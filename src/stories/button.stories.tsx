import {Meta} from '@storybook/react'
import { Button, ButtonBaseProps } from './button.component'

const meta: Meta<typeof Button> = {
  title: 'Core Components/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta

export const Default = (args: ButtonBaseProps) => <Button {...args}>Default</Button>
