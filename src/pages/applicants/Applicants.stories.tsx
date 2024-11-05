import { Meta, StoryObj } from '@storybook/react';
import Applicants from './Applicants';
import { recruitment, applicantList } from '../../apis/applicants/mocks/applicants.mock';

const meta: Meta<typeof Applicants> = {
  title: 'pages/Applicants',
  component: Applicants,
  tags: ['autodocs'],
  args: { recruitment, applicantList },
};

export default meta;

type Story = StoryObj<typeof Applicants>;

export const Default: Story = {};
