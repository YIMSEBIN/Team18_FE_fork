import { applicantsData } from './Applicants/applicantsData';
import { contractModalData } from './Applicants/ContractModal/contractModalData';
import { signInData } from './Auth/signInData';
import { signUpData } from './Auth/signUpData';
import { signUpModalData } from './Auth/signUpModalData';
import { employerMyPageData } from './EmployerMyPage/employerMyPageData';
import { headerData } from './Header/headerData';
import { homeData } from './Home/homeData';
import { Languages } from './Languages';
import { myCompanyData } from './MyCompany/myCompanyData';
import { registerVisaData } from './RegisterVisa/registerVisaData';
import { resumeData } from './Resume/resumeData';

export const KO = {
  home: { ...homeData[Languages.KO] },
  signIn: { ...signInData[Languages.KO] },
  signUp: { ...signUpData[Languages.KO] },
  signUpModal: { ...signUpModalData[Languages.KO] },
  resume: { ...resumeData[Languages.KO] },
  employerMyPage: { ...employerMyPageData[Languages.KO] },
  myCompany: { ...myCompanyData[Languages.KO] },
  applicants: { ...applicantsData[Languages.KO] },
  registerVisa: { ...registerVisaData[Languages.KO] },
  contractModal: { ...contractModalData[Languages.KO] },
  header: { ...headerData[Languages.KO] },
};

export const VE = {
  home: { ...homeData[Languages.VE] },
  signIn: { ...signInData[Languages.VE] },
  signUp: { ...signUpData[Languages.VE] },
  signUpModal: { ...signUpModalData[Languages.VE] },
  resume: { ...resumeData[Languages.VE] },
  employerMyPage: { ...employerMyPageData[Languages.VE] },
  myCompany: { ...myCompanyData[Languages.VE] },
  applicants: { ...applicantsData[Languages.VE] },
  registerVisa: { ...registerVisaData[Languages.VE] },
  contractModal: { ...contractModalData[Languages.VE] },
  header: { ...headerData[Languages.VE] },
};
