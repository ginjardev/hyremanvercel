import React from "react";
import JOBSTen from "pages/JOBSTen";
import Dashboardpages from "pages/Dashboardpages";
import Frame126Three from "pages/Frame126Three";
import CandidateView from "pages/CandidateView";
import JobCreationTwo from "pages/JobCreationTwo";
import ResumeBankNine from "pages/ResumeBankNine";
import ResumeBankEight from "pages/ResumeBankEight";
import Addingacandidate from "pages/Addingacandidate";
import DASHBOARDEight from "pages/DASHBOARDEight";
import JOBSNine from "pages/JOBSNine";
import CompanyonboardingThree from "pages/CompanyonboardingThree";
import JobCreationOne from "pages/JobCreationOne";
import ResumeBankSeven from "pages/ResumeBankSeven";
import JobCreation from "pages/JobCreation";
import TESTLIBRARY from "pages/TESTLIBRARY";
import CompanyOnboardingTwo from "pages/CompanyOnboardingTwo";
import JOBSEight from "pages/JOBSEight";
import CandidateOne from "pages/CandidateOne";
import Aboutpage from "pages/Aboutpage";
import Frame170One from "pages/Frame170One";
import Homepage from "pages/Homepage";
import DASHBOARDclonedOne from "pages/DASHBOARDclonedOne";
import Createajob from "pages/Createajob";
import ResumeBankSix from "pages/ResumeBankSix";
import DASHBOARDcloned from "pages/DASHBOARDcloned";
import IconsOne from "pages/IconsOne";
import MacBookPro16One from "pages/MacBookPro16One";
import CANDIDATESThree from "pages/CANDIDATESThree";
import DASHBOARDSeven from "pages/DASHBOARDSeven";
import DASHBOARDSix from "pages/DASHBOARDSix";
import ResumeBankFive from "pages/ResumeBankFive";
import DASHBOARDFive from "pages/DASHBOARDFive";
import JOBSSeven from "pages/JOBSSeven";
import Frame128One from "pages/Frame128One";
import ResumeBankFour from "pages/ResumeBankFour";
import Frame170 from "pages/Frame170";
import ADDNEWJOBSix from "pages/ADDNEWJOBSix";
import ResumeBankThree from "pages/ResumeBankThree";
import JOBSSix from "pages/JOBSSix";
import Frame121One from "pages/Frame121One";
import JOBSFive from "pages/JOBSFive";
import ADDNEWJOBFive from "pages/ADDNEWJOBFive";
import ResumeBankTwo from "pages/ResumeBankTwo";
import Frame129 from "pages/Frame129";
import MacBookPro16Two from "pages/MacBookPro16Two";
import DASHBOARDFour from "pages/DASHBOARDFour";
import DASHBOARDThree from "pages/DASHBOARDThree";
import CompanyonboardingOne from "pages/CompanyonboardingOne";
import ADDNEWJOBFour from "pages/ADDNEWJOBFour";
import Frame120 from "pages/Frame120";
import Candidate from "pages/Candidate";
import ResumeBankOne from "pages/ResumeBankOne";
import CANDIDATESTwo from "pages/CANDIDATESTwo";
import Frame121 from "pages/Frame121";
import DASHBOARDTwo from "pages/DASHBOARDTwo";
import ResumeBank from "pages/ResumeBank";
import Assets from "pages/Assets";
import ADDNEWJOBThree from "pages/ADDNEWJOBThree";
import ADDNEWJOBTwo from "pages/ADDNEWJOBTwo";
import Frame125 from "pages/Frame125";
import JOBSFour from "pages/JOBSFour";
import CandidateOnboardingSignup from "pages/CandidateOnboardingSignup";
import Frame126Two from "pages/Frame126Two";
import SelectMultipleCandidate from "pages/SelectMultipleCandidate";
import Settings from "pages/Settings";
import CANDIDATESOne from "pages/CANDIDATESOne";
import JOBSThree from "pages/JOBSThree";
import ADDNEWJOBOne from "pages/ADDNEWJOBOne";
import Icons from "pages/Icons";
import Company from "pages/Company";
import JOBSTwo from "pages/JOBSTwo";
import Frame128 from "pages/Frame128";
import CompanyOnboarding from "pages/CompanyOnboarding";
import DASHBOARDOne from "pages/DASHBOARDOne";
import Frame126One from "pages/Frame126One";
import Frame126 from "pages/Frame126";
import JOBSOne from "pages/JOBSOne";
import DASHBOARD from "pages/DASHBOARD";
import JOBS from "pages/JOBS";
import ADDNEWJOB from "pages/ADDNEWJOB";
import CANDIDATES from "pages/CANDIDATES";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/candidates" element={<CANDIDATES />} />
        <Route path="/addnewjob" element={<ADDNEWJOB />} />
        <Route path="/jobs" element={<JOBS />} />
        <Route path="/dashboard" element={<DASHBOARD />} />
        <Route path="/jobsone" element={<JOBSOne />} />
        <Route path="/frame126" element={<Frame126 />} />
        <Route path="/frame126one" element={<Frame126One />} />
        <Route path="/dashboardone" element={<DASHBOARDOne />} />
        <Route path="/companyonboarding" element={<CompanyOnboarding />} />
        <Route path="/frame128" element={<Frame128 />} />
        <Route path="/jobstwo" element={<JOBSTwo />} />
        <Route path="/company" element={<Company />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/addnewjobone" element={<ADDNEWJOBOne />} />
        <Route path="/jobsthree" element={<JOBSThree />} />
        <Route path="/candidatesone" element={<CANDIDATESOne />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/selectmultiplecandidate"
          element={<SelectMultipleCandidate />}
        />
        <Route path="/frame126two" element={<Frame126Two />} />
        <Route
          path="/candidateonboardingsignup"
          element={<CandidateOnboardingSignup />}
        />
        <Route path="/jobsfour" element={<JOBSFour />} />
        <Route path="/frame125" element={<Frame125 />} />
        <Route path="/addnewjobtwo" element={<ADDNEWJOBTwo />} />
        <Route path="/addnewjobthree" element={<ADDNEWJOBThree />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/resumebank" element={<ResumeBank />} />
        <Route path="/dashboardtwo" element={<DASHBOARDTwo />} />
        <Route path="/frame121" element={<Frame121 />} />
        <Route path="/candidatestwo" element={<CANDIDATESTwo />} />
        <Route path="/resumebankone" element={<ResumeBankOne />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/frame120" element={<Frame120 />} />
        <Route path="/addnewjobfour" element={<ADDNEWJOBFour />} />
        <Route
          path="/companyonboardingone"
          element={<CompanyonboardingOne />}
        />
        <Route path="/dashboardthree" element={<DASHBOARDThree />} />
        <Route path="/dashboardfour" element={<DASHBOARDFour />} />
        <Route path="/macbookpro16two" element={<MacBookPro16Two />} />
        <Route path="/frame129" element={<Frame129 />} />
        <Route path="/resumebanktwo" element={<ResumeBankTwo />} />
        <Route path="/addnewjobfive" element={<ADDNEWJOBFive />} />
        <Route path="/jobsfive" element={<JOBSFive />} />
        <Route path="/frame121one" element={<Frame121One />} />
        <Route path="/jobssix" element={<JOBSSix />} />
        <Route path="/resumebankthree" element={<ResumeBankThree />} />
        <Route path="/addnewjobsix" element={<ADDNEWJOBSix />} />
        <Route path="/frame170" element={<Frame170 />} />
        <Route path="/resumebankfour" element={<ResumeBankFour />} />
        <Route path="/frame128one" element={<Frame128One />} />
        <Route path="/jobsseven" element={<JOBSSeven />} />
        <Route path="/dashboardfive" element={<DASHBOARDFive />} />
        <Route path="/resumebankfive" element={<ResumeBankFive />} />
        <Route path="/dashboardsix" element={<DASHBOARDSix />} />
        <Route path="/dashboardseven" element={<DASHBOARDSeven />} />
        <Route path="/candidatesthree" element={<CANDIDATESThree />} />
        <Route path="/macbookpro16one" element={<MacBookPro16One />} />
        <Route path="/iconsone" element={<IconsOne />} />
        <Route path="/dashboardcloned" element={<DASHBOARDcloned />} />
        <Route path="/resumebanksix" element={<ResumeBankSix />} />
        <Route path="/createajob" element={<Createajob />} />
        <Route path="/dashboardclonedone" element={<DASHBOARDclonedOne />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/frame170one" element={<Frame170One />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/candidateone" element={<CandidateOne />} />
        <Route path="/jobseight" element={<JOBSEight />} />
        <Route
          path="/companyonboardingtwo"
          element={<CompanyOnboardingTwo />}
        />
        <Route path="/testlibrary" element={<TESTLIBRARY />} />
        <Route path="/jobcreation" element={<JobCreation />} />
        <Route path="/resumebankseven" element={<ResumeBankSeven />} />
        <Route path="/jobcreationone" element={<JobCreationOne />} />
        <Route
          path="/companyonboardingthree"
          element={<CompanyonboardingThree />}
        />
        <Route path="/jobsnine" element={<JOBSNine />} />
        <Route path="/dashboardeight" element={<DASHBOARDEight />} />
        <Route path="/addingacandidate" element={<Addingacandidate />} />
        <Route path="/resumebankeight" element={<ResumeBankEight />} />
        <Route path="/resumebanknine" element={<ResumeBankNine />} />
        <Route path="/jobcreationtwo" element={<JobCreationTwo />} />
        <Route path="/candidateview" element={<CandidateView />} />
        <Route path="/frame126three" element={<Frame126Three />} />
        <Route path="/dashboardpages" element={<Dashboardpages />} />
        <Route path="/jobsten" element={<JOBSTen />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
