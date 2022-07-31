import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const JOBSTwoPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="items-center w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] mt-[46px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-bluegray_100 w-[auto]">
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
                <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[405px] xl:mt-[464px] 2xl:mt-[522px] mt-[626px] rounded-radius5 w-[96%]">
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
                    alt="Vector"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    log Out
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="w-[82%]">
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
            <Row className="2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] mr-[102px] lg:mr-[66px] xl:mr-[75px] 2xl:mr-[85px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] mt-[21px] w-[92%]">
              <Column className="bg-white_A700 items-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:p-[18px] xl:p-[20px] 2xl:p-[23px] p-[28px] w-[21%]">
                <Text className="font-bold lg:mb-[550px] xl:mb-[629px] 2xl:mb-[707px] mb-[849px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] mt-[21px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  JUNIOR MOBILE DEVELOPER
                </Text>
              </Column>
              <Button
                className="font-normal lg:mb-[585px] xl:mb-[669px] 2xl:mb-[753px] mb-[903px] lg:ml-[580px] xl:ml-[664px] 2xl:ml-[747px] ml-[896px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-center w-[9%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillBlack900"
              >
                Add Job
              </Button>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default JOBSTwoPage;
