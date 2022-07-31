import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  CheckBox,
  Stack,
  SelectBox,
} from "components";

const JOBSPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="items-center w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mr-[44px] xl:mr-[50px] 2xl:mr-[56px] mr-[68px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] mt-[47px] mx-[auto] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] mx-[auto] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_mail_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] mx-[auto] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_user_bluegray_100.png"
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
                    test Library
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[85%]">
                  <Img
                    src="images/img_calendar.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[10%]"
                    alt="calendar"
                  />
                  <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    company
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
                <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[321px] xl:mt-[367px] 2xl:mt-[413px] mt-[496px] rounded-radius5 w-[96%]">
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
          <Column className="items-center lg:mb-[419px] xl:mb-[479px] 2xl:mb-[539px] mb-[647px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[83%]">
            <Column className="w-[97%]">
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
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] xl:mb-[10px] 2xl:mb-[11px] mb-[14px] lg:mb-[9px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] mr-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                  alt="user One"
                />
              </Row>
              <Row className="items-center lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] mt-[46px] w-[46%]">
                <Button
                  className="flex items-center justify-center rotate-[180deg] w-[11%]"
                  shape="icbRoundedBorder33"
                  size="lgIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_frame132.png"
                    className="flex items-center justify-center"
                    alt="Frame132"
                  />
                </Button>
                <Text className="font-medium lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] ml-[26px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                  JUNIOR MOBILE DEVELOPER
                </Text>
                <Img
                  src="images/img_iconartwork.png"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] ml-[49px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                  alt="IconArtwork"
                />
              </Row>
              <Row className="justify-end ml-[auto] mt-[2px] w-[93%]">
                <Column className="lg:pr-[437px] xl:pr-[500px] 2xl:pr-[562px] pr-[675px] w-[84%]">
                  <Row className="items-center w-[48%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900_7f w-[auto]">
                      Full time
                    </Text>
                    <Text className="font-medium lg:ml-[36px] xl:ml-[42px] 2xl:ml-[47px] ml-[57px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900_7f w-[auto]">
                      Accra
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] mt-[40px] w-[100%]">
                    <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-gray_607 w-[auto]">
                      JOB DETAILS
                    </Text>
                    <Text className="font-bold lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                      CANDIDATES
                    </Text>
                    <Text className="font-bold lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900_7f w-[auto]">
                      NOTES
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="font-normal lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] mb-[7px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-center w-[16%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillBlack900"
                >
                  Submit Candidate
                </Button>
              </Row>
            </Column>
            <Column className="items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] w-[100%]">
              <Line className="bg-gray_402 h-[1px] w-[100%]" />
              <Line className="bg-gray_402 h-[1px] w-[100%]" />
              <Line className="bg-black_900 h-[1px] w-[10%]" />
              <Row className="bg-gray_401 items-center mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:p-[14px] xl:p-[17px] 2xl:p-[19px] p-[23px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[97%]">
                <CheckBox
                  className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] pl-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  name="FullName"
                  label="Full Name"
                ></CheckBox>
                <Text className="font-medium lg:ml-[114px] xl:ml-[130px] 2xl:ml-[146px] ml-[176px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Email
                </Text>
                <Text className="font-medium lg:ml-[158px] xl:ml-[180px] 2xl:ml-[203px] ml-[244px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Phone
                </Text>
                <Stack className="lg:h-[17px] xl:h-[20px] 2xl:h-[22px] h-[26px] 3xl:h-[27px] lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] ml-[97px] w-[16%]">
                  <Text className="absolute font-medium right-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 top-[0] w-[auto]">
                    Test Score
                  </Text>
                  <Text className="absolute bottom-[0] font-medium left-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Skills Match
                  </Text>
                </Stack>
                <Text className="font-medium lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] ml-[70px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Owner
                </Text>
                <Text className="font-medium xl:ml-[105px] 2xl:ml-[118px] ml-[142px] lg:ml-[92px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Stage
                </Text>
              </Row>
              <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] mt-[33px] w-[93%]">
                <CheckBox
                  className="font-medium mt-[1px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] pl-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  name="ReginaBoatema"
                  label="Regina Boatema"
                ></CheckBox>
                <Text className="font-medium mb-[1px] 2xl:ml-[103px] ml-[124px] lg:ml-[80px] xl:ml-[91px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  reginaboatema@gmail.com
                </Text>
                <Text className="font-medium mb-[1px] lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] ml-[59px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  0209414362
                </Text>
                <Text className="font-medium lg:ml-[52px] xl:ml-[60px] 2xl:ml-[67px] ml-[81px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  98 %
                </Text>
                <Text className="font-medium ml-[106px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  0
                </Text>
                <Text className="font-medium ml-[105px] lg:ml-[68px] xl:ml-[77px] 2xl:ml-[87px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Mista Boakye
                </Text>
                <SelectBox
                  className="bg-transparent font-medium lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] ml-[78px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[7%]"
                  placeholderClassName="bg-transparent text-black_900"
                  name="FrameSixtyOne"
                  placeholder="Assigned"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[9.19px] h-[4.99px] mr-[0] lg:w-[5px] lg:h-[4px] xl:w-[6px] xl:h-[4px] 2xl:w-[7px] 2xl:h-[5px] 3xl:w-[9px] 3xl:h-[5px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Line className="bg-gray_600 lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] ml-[36px] my-[2px] rotate-[90deg] w-[4px]" />
              </Row>
              <Line className="bg-gray_402 h-[1px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[96%]" />
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default JOBSPage;
