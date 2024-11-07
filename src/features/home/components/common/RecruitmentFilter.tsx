import theme from '@/assets/theme';
import { Select, Icon, List } from '@/components/common';
import useSelect from '@/components/common/Select/hooks/useSelect';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const triggerStyle = { minWidth: '80px', fontSize: '16px', fontWeight: '700', color: theme.palettes.blue };

export default function RecruitmentFilter() {
  const { t } = useTranslation();
  const filterOptions = useMemo(
    () => [
      {
        value: 'all',
        text: t('home.recruitmentFilter.all'),
        action: () => console.log('All clicked'),
      },
      {
        value: 'salary',
        text: t('home.recruitmentFilter.salary'),
        action: () => console.log('Salary clicked'),
      },
      {
        value: 'latestRegistration',
        text: t('home.recruitmentFilter.latestRegistration'),
        action: () => console.log('LatestRegistration clicked'),
      },
    ],
    [t],
  );
  const { selectedOption, handleSelect } = useSelect(filterOptions[0]);

  return (
    <Select.Root>
      <Select.Trigger icon={<Icon.Arrow.DownBlue />} css={triggerStyle}>
        {selectedOption.text}
      </Select.Trigger>
      <Select.Content>
        <List
          items={filterOptions}
          renderItem={(option) => (
            <Select.Option key={option.value} value={option.value} onClick={() => handleSelect(option)}>
              {option.text}
            </Select.Option>
          )}
        />
      </Select.Content>
    </Select.Root>
  );
}
