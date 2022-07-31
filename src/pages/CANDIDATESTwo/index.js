import React from "react";

import { Row, Column, Img, Text, Button } from "components";

const CANDIDATESTwoPage = () => {
  return (
    <>
      <Row className="bg-gray_200 font-poppins mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <aside className="items-center w-[17%]">
          <Column className="">
            <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
              <Img
                src="images/img_group100000430.png"
                className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mr-[44px] xl:mr-[50px] 2xl:mr-[56px] mr-[68px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                alt="Group100000430"
              />
              <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[84%]">
                <Img
                  src="images/img_menu.png"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                  alt="menu"
                />
                <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-bluegray_100 w-[auto]">
                  Dashboard
                </Text>
              </Row>
              <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[84%]">
                <Img
                  src="images/img_mail.png"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                  alt="mail"
                />
                <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Jobs
                </Text>
              </Row>
              <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[84%]">
                <Img
                  src="images/img_user_white_A700.png"
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                  alt="user"
                />
                <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Candidates
                </Text>
              </Row>
              <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[84%]">
                <Img
                  src="images/img_download.png"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                  alt="download"
                />
                <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Test Library
                </Text>
              </Row>
              <Row className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] mt-[42px] mx-[auto] rounded-radius5 w-[85%]">
                <Img
                  src="images/img_home.png"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                  alt="home"
                />
                <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Resume Bank
                </Text>
              </Row>
              <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[368px] xl:mt-[421px] 2xl:mt-[474px] mt-[569px] rounded-radius5 w-[96%]">
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                  alt="settings"
                />
                <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Settings
                </Text>
              </Row>
              <Row className="items-center justify-end ml-[auto] lg:my-[24px] xl:my-[28px] 2xl:my-[31px] my-[38px] rounded-radius5 w-[95%]">
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
        <Row className="bg-white_A700 items-end justify-end mb-[1036px] lg:mb-[671px] xl:mb-[768px] 2xl:mb-[863px] xl:ml-[11px] 2xl:ml-[12px] ml-[15px] lg:ml-[9px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[82%]">
          <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
            aPPOINTMENTS
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
      </Row>
    </>
  );
};

export default CANDIDATESTwoPage;