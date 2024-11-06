import { employerMyPageData } from './EmployerMyPage/EmployerMyPageData';
import { Languages } from './Languages';
import { resumeData } from './Resume/resumeData';

export const KO = {
  resume: { ...resumeData[Languages.KO] },
  employerMyPage: { ...employerMyPageData[Languages.KO] },
};

export const VE = {
  resume: { ...resumeData[Languages.VE] },
  employerMyPage: { ...employerMyPageData[Languages.VE] },
};
