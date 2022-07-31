import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Input, Stack } from "components";

const ResumeBankSixPage = () => {
  const navigate = useNavigate();

  function handleNavigate36() {
    navigate("/resumebankseven");
  }
  function handleNavigate40() {
    navigate("/resumebankseven");
  }
  function handleNavigate41() {
    navigate("/dashboardseven");
  }
  function handleNavigate42() {
    navigate("/jobsten");
  }
  function handleNavigate43() {
    navigate("/candidatesthree");
  }
  function handleNavigate44() {
    navigate("/testlibrary");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-poppins items-center mx-[auto] lg:pr-[25px] xl:pr-[29px] 2xl:pr-[33px] pr-[40px] w-[100%]"
        onClick={handleNavigate40}
      >
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] pr-[52px] w-[19%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Column className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] w-[90%]">
                  <Row
                    className="common-pointer items-center rounded-radius5 w-[100%]"
                    onClick={handleNavigate41}
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
                  <div className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Row
                        className="common-pointer items-center rounded-radius5 w-[100%]"
                        onClick={handleNavigate42}
                      >
                        <Img
                          src="images/img_mail.png"
                          className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                          alt="mail"
                        />
                        <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Jobs
                        </Text>
                      </Row>
                      <Row
                        className="common-pointer items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[100%]"
                        onClick={handleNavigate43}
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
                    </Column>
                  </div>
                  <Row
                    className="common-pointer items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[100%]"
                    onClick={handleNavigate44}
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
                </Column>
                <div className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[100%]"
                    leftIcon={
                      <Img
                        src="images/img_home_black_900_24X24.png"
                        className="w-[24px] h-[24px] mr-[20px] text-center lg:w-[15px] lg:h-[16px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:h-[25px]"
                        alt="home"
                      />
                    }
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillWhiteA700"
                  >
                    <div className="bg-transparent capitalize font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                      Resume Bank
                    </div>
                  </Button>
                </div>
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[425px] xl:mt-[486px] 2xl:mt-[547px] mt-[656px] mx-[auto] w-[94%]">
                  <Row className="items-center rounded-radius5 w-[100%]">
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
          <Column className="lg:mb-[187px] xl:mb-[214px] 2xl:mb-[241px] mb-[290px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[81%]">
            <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
                rESUME BANK
              </Text>
              <Button
                className="2xl:ml-[728px] flex items-center justify-center lg:ml-[565px] ml-[873px] text-center w-[5%] xl:ml-[647px]"
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
            <Row className="lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] w-[42%]">
              <Column
                className="common-pointer bg-gray_100 border-bw02 border-gray_646 border-solid lg:p-[12px] xl:p-[14px] 2xl:p-[16px] p-[20px] rounded-radius10 w-[63%]"
                onClick={handleNavigate36}
              >
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Education
                </Text>
                <Input
                  className="bg-transparent border-0 w-[100%]"
                  wrapClassName="2xl:ml-[8px] 2xl:mt-[6px] lg:ml-[6px] lg:mt-[5px] ml-[10px] mt-[8px] w-[94%] xl:ml-[7px] xl:mt-[5px]"
                  name="Input"
                  placeholder=""
                ></Input>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Gender
                </Text>
                <Stack className="bg-white_A700 border border-gray_402 border-solid lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:px-[11px] 2xl:px-[12px] px-[15px] lg:px-[9px] rounded-radius10 w-[94%]">
                  <Img
                    src="images/img_upload.png"
                    className="absolute lg:h-[4px] xl:h-[5px] h-[6px] 3xl:h-[7px] right-[1%] top-[0] w-[3%]"
                    alt="upload"
                  />
                </Stack>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Location
                </Text>
                <Input
                  className="bg-transparent border-0 w-[100%]"
                  wrapClassName="2xl:ml-[8px] 2xl:mt-[6px] lg:ml-[6px] lg:mt-[5px] ml-[10px] mt-[8px] w-[94%] xl:ml-[7px] xl:mt-[5px]"
                  name="Input One"
                  placeholder=""
                ></Input>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Country
                </Text>
                <Input
                  className="bg-transparent border-0 w-[100%]"
                  wrapClassName="2xl:ml-[8px] 2xl:mt-[6px] lg:ml-[6px] lg:mt-[5px] ml-[10px] mt-[8px] w-[94%] xl:ml-[7px] xl:mt-[5px]"
                  name="Input Two"
                  placeholder=""
                ></Input>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Tools
                </Text>
                <Input
                  className="bg-transparent border-0 w-[100%]"
                  wrapClassName="2xl:ml-[8px] 2xl:mt-[6px] lg:ml-[6px] lg:mt-[5px] ml-[10px] mt-[8px] w-[94%] xl:ml-[7px] xl:mt-[5px]"
                  name="Input Three"
                  placeholder=""
                ></Input>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Skills & Expertise
                </Text>
                <Input
                  className="bg-transparent border-0 w-[100%]"
                  wrapClassName="2xl:ml-[8px] 2xl:mt-[6px] lg:ml-[6px] lg:mt-[5px] ml-[10px] mt-[8px] w-[94%] xl:ml-[7px] xl:mt-[5px]"
                  name="Input Four"
                  placeholder=""
                ></Input>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Experience
                </Text>
                <Stack className="bg-white_A700 border border-gray_402 border-solid lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] mb-[118px] lg:mb-[76px] xl:mb-[87px] 2xl:mb-[98px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:px-[11px] 2xl:px-[12px] px-[15px] lg:px-[9px] rounded-radius10 w-[94%]">
                  <Img
                    src="images/img_upload.png"
                    className="absolute lg:h-[4px] xl:h-[5px] h-[6px] 3xl:h-[7px] right-[1%] top-[0] w-[3%]"
                    alt="upload One"
                  />
                </Stack>
              </Column>
              <Text className="font-medium lg:mb-[445px] xl:mb-[510px] 2xl:mb-[573px] mb-[688px] lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] ml-[74px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                No search results
              </Text>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ResumeBankSixPage;
