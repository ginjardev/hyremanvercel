import React from "react";

import { Column, Row, Img, Text, Input, Button, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AssetsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] lg:p-[32px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] p-[67px] w-[100%]">
        <Row className="lg:mb-[17px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] mb-[36px] 3xl:ml-[10px] ml-[14px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[93%]">
          <Column className="bg-bluegray_900 lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[22px] mt-[127px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[78px] 3xl:mt-[94px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] p-[19px] lg:p-[9px] w-[13%]">
            <Img
              src="images/img_group100000430_white_A700.png"
              className="lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] h-[45px] 3xl:ml-[11px] ml-[16px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[21px] mr-[29px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[5px] w-[80%]"
              alt="Group100000430"
            />
            <Column className="items-center lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[46px] mb-[62px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[35px] w-[100%]">
              <Row className="items-center rounded-radius5 w-[96%]">
                <Img
                  src="images/img_plus_white_A700.png"
                  className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] h-[18px] lg:h-[9px] 2xl:w-[11px] 3xl:w-[13px] w-[18px] lg:w-[8px] xl:w-[9px]"
                  alt="plus"
                />
                <Text className="capitalize font-medium lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[23px] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                  Dashboard
                </Text>
              </Row>
              <div className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] mt-[27px] w-[96%]">
                <Row className="items-center rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_mail.png"
                    className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] h-[18px] lg:h-[9px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[22px] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                    Jobs
                  </Text>
                </Row>
              </div>
              <Row className="items-center lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] mt-[27px] rounded-radius5 w-[96%]">
                <Img
                  src="images/img_user_white_A700.png"
                  className="3xl:h-[11px] h-[14px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[9%]"
                  alt="user"
                />
                <Text className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[22px] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                  Candidates
                </Text>
              </Row>
              <Row className="items-center lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] mt-[27px] rounded-radius5 w-[96%]">
                <Img
                  src="images/img_download.png"
                  className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] h-[20px] my-[0] xl:w-[11px] 2xl:w-[12px] 3xl:w-[14px] w-[20px] lg:w-[9px]"
                  alt="download"
                />
                <Text className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[22px] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                  Test Library
                </Text>
              </Row>
              <div className="lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[25px] w-[97%]">
                <Row className="items-center rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_home_white_A700.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[24px] lg:w-[11px] xl:w-[13px] 2xl:w-[14px] 3xl:w-[17px] w-[24px]"
                    alt="home"
                  />
                  <Text className="capitalize font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[20px] lg:ml-[9px] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                    Resume Bank
                  </Text>
                </Row>
              </div>
              <Row className="items-center lg:mt-[320px] xl:mt-[366px] 2xl:mt-[411px] 3xl:mt-[494px] mt-[664px] rounded-radius5 w-[100%]">
                <Img
                  src="images/img_settings_white_A700.png"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] h-[22px] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] w-[22px]"
                  alt="settings"
                />
                <Text className="capitalize font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] ml-[21px] my-[0] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                  Settings
                </Text>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[36px] rounded-radius5 w-[100%]">
                <Img
                  src="images/img_vector.png"
                  className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] h-[18px] lg:h-[9px] w-[9%]"
                  alt="Vector"
                />
                <Text className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[22px] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                  log Out
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[20px] lg:ml-[9px] lg:pr-[164px] xl:pr-[187px] 2xl:pr-[211px] 3xl:pr-[253px] pr-[341px] w-[84%]">
            <Row className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[28px] lg:mr-[420px] xl:mr-[480px] 2xl:mr-[540px] 3xl:mr-[648px] mr-[872px] w-[34%]">
              <Img
                src="images/img_mail_black_900.png"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] h-[18px] lg:h-[9px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[24px] w-[4%]"
                alt="mail One"
              />
              <Img
                src="images/img_user.png"
                className="3xl:h-[11px] h-[14px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[6px] lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[25px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[30px] w-[4%]"
                alt="user One"
              />
              <Img
                src="images/img_grid_black_900.png"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] h-[18px] lg:h-[9px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[5px] 2xl:ml-[10px] 3xl:ml-[12px] ml-[17px] lg:ml-[8px] xl:ml-[9px] lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] mt-[27px] 2xl:w-[11px] 3xl:w-[13px] w-[18px] lg:w-[8px] xl:w-[9px]"
                alt="grid"
              />
              <Img
                src="images/img_settings_black_900.png"
                className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] h-[22px] mb-[2px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[31px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[26px] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] w-[22px]"
                alt="settings One"
              />
              <Input
                className="bg-transparent border-0 capitalize font-medium p-[0] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="2xl:ml-[29px] 3xl:ml-[34px] flex lg:ml-[22px] ml-[47px] w-[57%] xl:ml-[25px]"
                name="DASHBOARD Six"
                placeholder="Dashboard"
                prefix={
                  <Img
                    src="images/img_vector_black_900.png"
                    className="w-[18px] h-[18px] ml-[13px] mr-[23px] lg:w-[8px] lg:h-[9px] lg:ml-[6px] lg:mr-[11px] xl:w-[9px] xl:h-[10px] xl:ml-[7px] xl:mr-[12px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 2xl:mr-[14px] 3xl:w-[13px] 3xl:h-[14px] 3xl:ml-[9px] 3xl:mr-[17px] rounded-radius2 my-[auto]"
                    alt="Vector"
                  />
                }
                shape="RoundedBorder5"
                size="lg"
                variant="FillWhiteA700"
              ></Input>
            </Row>
            <Row className="xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] ml-[184px] lg:ml-[88px] lg:mr-[388px] xl:mr-[444px] 2xl:mr-[500px] 3xl:mr-[600px] mr-[807px] mt-[13px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[28%]">
              <Img
                src="images/img_mobile_black_900.png"
                className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] h-[20px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[18px] lg:mb-[8px] xl:mb-[9px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[14px] w-[20px] lg:w-[9px]"
                alt="mobile"
              />
              <Img
                src="images/img_vector_black_900_18X20.png"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] h-[18px] lg:h-[9px] ml-[112px] lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[83px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[20px] lg:mt-[9px] w-[5%]"
                alt="Vector One"
              />
              <Img
                src="images/img_calendar_black_900_22X20.png"
                className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] h-[22px] xl:ml-[114px] 2xl:ml-[128px] 3xl:ml-[154px] ml-[207px] lg:ml-[99px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[8px] w-[5%]"
                alt="calendar"
              />
            </Row>
            <Column className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[26px] w-[100%]">
              <Row className="bg-white_A700 border border-black_900_3f border-solid items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                <Text className="capitalize font-medium mb-[1px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[23px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-[30px] text-black_900 w-[auto]">
                  DASHBOARD
                </Text>
                <Button
                  className="2xl:ml-[552px] 3xl:ml-[662px] flex items-center justify-center lg:ml-[429px] ml-[891px] text-center w-[5%] xl:ml-[491px]"
                  leftIcon={
                    <Img
                      src="images/img_grid_white_A700.png"
                      className="w-[10px] h-[10px] mr-[10px] text-center lg:w-[4px] lg:h-[5px] lg:mr-[4px] xl:w-[5px] xl:h-[6px] xl:mr-[5px] 2xl:w-[6px] 2xl:h-[7px] 2xl:mr-[6px] 3xl:w-[7px] 3xl:h-[8px] 3xl:mr-[7px]"
                      alt="grid"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillBlue800"
                >
                  <div className="bg-transparent font-normal not-italic 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px]">
                    Add
                  </div>
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] h-[40px] items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[40px] lg:w-[19px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px] w-[40px]"
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
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] h-[22px] lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[49px] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] w-[22px]"
                  alt="user Two"
                />
              </Row>
              <Row className="ml-[4px] lg:mr-[262px] xl:mr-[300px] 2xl:mr-[337px] 3xl:mr-[405px] mr-[545px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[30px] w-[60%]">
                <Column className="lg:mb-[40px] xl:mb-[45px] 2xl:mb-[51px] 3xl:mb-[61px] mb-[83px] pr-[124px] lg:pr-[59px] xl:pr-[68px] 2xl:pr-[76px] 3xl:pr-[92px] w-[67%]">
                  <Column className="bg-white_A700 border border-gray_646 border-solid 2xl:py-[10px] 3xl:py-[12px] py-[17px] lg:py-[8px] xl:py-[9px] rounded-radius10 w-[100%]">
                    <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[25px] lg:mr-[173px] xl:mr-[198px] 2xl:mr-[223px] 3xl:mr-[268px] mr-[361px] 3xl:text-[11px] text-[16px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                      Jobs
                    </Text>
                    <Line className="bg-bluegray_101 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[18px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
                    <Button
                      className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[44px] items-center justify-center lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[56px] mx-[auto] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[44px]"
                      shape="icbCircleBorder20"
                      size="mdIcn"
                      variant="icbFillYellow80019"
                    >
                      <Img
                        src="images/img_jobslogo.png"
                        className="flex items-center justify-center"
                        alt="JobsLogo"
                      />
                    </Button>
                    <Text className="capitalize font-medium lg:mb-[46px] xl:mb-[52px] 2xl:mb-[59px] 3xl:mb-[71px] mb-[96px] 3xl:mt-[11px] mt-[16px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_404 w-[auto]">
                      no jobs
                    </Text>
                  </Column>
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="bg-transparent border-0 font-normal not-italic p-[0] 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_600_7f text-gray_600_7f w-[100%]"
                    wrapClassName="2xl:mt-[26px] 3xl:mt-[31px] flex lg:mt-[20px] mt-[42px] w-[97%] xl:mt-[23px]"
                    name="SearchBar"
                    placeholder="Search candidate"
                    prefix={
                      <Img
                        src="images/img_search_gray_619.png"
                        className="cursor-pointer w-[16px] h-[16px] lg:w-[7px] lg:h-[8px] lg:mx-[6px] xl:w-[8px] xl:h-[9px] xl:mx-[7px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mx-[8px] 3xl:w-[11px] 3xl:h-[12px] 3xl:mx-[10px] my-[auto] mx-[14px]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#7f686b6f"
                          className="cursor-pointer w-[16px] h-[16px] ml-[10px] mr-[22px] lg:w-[7px] lg:h-[8px] lg:ml-[4px] lg:mr-[10px] xl:w-[8px] xl:h-[9px] xl:ml-[5px] xl:mr-[12px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[6px] 2xl:mr-[13px] 3xl:w-[11px] 3xl:h-[12px] 3xl:ml-[7px] 3xl:mr-[16px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcCircleBorder22"
                    variant="srcOutlineBlack9003f"
                  ></Input>
                </Column>
                <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[42px] w-[33%]">
                  <Row className="w-[76%]">
                    <Button
                      className="flex items-center justify-center mb-[2px] text-center w-[45%]"
                      leftIcon={
                        <Img
                          src="images/img_grid_white_A700.png"
                          className="w-[10px] h-[10px] mr-[10px] text-center lg:w-[4px] lg:h-[5px] lg:mr-[4px] xl:w-[5px] xl:h-[6px] xl:mr-[5px] 2xl:w-[6px] 2xl:h-[7px] 2xl:mr-[6px] 3xl:w-[7px] 3xl:h-[8px] 3xl:mr-[7px]"
                          alt="grid"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillBlue800"
                    >
                      <div className="bg-transparent font-normal not-italic 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px]">
                        Create
                      </div>
                    </Button>
                    <Button
                      className="2xl:ml-[22px] 3xl:ml-[27px] flex items-center justify-center lg:ml-[17px] ml-[37px] mt-[2px] text-center w-[37%] xl:ml-[20px]"
                      rightIcon={
                        <Img
                          src="images/img_filter_logo.png"
                          className="w-[10px] h-[10px] ml-[10px] text-center lg:w-[4px] lg:h-[5px] lg:ml-[4px] xl:w-[5px] xl:h-[6px] xl:ml-[5px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[6px] 3xl:w-[7px] 3xl:h-[8px] 3xl:ml-[7px]"
                          alt="Filter Logo"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillBluegray900"
                    >
                      <div className="bg-transparent font-normal not-italic 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px]">
                        Filter
                      </div>
                    </Button>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[22px] w-[76%]">
                    <Button
                      className="flex items-center justify-center text-center w-[45%]"
                      leftIcon={
                        <Img
                          src="images/img_plus_blue_800.png"
                          className="w-[10px] h-[10px] mr-[35px] text-center lg:w-[4px] lg:h-[5px] lg:mr-[16px] xl:w-[5px] xl:h-[6px] xl:mr-[19px] 2xl:w-[6px] 2xl:h-[7px] 2xl:mr-[21px] 3xl:w-[7px] 3xl:h-[8px] 3xl:mr-[26px] rounded-radius10"
                          alt="plus"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillBluegray102"
                    >
                      <div className="bg-transparent font-normal not-italic 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-blue_800">
                        Create
                      </div>
                    </Button>
                    <Button
                      className="2xl:ml-[22px] 3xl:ml-[27px] flex items-center justify-center lg:ml-[17px] ml-[37px] text-center w-[37%] xl:ml-[20px]"
                      rightIcon={
                        <Img
                          src="images/img_computer.png"
                          className="w-[10px] h-[10px] ml-[10px] text-center lg:w-[4px] lg:h-[5px] lg:ml-[4px] xl:w-[5px] xl:h-[6px] xl:ml-[5px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[6px] 3xl:w-[7px] 3xl:h-[8px] 3xl:ml-[7px]"
                          alt="computer"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray102"
                    >
                      <div className="bg-transparent font-normal not-italic 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px]">
                        Filter
                      </div>
                    </Button>
                  </Row>
                  <Button
                    className="2xl:ml-[115px] 2xl:mt-[187px] 3xl:ml-[139px] 3xl:mt-[225px] flex items-center justify-center lg:ml-[90px] lg:mt-[146px] ml-[187px] mt-[303px] text-center w-[31%] xl:ml-[103px] xl:mt-[167px]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[3px] lg:h-[4px] lg:ml-[4px] xl:w-[4px] xl:h-[5px] xl:ml-[5px] 2xl:w-[4px] 2xl:h-[5px] 2xl:ml-[6px] 3xl:w-[5px] 3xl:h-[6px] 3xl:ml-[7px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-medium 3xl:text-[10px] text-[14px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_900">
                      Degree
                    </div>
                  </Button>
                </Column>
              </Row>
              <Button
                className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[44px] items-center justify-center ml-[1188px] lg:ml-[572px] xl:ml-[654px] 2xl:ml-[736px] 3xl:ml-[883px] 3xl:mr-[102px] mr-[138px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] lg:mt-[130px] xl:mt-[148px] 2xl:mt-[167px] 3xl:mt-[200px] mt-[270px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[44px]"
                shape="icbCircleBorder20"
                size="mdIcn"
                variant="icbFillLime50019"
              >
                <Img
                  src="images/img_dashboardlogo.png"
                  className="h-[18px] flex items-center justify-center lg:h-[9px] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px]"
                  alt="DashboardLogo"
                />
              </Button>
              <Button
                className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[44px] items-center justify-center ml-[1188px] lg:ml-[572px] xl:ml-[654px] 2xl:ml-[736px] 3xl:ml-[883px] 3xl:mr-[102px] mr-[138px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] mt-[4px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[44px]"
                shape="icbCircleBorder20"
                size="mdIcn"
                variant="icbFillYellow80019"
              >
                <Img
                  src="images/img_jobslogo.png"
                  className="flex items-center justify-center"
                  alt="JobsLogo One"
                />
              </Button>
              <Button
                className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[44px] items-center justify-center ml-[1188px] lg:ml-[572px] xl:ml-[654px] 2xl:ml-[736px] 3xl:ml-[883px] 3xl:mr-[102px] mr-[138px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[24px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[44px]"
                shape="icbCircleBorder20"
                size="mdIcn"
                variant="icbFillLightgreenA70019"
              >
                <Img
                  src="images/img_candidateslogo.png"
                  className="flex items-center justify-center"
                  alt="CandidatesLogo"
                />
              </Button>
              <Button
                className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[44px] items-center justify-center ml-[1188px] lg:ml-[572px] xl:ml-[654px] 2xl:ml-[736px] 3xl:ml-[883px] 3xl:mr-[102px] mr-[138px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[9px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[44px]"
                shape="icbCircleBorder20"
                size="mdIcn"
                variant="icbFillDeeppurple70019"
              >
                <Img
                  src="images/img_testlibrarylo.png"
                  className="h-[20px] flex items-center justify-center lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px]"
                  alt="TestLibraryLo"
                />
              </Button>
              <Button
                className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[44px] items-center justify-center ml-[1188px] lg:ml-[572px] xl:ml-[654px] 2xl:ml-[736px] 3xl:ml-[883px] 3xl:mr-[102px] mr-[138px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] mt-[3px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[44px]"
                shape="icbCircleBorder20"
                size="mdIcn"
                variant="icbFillPinkA40019"
              >
                <Img
                  src="images/img_resumebanklog.png"
                  className="h-[24px] flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px]"
                  alt="ResumeBankLog"
                />
              </Button>
              <Button
                className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[44px] items-center justify-center ml-[1188px] lg:ml-[572px] xl:ml-[654px] 2xl:ml-[736px] 3xl:ml-[883px] 3xl:mr-[102px] mr-[138px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[23px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[44px]"
                shape="icbCircleBorder20"
                size="mdIcn"
                variant="icbFillDeeporange50019"
              >
                <Img
                  src="images/img_appointmentlog.png"
                  className="flex items-center justify-center"
                  alt="AppointmentLog"
                />
              </Button>
            </Column>
          </Column>
          <Img
            src="images/img_home_black_900.png"
            className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[24px] lg:mb-[224px] xl:mb-[256px] 2xl:mb-[288px] 3xl:mb-[346px] mb-[466px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[20px] lg:ml-[9px] lg:mt-[386px] xl:mt-[442px] 2xl:mt-[497px] 3xl:mt-[597px] mt-[803px] lg:w-[11px] xl:w-[13px] 2xl:w-[14px] 3xl:w-[17px] w-[24px]"
            alt="home One"
          />
        </Row>
      </Column>
    </>
  );
};

export default AssetsPage;
