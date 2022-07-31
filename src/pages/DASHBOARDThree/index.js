import React from "react";

import { Column, Row, Img, Text, Button, Line, Stack } from "components";

const DASHBOARDThreePage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[21px] xl:pr-[24px] 2xl:pr-[27px] pr-[33px] w-[19%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="bg-white_A700 items-center justify-end lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_vector_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="Vector"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_mail.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
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
                    src="images/img_user_bluegray_100.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user One"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Appointments
                  </Text>
                </Row>
                <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[408px] xl:mt-[467px] 2xl:mt-[525px] mt-[630px] rounded-radius5 w-[96%]">
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                    alt="settings"
                  />
                  <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-center justify-end lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] mb-[46px] ml-[auto] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] rounded-radius5 w-[95%]">
                  <Img
                    src="images/img_vector.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[8%]"
                    alt="Vector One"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    log Out
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="mb-[100px] lg:mb-[64px] xl:mb-[74px] 2xl:mb-[83px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[81%]">
            <Row className="bg-white_A700 items-end justify-end xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                DASHBOARD
              </Text>
              <Button
                className="font-medium mb-[4px] lg:ml-[483px] xl:ml-[553px] 2xl:ml-[622px] ml-[746px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[7%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add
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
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] xl:mb-[10px] 2xl:mb-[11px] mb-[14px] lg:mb-[9px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] mr-[10px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                alt="user Two"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] w-[100%]">
              <Column className="bg-white_A700 mt-[2px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] py-[22px] rounded-radius10 shadow-bs w-[31%]">
                <Text className="capitalize font-medium lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] ml-[34px] lg:mr-[120px] xl:mr-[137px] 2xl:mr-[155px] mr-[186px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Jobs
                </Text>
                <Line className="bg-bluegray_101 h-[2px] lg:mb-[196px] xl:mb-[224px] 2xl:mb-[252px] mb-[303px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]" />
              </Column>
              <div className="overflow-x-auto w-[31%]">
                <Row className="bg-white_A700 justify-end overflow-auto lg:py-[12px] xl:py-[14px] 2xl:py-[16px] py-[20px] rounded-radius10 shadow-bs w-[100%]">
                  <Column className="lg:mb-[197px] xl:mb-[226px] 2xl:mb-[254px] mb-[305px] mt-[2px] w-[100%]">
                    <Text className="capitalize font-medium lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] ml-[34px] lg:mr-[154px] xl:mr-[176px] 2xl:mr-[198px] mr-[238px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Candidates
                    </Text>
                    <Line className="bg-bluegray_101 h-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]" />
                  </Column>
                  <Column className="lg:mb-[198px] xl:mb-[227px] 2xl:mb-[256px] mb-[307px] w-[100%]">
                    <Text className="capitalize font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] ml-[24px] lg:mr-[226px] xl:mr-[259px] 2xl:mr-[291px] mr-[350px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      appointments
                    </Text>
                    <Line className="bg-bluegray_101 h-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]" />
                  </Column>
                </Row>
              </div>
              <Column className="bg-white_A700 items-end xl:p-[10px] 2xl:p-[11px] p-[14px] lg:p-[9px] rounded-radius10 shadow-bs w-[31%]">
                <Row className="border border-black_900 border-solid items-center justify-end lg:mb-[218px] xl:mb-[249px] 2xl:mb-[281px] mb-[337px] ml-[auto] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius195 w-[36%]">
                  <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    12/7/2022
                  </Text>
                  <Img
                    src="images/img_iconartwork_gray_646_22X20.png"
                    className="2xl:h-[10px] h-[11px] 3xl:h-[12px] lg:h-[8px] xl:h-[9px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] ml-[26px] mr-[11px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] w-[8%]"
                    alt="IconArtwork"
                  />
                </Row>
              </Column>
            </Row>
            <Stack className="bg-bluegray_100 h-[113px] 3xl:h-[114px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] 2xl:ml-[1004px] ml-[1204px] lg:ml-[780px] xl:ml-[892px] lg:mt-[246px] xl:mt-[282px] 2xl:mt-[317px] mt-[381px] lg:px-[20px] xl:px-[22px] 2xl:px-[25px] px-[31px] rounded-radius50 shadow-bs w-[113px] lg:w-[73px] xl:w-[83px] 2xl:w-[94px]">
              <Img
                src="images/img_creditcard_black_900.png"
                className="absolute lg:h-[33px] xl:h-[38px] 2xl:h-[42px] h-[50px] 3xl:h-[51px] inset-[0] justify-center m-[auto] lg:w-[32px] xl:w-[37px] 2xl:w-[41px] w-[50px]"
                alt="creditcard"
              />
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DASHBOARDThreePage;
