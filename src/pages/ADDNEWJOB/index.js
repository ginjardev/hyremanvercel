import React from "react";

import { Column, Row, Img, Text, Button, Stack } from "components";

const ADDNEWJOBPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] xl:pr-[3px] lg:pr-[3px] 2xl:pr-[4px] pr-[5px] xl:pt-[3px] lg:pt-[3px] 2xl:pt-[4px] pt-[5px] w-[100%]">
        <Row className="items-center justify-between w-[99%]">
          <aside className="items-center w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-end lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_mail_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_user_bluegray_100.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_ticket.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="ticket"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Test Library
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] mt-[42px] rounded-radius5 w-[85%]">
                  <Img
                    src="images/img_home.png"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                    alt="home"
                  />
                  <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Resume Bank
                  </Text>
                </Row>
                <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1154px] lg:mt-[747px] xl:mt-[855px] 2xl:mt-[962px] rounded-radius5 w-[96%]">
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                    alt="settings"
                  />
                  <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-center justify-end mb-[111px] lg:mb-[71px] xl:mb-[82px] 2xl:mb-[92px] ml-[auto] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] rounded-radius5 w-[95%]">
                  <Img
                    src="images/img_vector.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[8%]"
                    alt="Vector"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    log Out
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[82%]">
            <Row className="bg-white_A700 items-end justify-end xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                JOBS
              </Text>
              <Button
                className="font-medium mb-[4px] lg:ml-[500px] xl:ml-[572px] 2xl:ml-[643px] ml-[772px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[7%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Create
              </Button>
              <Button
                className="flex lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] items-center justify-center xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5px] lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] ml-[46px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] w-[40px]"
                shape="icbCircleBorder20"
                size="smIcn"
                variant="icbFillGray300"
              >
                <Img
                  src="images/img_iconsalerts.png"
                  className="flex items-center justify-center"
                  alt="IconsAlerts"
                />
              </Button>
              <Img
                src="images/img_user_gray_600.png"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] xl:mb-[10px] 2xl:mb-[11px] mb-[14px] lg:mb-[9px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] mr-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                alt="user One"
              />
            </Row>
            <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] w-[98%]">
              <Text className="capitalize font-normal font-poppins mr-[1191px] lg:mr-[771px] xl:mr-[882px] 2xl:mr-[993px] not-italic lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] text-black_900 w-[auto]">
                Add New Job
              </Text>
              <Row className="font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] w-[100%]">
                <Text className="capitalize font-thin xl:my-[5px] lg:my-[5px] 2xl:my-[6px] my-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                  Job Details
                </Text>
                <Img
                  src="images/img_arrowright_black_900.png"
                  className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] my-[17px] w-[4px]"
                  alt="arrowright"
                />
                <Text className="capitalize font-light 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[5px] lg:my-[5px] 2xl:my-[6px] my-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                  Application form
                </Text>
                <Img
                  src="images/img_arrowright_black_900.png"
                  className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] my-[17px] w-[4px]"
                  alt="arrowright One"
                />
                <Text className="capitalize font-bold 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[5px] lg:my-[5px] 2xl:my-[6px] my-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                  preview & publish
                </Text>
                <Text className="font-medium lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] ml-[168px] my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  JOB LINK
                </Text>
                <Button
                  className="2xl:ml-[25px] flex items-center justify-center lg:ml-[19px] ml-[30px] text-center w-[38%] xl:ml-[22px]"
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
                <Img
                  src="images/img_search.png"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] mb-[7px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] w-[40px]"
                  alt="search"
                />
              </Row>
              <Column className="bg-bluegray_100 font-poppins lg:h-[121px] xl:h-[138px] 2xl:h-[156px] h-[186px] 3xl:h-[187px] items-center lg:ml-[340px] xl:ml-[389px] 2xl:ml-[437px] ml-[525px] lg:mr-[430px] xl:mr-[492px] 2xl:mr-[553px] mr-[664px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] mt-[54px] lg:px-[36px] xl:px-[42px] 2xl:px-[47px] px-[57px] rounded-radius50 lg:w-[120px] xl:w-[137px] 2xl:w-[155px] w-[186px]">
                <Text className="font-normal lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] mb-[30px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Add logo
                </Text>
              </Column>
              <Text className="font-bold font-worksans lg:ml-[310px] xl:ml-[355px] 2xl:ml-[399px] ml-[479px] lg:mr-[401px] xl:mr-[459px] 2xl:mr-[517px] mr-[620px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] mt-[49px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 tracking-ls1 w-[auto]">
                JUNIOR MOBILE DEVELOPER
              </Text>
              <Text className="font-poppins font-semibold lg:ml-[359px] xl:ml-[410px] 2xl:ml-[461px] ml-[554px] lg:mr-[448px] xl:mr-[512px] 2xl:mr-[577px] mr-[692px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Accra . Full time
              </Text>
              <Row className="font-poppins items-center 2xl:ml-[110px] ml-[132px] lg:ml-[85px] xl:ml-[97px] lg:mr-[175px] xl:mr-[200px] 2xl:mr-[225px] mr-[270px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] xl:pr-[11px] 2xl:pr-[12px] pr-[15px] lg:pr-[9px] w-[71%]">
                <Column className="lg:pr-[51px] xl:pr-[59px] 2xl:pr-[66px] pr-[80px] w-[16%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Job Type
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Full Time
                  </Text>
                </Column>
                <Column className="lg:pr-[13px] xl:pr-[15px] 2xl:pr-[17px] pr-[21px] w-[20%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Expereience
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Entry Level
                  </Text>
                </Column>
                <Stack className="lg:h-[42px] xl:h-[48px] 2xl:h-[54px] h-[64px] 3xl:h-[65px] w-[38%]">
                  <Column className="absolute left-[0] w-[59%]">
                    <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Salary Range
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      GHC 1.2K - 1.5K
                    </Text>
                  </Column>
                  <Column className="absolute right-[0] w-[42%]">
                    <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Deadline
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      24th May, 2022
                    </Text>
                  </Column>
                </Stack>
                <Column className="lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] ml-[67px] w-[19%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Industry
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    IT & Software Dev’t
                  </Text>
                </Column>
              </Row>
              <Text className="capitalize font-poppins font-semibold 2xl:ml-[107px] ml-[129px] lg:ml-[83px] xl:ml-[95px] lg:mr-[585px] xl:mr-[669px] 2xl:mr-[753px] mr-[903px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                Job description & Responsibilities
              </Text>
              <Text className="font-normal font-poppins leading-[normal] 2xl:ml-[110px] ml-[132px] lg:ml-[85px] xl:ml-[97px] lg:mr-[175px] xl:mr-[200px] 2xl:mr-[225px] mr-[271px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[71%]">
                Your central role in the mobile ecosystem enables you to help
                clients manage the demands of fast-moving environments.  With
                your knowledge of innovative on-the-go solutions, you’ll help
                them become mobility leaders by creating strategic,
                cross-company approaches that increase productivity, enhance
                collaboration and drive more transactions. <br />
                <br />
                The work: <br />
                Develop mobile native and mobile web applications <br />
                Mobile application development, architecture and infrastructure
                design, technology build and deployment activities on multiple
                platforms <br />
                Assist in refining and enhancing mobile architectures and
                frameworks <br />
                Coordinate and work with clients and offshore teams and
                articulate client requirements into technical architecture{" "}
                <br />
                <br />
                Qualifications
                <br />
                Here’s what you need: <br />
                Minimum 1 year hands-on Angular/Ionic, and/or React Native
                and/or Android (Java/Kotlin)/iOS (objective C/Swift) Native
                mobile app development experience <br />
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
                Hybrid Mobile Applications (Angular/Ionic, React Native,
                HTML/CSS, JS, Cordova) <br />
                Server-side/Middleware (REST API services, microservices,
                Node.js, Apigee) <br />
                Native Applications (iOS, Android) <br />
                Development experience with Flutter – backend/frontend
                development
              </Text>
              <Button
                className="font-normal font-poppins lg:ml-[222px] xl:ml-[254px] 2xl:ml-[286px] ml-[343px] lg:mr-[311px] xl:mr-[356px] 2xl:mr-[401px] mr-[481px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] mt-[97px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-center w-[40%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillBlack900"
              >
                Apply
              </Button>
              <Row className="font-poppins items-center justify-end ml-[auto] lg:mr-[41px] xl:mr-[47px] 2xl:mr-[53px] mr-[64px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] mt-[52px] w-[27%]">
                <Button
                  className="font-normal mb-[2px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[38%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="OutlineBlack900"
                >
                  Previous
                </Button>
                <Button
                  className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] ml-[38px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-center w-[52%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillBlack900"
                >
                  Save and Publish
                </Button>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ADDNEWJOBPage;
