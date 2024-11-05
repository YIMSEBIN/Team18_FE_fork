import theme from '@/assets/theme';
import { Select, Icon, List } from '@/components/common';
import { useLanguage } from '@/components/providers/Language.provider';
import { responsiveStyle } from '@/utils/responsive';

type LanguageOptionType = {
  value: string;
  text: string;
};

const triggerStyle = {
  minWidth: '80px',
  fontSize: '16px',
  fontWeight: '700',
  color: theme.palettes.blue,

  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
  }),
};

const languageOptions = [
  {
    value: 'korean',
    text: '한국어',
    action: () => console.log('한국어'),
  },
  {
    value: 'vietnamese',
    text: '베트남어',
    action: () => console.log('베트남어'),
  },
];

export default function LanguageFilter() {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (option: LanguageOptionType) => {
    setLanguage(option.value);
  };

  return (
    <Select.Root>
      <Select.Trigger icon={<Icon.Arrow.DownBlue />} css={triggerStyle}>
        {languageOptions.find((opt) => opt.value === language)?.text}
      </Select.Trigger>
      <Select.Content>
        <List
          items={languageOptions}
          renderItem={(option) => (
            <Select.Option key={option.value} value={option.value} onClick={() => changeLanguage(option)}>
              {option.text}
            </Select.Option>
          )}
        />
      </Select.Content>
    </Select.Root>
  );
}
