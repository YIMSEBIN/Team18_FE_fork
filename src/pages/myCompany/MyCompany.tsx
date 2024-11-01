import Layout from '@/features/layout';
import { Flex, InnerContainer, Image, Spinner } from '@/components/common';
import CompanyLogo from '@assets/images/coupang.png';
import CompanyInfo from '@/features/companies/CompanyInfo/CompanyInfo';
import { imageStyle, companyWrapperStyle, innerContainerStyle, spinnerFlexStyle } from './MyCompany.styles';
import RecruitmentList from '@/features/recruitments/RecruitmentList/RecruitmentList';
import { useParams } from 'react-router-dom';
import { useGetMyCompanies } from '@/apis/companies/hooks/useGetMyCompanies';
import { CompanyData, RecruitmentItem } from '@/types';
import { useGetMyRecruitments } from '@/apis/recruitments/hooks/useGetMyRecruitments';

interface MyCompanyProps {
  company?: CompanyData;
  recruitmentList?: RecruitmentItem[];
}

export default function MyCompany({ company, recruitmentList }: MyCompanyProps) {
  const { companyId } = useParams();
  const { data: companyList } = useGetMyCompanies();
  const { data: recruitments, isLoading } = useGetMyRecruitments(Number(companyId));

  const companyData = company || companyList?.find((c: CompanyData) => c.companyId.toString() === companyId);
  const recruitmentsData = recruitmentList || recruitments;

  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex
            direction="column"
            alignItems="center"
            gap={{ y: '60px' }}
            css={{ position: 'relative', minHeight: '600px' }}
          >
            <Flex alignItems="center" gap={{ x: '150px' }} css={companyWrapperStyle}>
              <Image url={CompanyLogo} size={{ width: '280px', height: '120px' }} css={imageStyle} />
              <CompanyInfo
                name={companyData.name}
                industryOccupation={companyData.industryOccupation}
                brand={companyData.brand}
                revenuePerYear={companyData.revenuePerYear}
              />
            </Flex>
            {isLoading ? (
              <Flex justifyContent="center" alignItems="center" css={spinnerFlexStyle}>
                <Spinner />
              </Flex>
            ) : (
              recruitmentsData && <RecruitmentList recruitmentList={recruitmentsData} />
            )}
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
