import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button } from "components";

const ResumeBankSevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate17() {
    navigate("/resumebanknine");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pr-[29px] xl:pr-[33px] 2xl:pr-[37px] pr-[45px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[30px] xl:pr-[34px] 2xl:pr-[39px] pr-[47px] w-[19%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Column className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] w-[90%]">
                  <Row className="items-center rounded-radius5 w-[100%]">
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
                      <Row className="items-center rounded-radius5 w-[100%]">
                        <Img
                          src="images/img_mail.png"
                          className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                          alt="mail"
                        />
                        <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Jobs
                        </Text>
                      </Row>
                      <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[100%]">
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
                  <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[100%]">
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
                      src="images/img_settings_white_A700_22X22.png"
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
            <header className="w-[100%]">
              <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                <Text className="capitalize cursor-pointer hover:font-medium font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
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
            </header>
            <Row className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] ml-[5px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] w-[41%]">
              <Column
                className="common-pointer bg-gray_101 border-bw02 border-gray_646 border-solid lg:p-[12px] xl:p-[14px] 2xl:p-[16px] p-[20px] rounded-radius10 w-[65%]"
                onClick={handleNavigate17}
              >
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Education
                </Text>
                <Row className="bg-white_A700 border border-gray_402 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
                  <Button
                    className="flex items-center justify-center ml-[3px] text-center w-[27%]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-gray_900">
                      Degree
                    </div>
                  </Button>
                  <Button
                    className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[20%] xl:ml-[7px]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-gray_900">
                      HND
                    </div>
                  </Button>
                </Row>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Gender
                </Text>
                <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-between ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[94%]">
                  <Text className="font-normal my-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Female
                  </Text>
                  <Img
                    src="images/img_upload.png"
                    className="lg:h-[4px] xl:h-[5px] h-[6px] 3xl:h-[7px] mr-[10px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] w-[3%]"
                    alt="upload"
                  />
                </Row>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Location
                </Text>
                <Row className="bg-white_A700 border border-gray_402 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
                  <Button
                    className="flex items-center justify-center ml-[3px] text-center w-[26%]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      Tema
                    </div>
                  </Button>
                  <Button
                    className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[26%] xl:ml-[7px]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      Accra
                    </div>
                  </Button>
                </Row>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Country
                </Text>
                <Column className="bg-white_A700 border border-gray_402 border-solid ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
                  <Button
                    className="flex items-center justify-center ml-[3px] text-center w-[28%]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      Ghana
                    </div>
                  </Button>
                </Column>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Tools
                </Text>
                <Row className="bg-white_A700 border border-gray_402 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
                  <Button
                    className="flex items-center justify-center ml-[3px] text-center w-[30%]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      G-Suite
                    </div>
                  </Button>
                  <Button
                    className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[27%] xl:ml-[7px]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      Figma
                    </div>
                  </Button>
                </Row>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Skills & Expertise
                </Text>
                <Row className="bg-white_A700 border border-gray_402 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
                  <Button
                    className="flex items-center justify-center ml-[3px] text-center w-[26%]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      React
                    </div>
                  </Button>
                  <Button
                    className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[30%] xl:ml-[7px]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      Angular
                    </div>
                  </Button>
                </Row>
                <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Experience
                </Text>
                <Row className="bg-white_A700 border border-gray_402 border-solid mb-[119px] lg:mb-[77px] xl:mb-[88px] 2xl:mb-[99px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
                  <Button
                    className="flex items-center justify-center ml-[3px] text-center w-[37%]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      Entry Level
                    </div>
                  </Button>
                  <Button
                    className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[33%] xl:ml-[7px]"
                    rightIcon={
                      <Img
                        src="images/img_close.png"
                        className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBluegray102"
                  >
                    <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_900">
                      Mid Level
                    </div>
                  </Button>
                  <Img
                    src="images/img_upload.png"
                    className="lg:h-[4px] xl:h-[5px] h-[6px] 3xl:h-[7px] 2xl:mb-[10px] mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] ml-[52px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[3%]"
                    alt="upload One"
                  />
                </Row>
              </Column>
              <Text className="font-normal lg:mb-[461px] xl:mb-[527px] 2xl:mb-[593px] mb-[712px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] ml-[54px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_647 w-[auto]">
                No search results
              </Text>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ResumeBankSevenPage;
