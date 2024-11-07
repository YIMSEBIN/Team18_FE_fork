import { applicantsData } from './Applicants/applicantsData';
import { contractModalData } from './Applicants/ContractModal/contractModalData';
import { applyGuideData } from './Apply/applyGuideData';
import { applyData } from './Apply/applyData';
import { employerMyPageData } from './EmployerMyPage/employerMyPageData';
import { footerData } from './Footer/footerData';
import { headerData } from './Header/headerData';
import { Languages } from './Languages';
import { myCompanyData } from './MyCompany/myCompanyData';
import { recruitData } from './Recruit/recruitData';
import { registerVisaData } from './RegisterVisa/registerVisaData';
import { resumeData } from './Resume/resumeData';
import { registerSignData } from './registerSign/registerSignData';

export const KO = {
  resume: { ...resumeData[Languages.KO] },
  employerMyPage: { ...employerMyPageData[Languages.KO] },
  myCompany: { ...myCompanyData[Languages.KO] },
  applicants: { ...applicantsData[Languages.KO] },
  registerVisa: { ...registerVisaData[Languages.KO] },
  contractModal: { ...contractModalData[Languages.KO] },
  header: { ...headerData[Languages.KO] },
  footer: { ...footerData[Languages.KO] },
  recruit: { ...recruitData[Languages.KO] },
  applyGuide: { ...applyGuideData[Languages.KO] },
  apply: { ...applyData[Languages.KO] },
  registerSign: { ...registerSignData[Languages.KO] },
};

export const VE = {
  resume: { ...resumeData[Languages.VE] },
  employerMyPage: { ...employerMyPageData[Languages.VE] },
  myCompany: { ...myCompanyData[Languages.VE] },
  applicants: { ...applicantsData[Languages.VE] },
  registerVisa: { ...registerVisaData[Languages.VE] },
  contractModal: { ...contractModalData[Languages.VE] },
  header: { ...headerData[Languages.VE] },
  footer: { ...footerData[Languages.VE] },
  recruit: { ...recruitData[Languages.VE] },
  applyGuide: { ...applyGuideData[Languages.VE] },
  apply: { ...applyData[Languages.VE] },
  registerSign: { ...registerSignData[Languages.VE] },
};
