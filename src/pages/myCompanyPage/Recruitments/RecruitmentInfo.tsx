import { Button, Flex, Icon, Image, Typo } from '@/components/common';
import AreaIcon from '@assets/icons/recruitmentInfo/area.svg?react';
import SalaryIcon from '@assets/icons/recruitmentInfo/salary.svg?react';
import { RecruitmentItem } from '@/types';
import {
  buttonStyle,
  buttonTextStyle,
  imageSize,
  imageStyle,
  ImageWrapper,
  infoFlexStyle,
  infoGroupStyle,
  recruitmentFlexStyle,
} from './RecruitmentInfo.styles';
import { useLanguage } from '@/components/providers/Language.provider';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

type Props = Omit<RecruitmentItem, 'workHours' | 'hiring'>;

export default function RecruitmentInfo({
  recruitmentId,
  image,
  companyName,
  koreanTitle,
  vietnameseTitle,
  area,
  salary,
}: Props) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const title = language === 'korean' ? koreanTitle : vietnameseTitle;

  const goToRecruitmentDetails = (recruitmentId: number) => {
    navigate(ROUTE_PATH.RECRUIT.replace(':recruitmentId', recruitmentId.toString()));
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" gap={{ y: '100px' }} css={recruitmentFlexStyle}>
      <ImageWrapper>
        <Image url={image} size={imageSize} css={imageStyle} />
      </ImageWrapper>
      <Flex css={infoFlexStyle}>
        <Typo color="blue">{companyName}</Typo>
        <Typo element="h3" size="20px">
          {title}
        </Typo>
        <Flex css={infoGroupStyle}>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <AreaIcon />
            <Typo color="gray">{area}</Typo>
          </Flex>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <SalaryIcon />
            <Typo color="gray">시급 {salary}</Typo>
          </Flex>
        </Flex>
      </Flex>
      <Button css={buttonStyle} onClick={() => goToRecruitmentDetails(recruitmentId)}>
        <Flex gap={{ x: '15px' }}>
          <Typo size="16px" color="white" style={buttonTextStyle}>
            자세히 보러가기
          </Typo>
          <Icon.Arrow.RightWhite />
        </Flex>
      </Button>
    </Flex>
  );
}
