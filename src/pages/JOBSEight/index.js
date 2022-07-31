import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, SelectBox, Stack } from "components";

const JOBSEightPage = () => {
  const navigate = useNavigate();

  function handleNavigate30() {
    navigate("/resumebanksix");
  }
  function handleNavigate31() {
    navigate("/resumebankeight");
  }
  function handleNavigate35() {
    navigate("/testlibrary");
  }
  function handleNavigate37() {
    navigate("/dashboardseven");
  }
  function handleNavigate38() {
    navigate("/candidatesthree");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pr-[25px] xl:pr-[29px] 2xl:pr-[33px] pr-[40px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] pr-[52px] w-[19%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Row
                  className="common-pointer items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] rounded-radius5 w-[90%]"
                  onClick={handleNavigate37}
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
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] mx-[auto] w-[94%]">
                  <Row
                    className="common-pointer items-center rounded-radius5 w-[96%]"
                    onClick={handleNavigate38}
                  >
                    <Img
                      src="images/img_user_white_A700.png"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                      alt="user"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Candidates
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[96%]"
                    onClick={handleNavigate35}
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
                      onClick={handleNavigate30}
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
          <Column className="lg:mb-[387px] xl:mb-[443px] 2xl:mb-[498px] mb-[598px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[81%]">
            <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
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
                alt="user One"
              />
            </Row>
            <Row className="items-center lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] ml-[16px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[98%]">
              <SelectBox
                className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[9%]"
                placeholderClassName="bg-transparent text-black_900"
                name="AllJobs"
                placeholder="All Jobs"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.png"
                    className="w-[10.5px] h-[4.72px] mr-[0] lg:w-[6px] lg:h-[4px] xl:w-[7px] xl:h-[4px] 2xl:w-[8px] 2xl:h-[4px] 3xl:w-[10px] 3xl:h-[5px]"
                    alt="arrow_down"
                  />
                }
                shape="oundedBorder10"
                variant="dropdown0"
              ></SelectBox>
              <Row className="items-center justify-center lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] ml-[78px] rounded-radius10 w-[19%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_400 w-[auto]">
                  Sort by
                </Text>
                <SelectBox
                  className="bg-transparent font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] ml-[38px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[63%]"
                  placeholderClassName="bg-transparent text-black_900"
                  name="Group257"
                  placeholder="Date Created"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[10.5px] h-[4.72px] mr-[0] lg:w-[6px] lg:h-[4px] xl:w-[7px] xl:h-[4px] 2xl:w-[8px] 2xl:h-[4px] 3xl:w-[10px] 3xl:h-[5px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </Row>
              <Button
                className="2xl:ml-[656px] flex items-center justify-center lg:ml-[510px] ml-[787px] text-center w-[7%] xl:ml-[583px]"
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
                  Add job
                </div>
              </Button>
            </Row>
            <Column
              className="common-pointer bg-white_A700 border-bw05 border-gray_500 border-solid items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] lg:p-[11px] xl:p-[12px] 2xl:p-[14px] p-[17px] rounded-radius20 w-[22%]"
              onClick={handleNavigate31}
            >
              <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] mt-[6px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_612 w-[auto]">
                IT & SOFTWARE DEVELOPMENT
              </Text>
              <Text className="capitalize font-medium leading-[normal] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 tracking-ls1 w-[91%]">
                Junior Mobile Developer
              </Text>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] mt-[34px] w-[98%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Candidates
                </Text>
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Status
                </Text>
              </Row>
              <Row className="mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[98%]">
                <Stack className="bg-bluegray_104 lg:h-[47px] xl:h-[53px] 2xl:h-[60px] h-[71px] 3xl:h-[72px] px-[2px] rounded-radius10 w-[47%]">
                  <Text className="absolute bottom-[0] font-medium inset-x-[0] mx-[auto] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 uppercase w-[max-content]">
                    25
                  </Text>
                  <Text className="absolute font-normal inset-x-[0] mx-[auto] not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 top-[1%] w-[max-content]">
                    TOTAL
                  </Text>
                </Stack>
                <div className="bg-green_600 h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] mb-[36px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] rounded-radius50 w-[10px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px]"></div>
                <Text className="font-medium lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] mb-[29px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-green_601 w-[auto]">
                  On-going
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] mb-[16px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] mt-[45px] w-[98%]">
                <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_501 w-[auto]">
                  Published
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-blue_800 w-[auto]">
                  See Details
                </Text>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default JOBSEightPage;
