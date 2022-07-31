import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Column, Slider, Row, Text, Button, Img } from "components";

const JobCreationTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/jobseight");
  }
  function handleNavigate7() {
    navigate("/jobcreationone");
  }
  function handleNavigate8() {
    navigate("/dashboardseven");
  }
  function handleNavigate9() {
    navigate("/candidatesthree");
  }
  function handleNavigate10() {
    navigate("/testlibrary");
  }
  function handleNavigate11() {
    navigate("/resumebanksix");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[1091px] xl:h-[1248px] 2xl:h-[1404px] h-[1683px] 3xl:h-[1684px] mx-[auto] lg:pr-[25px] xl:pr-[29px] 2xl:pr-[33px] pr-[40px] w-[100%]">
        <Column className="absolute inset-x-[0] mx-[auto] top-[1%] w-[98%]">
          <Slider
            slidesToShow={2}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00]"
            ref={sliderRef}
            className="w-[100%]"
            items={[...Array(6)].map(() => (
              <>
                <header className="w-[100%]">
                  <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                    <Text className="capitalize cursor-pointer hover:font-medium font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
                      JOBS
                    </Text>
                    <Button
                      className="2xl:ml-[833px] flex items-center justify-center lg:ml-[647px] ml-[999px] text-center w-[5%] xl:ml-[740px]"
                      leftIcon={
                        <Img
                          src="images/img_grid_white_A700.png"
                          className="w-[10px] h-[10px] mr-[10px] text-center lg:w-[6px] lg:h-[7px] lg:mr-[6px] xl:w-[7px] xl:h-[8px] xl:mr-[7px] 2xl:w-[8px] 2xl:h-[9px] 2xl:mr-[8px] 3xl:h-[11px]"
                          alt="grid"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillBlue800"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                        Add
                      </div>
                    </Button>
                    <Button
                      className="flex lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] items-center justify-center lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] w-[40px]"
                      shape="icbCircleBorder20"
                      size="smIcn"
                      variant="icbFillGray300"
                    >
                      <Img
                        src="images/img_iconsalerts_gray_646.png"
                        className="flex items-center justify-center"
                        alt="IconsAlerts"
                      />
                    </Button>
                    <Img
                      src="images/img_user_2.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] ml-[49px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="user"
                    />
                  </Row>
                </header>
              </>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return <div className="" />;
              }
              return <div className="" role="button" tabIndex={0} />;
            }}
          />
          <Row className="items-center lg:ml-[280px] xl:ml-[320px] 2xl:ml-[360px] ml-[432px] lg:mr-[634px] xl:mr-[725px] 2xl:mr-[816px] mr-[979px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] w-[15%]">
            <Img
              src="images/img_arrowright_black_900.png"
              className="cursor-pointer h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[2%]"
              onClick={() => sliderRef.current?.slidePrev()}
              alt="arrowright"
            />
            <Img
              src="images/img_arrowright_black_900.png"
              className="cursor-pointer h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[150px] xl:ml-[171px] 2xl:ml-[193px] ml-[232px] w-[2%]"
              onClick={() => sliderRef.current?.slideNext()}
              alt="arrowright One"
            />
          </Row>
        </Column>
        <Row className="absolute items-center justify-center left-[18%] top-[6%] w-[37%]">
          <Text className="capitalize font-thin lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
            Job Details
          </Text>
          <Text className="capitalize font-thin lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] ml-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
            Application form
          </Text>
          <Text className="capitalize font-bold lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] ml-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
            preview & publish
          </Text>
        </Row>
        <Column className="absolute h-[max-content] inset-y-[0] items-center left-[18%] my-[auto] w-[58%]">
          <Img
            src="images/img_ellipse32.png"
            className="lg:h-[121px] xl:h-[138px] 2xl:h-[156px] h-[186px] 3xl:h-[187px] rounded-radius50 w-[auto]"
            alt="EllipseThirtyTwo"
          />
          <Text className="font-bold font-worksans lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] mt-[49px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 tracking-ls1 w-[auto]">
            JUNIOR MOBILE DEVELOPER
          </Text>
          <Text className="font-poppins font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Accra . Full time
          </Text>
          <Column className="font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] w-[100%]">
            <Row className="lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] pr-[6px] w-[100%]">
              <Column className="lg:pr-[51px] xl:pr-[59px] 2xl:pr-[66px] pr-[80px] w-[16%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Job Type
                </Text>
                <Text className="font-normal mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Full Time
                </Text>
              </Column>
              <Column className="lg:pr-[13px] xl:pr-[15px] 2xl:pr-[17px] pr-[21px] w-[20%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Expereience
                </Text>
                <Text className="font-normal mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Entry Level
                </Text>
              </Column>
              <Stack className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] h-[58px] 3xl:h-[59px] w-[37%]">
                <Column className="absolute left-[0] w-[59%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Salary Range
                  </Text>
                  <Text className="font-normal mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    GHC 1200 - 1500
                  </Text>
                </Column>
                <Column className="absolute right-[0] w-[42%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Deadline
                  </Text>
                  <Text className="font-normal mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    24th May, 2022
                  </Text>
                </Column>
              </Stack>
              <Column className="lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] ml-[67px] w-[19%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Industry
                </Text>
                <Text className="font-normal mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  IT & Software Dev’t
                </Text>
              </Column>
            </Row>
            <Text className="capitalize font-semibold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
              Job description & Responsibilities
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]">
              Your central role in the mobile ecosystem enables you to help
              clients manage the demands of fast-moving environments.  With your
              knowledge of innovative on-the-go solutions, you’ll help them
              become mobility leaders by creating strategic, cross-company
              approaches that increase productivity, enhance collaboration and
              drive more transactions. <br />
              <br />
              The work: <br />
              Develop mobile native and mobile web applications <br />
              Mobile application development, architecture and infrastructure
              design, technology build and deployment activities on multiple
              platforms <br />
              Assist in refining and enhancing mobile architectures and
              frameworks <br />
              Coordinate and work with clients and offshore teams and articulate
              client requirements into technical architecture <br />
              <br />
              Qualifications
              <br />
              Here’s what you need: <br />
              Minimum 1 year hands-on Angular/Ionic, and/or React Native and/or
              Android (Java/Kotlin)/iOS (objective C/Swift) Native mobile
              app development experience <br />
              Minimum 1 year of experience troubleshooting, diagnosing,
              prototyping, gathering requirements or supporting mobile app
              development as part of a team <br />
              Bachelor's degree or equivalent (minimum 12 years) work
              experience  <br />
              <br />
              Bonus points if: <br />
              Experience working with Angular version 5 or 6 and/or Ionic
              version 3 or 4 preferred <br />
              Must have contributed significantly to at least two mobile
              applications and be able to describe those contributions <br />
              Cumulative mobile app development, design, and/or architecture
              experience with any of the following areas: <br />
              Hybrid Mobile Applications (Angular/Ionic, React Native, HTML/CSS,
              JS, Cordova) <br />
              Server-side/Middleware (REST API services, microservices, Node.js,
              Apigee) <br />
              Native Applications (iOS, Android) <br />
              Development experience with Flutter – backend/frontend development
            </Text>
            <Button
              className="font-normal lg:ml-[188px] xl:ml-[215px] 2xl:ml-[242px] ml-[291px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] mt-[72px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-center w-[53%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillBlue800"
            >
              Apply
            </Button>
          </Column>
        </Column>
        <Row className="absolute items-center justify-center right-[3%] top-[6%] w-[37%]">
          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            JOB LINK
          </Text>
          <Button
            className="2xl:ml-[25px] flex items-center justify-center lg:ml-[19px] ml-[30px] text-center w-[84%] xl:ml-[22px]"
            rightIcon={
              <Img
                src="images/img_mobile.png"
                className="w-[19px] ml-[20px] text-center lg:w-[12px] lg:ml-[12px] xl:w-[14px] xl:ml-[14px] 2xl:w-[15px] 2xl:ml-[16px]"
                alt="mobile"
              />
            }
            shape="RoundedBorder10"
            size="md"
            variant="OutlineGray402"
          >
            <div className="bg-transparent font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_700">
              https://app.hyreman.com/job/juniordeveloper/1_w$34
            </div>
          </Button>
        </Row>
        <Img
          src="images/img_search_black_900.png"
          className="absolute lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] right-[0] top-[6%] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] w-[40px]"
          alt="search"
        />
        <Row className="absolute bottom-[6%] items-center justify-center right-[8%] w-[15%]">
          <Column
            className="common-pointer bg-bluegray_102 items-center xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[34%]"
            onClick={handleNavigate7}
          >
            <Column className="items-center rounded-radius10 w-[88%]">
              <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-blue_800 w-[auto]">
                Previous
              </Text>
            </Column>
          </Column>
          <Button
            className="common-pointer font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[58%]"
            onClick={handleNavigate6}
            shape="RoundedBorder10"
            size="md"
            variant="FillBlue800"
          >
            Save and Publish
          </Button>
        </Row>
        <aside className="absolute items-center left-[0] w-[16%]">
          <Column className="">
            <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
              <Img
                src="images/img_group100000430_white_A700.png"
                className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                alt="Group100000430 One"
              />
              <Row
                className="common-pointer items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] rounded-radius5 w-[90%]"
                onClick={handleNavigate8}
              >
                <Img
                  src="images/img_plus_white_A700.png"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                  alt="plus"
                />
                <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Dashboard
                </Text>
              </Row>
              <div className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                <Row className="bg-white_A700 items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_mail_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] ml-[2px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Jobs
                  </Text>
                </Row>
              </div>
              <Column className="items-center lg:mb-[394px] xl:mb-[450px] 2xl:mb-[507px] mb-[608px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] mx-[auto] w-[94%]">
                <Row
                  className="common-pointer items-center rounded-radius5 w-[96%]"
                  onClick={handleNavigate9}
                >
                  <Img
                    src="images/img_user_white_A700.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user One"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[96%]"
                  onClick={handleNavigate10}
                >
                  <Img
                    src="images/img_download.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="download"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Test Library
                  </Text>
                </Row>
                <div className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] w-[97%]">
                  <Row
                    className="common-pointer items-center rounded-radius5 w-[100%]"
                    onClick={handleNavigate11}
                  >
                    <Img
                      src="images/img_home_white_A700.png"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                      alt="home"
                    />
                    <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Resume Bank
                    </Text>
                  </Row>
                </div>
                <Row className="items-center lg:mt-[430px] xl:mt-[492px] 2xl:mt-[553px] mt-[664px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_settings_white_A700.png"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                    alt="settings"
                  />
                  <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_vector.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="Vector"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    log Out
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default JobCreationTwoPage;
