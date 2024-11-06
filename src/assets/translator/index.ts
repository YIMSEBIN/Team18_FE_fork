import { applicantsData } from './Applicants/applicantsData';
import { employerMyPageData } from './EmployerMyPage/employerMyPageData';
import { Languages } from './Languages';
import { myCompanyData } from './MyCompany/myCompanyData';
import { resumeData } from './Resume/resumeData';

export const KO = {
  resume: { ...resumeData[Languages.KO] },
  employerMyPage: { ...employerMyPageData[Languages.KO] },
  myCompany: { ...myCompanyData[Languages.KO] },
  applicants: { ...applicantsData[Languages.KO] },
};

export const VE = {
  resume: { ...resumeData[Languages.VE] },
  employerMyPage: { ...employerMyPageData[Languages.VE] },
  myCompany: { ...myCompanyData[Languages.VE] },
  applicants: { ...applicantsData[Languages.VE] },
};
