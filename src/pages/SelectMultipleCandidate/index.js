import React from "react";

import { Stack, Column, Img, Row, Text, Button, Slider } from "components";

const SelectMultipleCandidatePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-gray_200 font-poppins lg:h-[1171px] xl:h-[1339px] 2xl:h-[1507px] 3xl:h-[1808px] h-[2080px] mx-[auto] xl:pr-[113px] 2xl:pr-[128px] 3xl:pr-[153px] pr-[177px] lg:pr-[99px] w-[100%]">
        <Stack className="absolute lg:h-[1171px] xl:h-[1339px] 2xl:h-[1507px] 3xl:h-[1808px] h-[2080px] left-[0] w-[100%]">
          <aside className="absolute items-center left-[0] w-[16%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[21px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[40px] h-[45px] ml-[4px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] w-[73%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[17px] lg:ml-[9px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[46px] rounded-radius5 w-[87%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] h-[18px] rounded-radius2 lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[23px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-bluegray_100 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[16px] lg:ml-[9px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[44px] rounded-radius5 w-[88%]">
                  <Img
                    src="images/img_mail.png"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] h-[18px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] ml-[22px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-white_A700 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="bg-black_900 items-center justify-end ml-[4px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] mt-[29px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius5 w-[96%]">
                  <Img
                    src="images/img_user_white_A700.png"
                    className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[8px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] ml-[22px] my-[4px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-white_A700 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Button
                  className="2xl:mt-[10px] 3xl:mt-[13px] flex items-center justify-center lg:mt-[8px] ml-[4px] mt-[15px] text-center w-[96%] xl:mt-[9px]"
                  leftIcon={
                    <Img
                      src="images/img_home_black_900.png"
                      className="w-[24px] h-[24px] mr-[20px] text-center lg:w-[13px] lg:h-[14px] lg:mr-[11px] xl:w-[15px] xl:h-[16px] xl:mr-[12px] 2xl:w-[17px] 2xl:h-[18px] 2xl:mr-[14px] 3xl:w-[20px] 3xl:h-[21px] 3xl:mr-[17px]"
                      alt="home"
                    />
                  }
                  shape="RoundedBorder5"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  <div className="bg-transparent capitalize font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                    Resume Bank
                  </div>
                </Button>
                <Row className="items-center xl:mt-[1005px] 2xl:mt-[1131px] 3xl:mt-[1357px] mt-[1562px] lg:mt-[879px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] h-[22px] lg:w-[12px] xl:w-[14px] 2xl:w-[15px] 3xl:w-[19px] w-[22px]"
                    alt="settings"
                  />
                  <Text className="capitalize font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] my-[0] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] mb-[47px] ml-[2px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[44px] rounded-radius5 w-[99%]">
                  <Img
                    src="images/img_vector.png"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] h-[18px] w-[8%]"
                    alt="Vector"
                  />
                  <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] ml-[22px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-white_A700 w-[auto]">
                    log Out
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="absolute inset-x-[0] mx-[auto] top-[0] w-[99%]">
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
                  <Row className="bg-white_A700 items-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
                    <Text className="capitalize font-medium mb-[1px] ml-[11px] lg:ml-[6px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-[36px] text-black_900 w-[auto]">
                      RESUME BANK
                    </Text>
                    <Button
                      className="font-medium mb-[4px] lg:ml-[434px] xl:ml-[496px] 2xl:ml-[559px] 3xl:ml-[670px] ml-[772px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-center w-[7%]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillGray400"
                    >
                      Create
                    </Button>
                    <Button
                      className="flex lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[40px] items-center justify-center lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] ml-[46px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[9px] lg:w-[22px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px] w-[40px]"
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
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] h-[22px] 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[7px] xl:mb-[9px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[17px] lg:mt-[9px] lg:w-[12px] xl:w-[14px] 2xl:w-[15px] 3xl:w-[19px] w-[22px]"
                      alt="user One"
                    />
                  </Row>
                </>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
            <Row className="justify-end ml-[auto] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] mr-[18px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[42px] w-[12%]">
              <Img
                src="images/img_frame132.png"
                className="cursor-pointer 2xl:h-[10px] 3xl:h-[12px] h-[13px] lg:h-[8px] xl:h-[9px] mb-[1px] w-[3%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowright"
              />
              <Img
                src="images/img_frame132.png"
                className="cursor-pointer 2xl:h-[10px] 3xl:h-[12px] h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[149px] 3xl:ml-[179px] ml-[207px] mt-[1px] w-[3%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright One"
              />
            </Row>
          </Column>
        </Stack>
        <Row className="absolute justify-center left-[18%] top-[6%] w-[26%]">
          <Column className="bg-white_A700 justify-center lg:mb-[394px] xl:mb-[451px] 2xl:mb-[507px] 3xl:mb-[609px] mb-[701px] lg:p-[23px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[36px] p-[42px] w-[82%]">
            <Text className="font-medium lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[43px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Job Title
            </Text>
            <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-between lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[100%]">
              <Button
                className="2xl:ml-[7px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[11px] text-center w-[53%] xl:ml-[7px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  Web Developer
                </div>
              </Button>
              <Img
                src="images/img_close.png"
                className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[8px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] mr-[16px] lg:mr-[9px] 2xl:w-[10px] 3xl:w-[12px] w-[14px] lg:w-[7px] xl:w-[9px]"
                alt="close"
              />
            </Row>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Education
            </Text>
            <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[100%]">
              <Button
                className="2xl:ml-[7px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[11px] text-center w-[33%] xl:ml-[7px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  Degree
                </div>
              </Button>
              <Button
                className="2xl:ml-[26px] 3xl:ml-[31px] flex items-center justify-center lg:ml-[20px] ml-[36px] text-center w-[25%] xl:ml-[23px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  HND
                </div>
              </Button>
              <Img
                src="images/img_close.png"
                className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[8px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[41px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] mr-[16px] lg:mr-[9px] 2xl:w-[10px] 3xl:w-[12px] w-[14px] lg:w-[7px] xl:w-[9px]"
                alt="close One"
              />
            </Row>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Gender
            </Text>
            <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-between lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] 2xl:p-[10px] 3xl:p-[12px] p-[14px] lg:p-[7px] xl:p-[9px] rounded-radius10 w-[100%]">
              <Text className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] ml-[6px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
                Female
              </Text>
              <Img
                src="images/img_upload.png"
                className="h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] w-[6%]"
                alt="upload"
              />
            </Row>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Location
            </Text>
            <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[100%]">
              <Button
                className="2xl:ml-[7px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[11px] text-center w-[30%] xl:ml-[7px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  Accra
                </div>
              </Button>
              <Button
                className="2xl:ml-[25px] 3xl:ml-[30px] flex items-center justify-center lg:ml-[19px] ml-[35px] text-center w-[29%] xl:ml-[22px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  Tema
                </div>
              </Button>
              <Img
                src="images/img_close.png"
                className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[8px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[40px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] mr-[16px] lg:mr-[9px] 2xl:w-[10px] 3xl:w-[12px] w-[14px] lg:w-[7px] xl:w-[9px]"
                alt="close Two"
              />
            </Row>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Country
            </Text>
            <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-between lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[100%]">
              <Button
                className="2xl:ml-[7px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[11px] text-center w-[32%] xl:ml-[7px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  Ghana
                </div>
              </Button>
              <Img
                src="images/img_close.png"
                className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[8px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] mr-[16px] lg:mr-[9px] 2xl:w-[10px] 3xl:w-[12px] w-[14px] lg:w-[7px] xl:w-[9px]"
                alt="close Three"
              />
            </Row>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Tools
            </Text>
            <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[100%]">
              <Button
                className="2xl:ml-[7px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[11px] text-center w-[36%] xl:ml-[7px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  VS Code
                </div>
              </Button>
              <Button
                className="2xl:ml-[13px] 3xl:ml-[16px] flex items-center justify-center lg:ml-[10px] ml-[19px] text-center w-[34%] xl:ml-[12px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  G-Suite
                </div>
              </Button>
              <Img
                src="images/img_close.png"
                className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[8px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[24px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] mr-[16px] lg:mr-[9px] 2xl:w-[10px] 3xl:w-[12px] w-[14px] lg:w-[7px] xl:w-[9px]"
                alt="close Four"
              />
            </Row>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Skills & Expertise
            </Text>
            <Row className="bg-white_A700 border border-gray_402 border-solid justify-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] p-[18px] rounded-radius10 w-[100%]">
              <Button
                className="2xl:mb-[33px] 3xl:mb-[39px] flex items-center justify-center lg:mb-[25px] mb-[46px] ml-[3px] text-center w-[37%] xl:mb-[29px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  Angular
                </div>
              </Button>
              <Button
                className="2xl:mb-[33px] 2xl:ml-[20px] 3xl:mb-[39px] 3xl:ml-[24px] flex items-center justify-center lg:mb-[25px] lg:ml-[15px] mb-[46px] ml-[28px] text-center w-[31%] xl:mb-[29px] xl:ml-[18px]"
                rightIcon={
                  <Img
                    src="images/img_close.png"
                    className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[7px] lg:h-[8px] lg:ml-[5px] xl:w-[9px] xl:h-[10px] xl:ml-[6px] 2xl:w-[10px] 2xl:h-[11px] 2xl:ml-[7px] 3xl:w-[12px] 3xl:h-[13px] 3xl:ml-[8px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray406"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]">
                  React
                </div>
              </Button>
              <Img
                src="images/img_close.png"
                className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[8px] lg:mb-[33px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[59px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] ml-[33px] lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[6px] mr-[8px] mt-[2px] 2xl:w-[10px] 3xl:w-[12px] w-[14px] lg:w-[7px] xl:w-[9px]"
                alt="close Five"
              />
            </Row>
            <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[16px] lg:mt-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Year of experience
            </Text>
            <Row className="items-center lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[40px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[31%]">
              <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                2
              </Text>
              <Text className="font-medium lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[64px] ml-[74px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                5
              </Text>
            </Row>
            <Img
              src="images/img_experiencebar.png"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] h-[19px] lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] mb-[52px] mt-[4px] w-[100%]"
              alt="ExperienceBar"
            />
          </Column>
          <Column className="items-center lg:ml-[19px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[34px] lg:mt-[123px] xl:mt-[140px] 2xl:mt-[158px] 3xl:mt-[190px] mt-[219px] w-[11%]">
            <div className="bg-white_A700 border border-gray_402 border-solid lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[50px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[50px]"></div>
            <div className="bg-white_A700 border border-gray_402 border-solid lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[50px] lg:mt-[176px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[271px] mt-[313px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[50px]"></div>
            <div className="bg-white_A700 border border-gray_402 border-solid lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[50px] lg:mt-[176px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[271px] mt-[313px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[50px]"></div>
            <div className="bg-white_A700 border border-gray_402 border-solid lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[50px] lg:mt-[176px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[271px] mt-[313px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[50px]"></div>
            <div className="bg-white_A700 border border-gray_402 border-solid lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[50px] lg:mt-[176px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[271px] mt-[313px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[50px]"></div>
          </Column>
        </Row>
        <Stack className="absolute bg-white_A700 lg:h-[195px] xl:h-[223px] 2xl:h-[250px] 3xl:h-[300px] h-[345px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[16px] lg:px-[9px] right-[0] top-[8%] w-[54%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[205px] xl:mr-[235px] 2xl:mr-[265px] 3xl:mr-[317px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] w-[101px] lg:w-[56px] xl:w-[65px] 2xl:w-[73px] 3xl:w-[87px]"
                alt="IconArtwork"
              />
              <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[24px] mt-[1px] w-[12%]"
                    alt="location One"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[6px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[36px] xl:mb-[41px] 2xl:mb-[46px] 3xl:mb-[55px] mb-[64px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[32px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[37px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px] mb-[66px] mt-[11px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
              92% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Row className="absolute items-center right-[0] top-[5%] w-[53%]">
          <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
            20 results
          </Text>
          <Button
            className="font-medium mb-[3px] lg:ml-[241px] xl:ml-[276px] 2xl:ml-[310px] 3xl:ml-[372px] ml-[429px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-center w-[16%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray400"
          >
            Select Multiple
          </Button>
          <div className="bg-white_A700 lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[40px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] 3xl:ml-[50px] ml-[58px] rotate-[180deg] w-[3%]"></div>
          <Button
            className="font-medium ml-[3px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-center w-[4%]"
            size="md"
            variant="FillWhiteA700"
          >
            1
          </Button>
          <Button
            className="font-medium ml-[3px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-center w-[4%]"
            size="md"
            variant="FillWhiteA700"
          >
            2
          </Button>
          <Button
            className="font-medium ml-[3px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-center w-[4%]"
            size="md"
            variant="FillWhiteA700"
          >
            3
          </Button>
          <Button
            className="font-medium ml-[3px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-center w-[4%]"
            size="md"
            variant="FillWhiteA700"
          >
            4
          </Button>
          <div className="bg-white_A700 lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[40px] ml-[3px] w-[3%]"></div>
        </Row>
        <Stack className="absolute bg-white_A700 lg:h-[195px] xl:h-[223px] 2xl:h-[250px] 3xl:h-[300px] h-[345px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[16px] lg:px-[9px] right-[0] top-[25%] w-[54%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[205px] xl:mr-[235px] 2xl:mr-[265px] 3xl:mr-[317px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] w-[101px] lg:w-[56px] xl:w-[65px] 2xl:w-[73px] 3xl:w-[87px]"
                alt="IconArtwork One"
              />
              <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[24px] mt-[1px] w-[12%]"
                    alt="location Two"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[6px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[36px] xl:mb-[41px] 2xl:mb-[46px] 3xl:mb-[55px] mb-[64px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[32px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[37px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px] mb-[66px] mt-[11px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
              89% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Stack className="absolute bg-white_A700 lg:h-[195px] xl:h-[223px] 2xl:h-[250px] 3xl:h-[300px] h-[345px] inset-y-[0] my-[auto] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[16px] lg:px-[9px] right-[0] w-[54%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[205px] xl:mr-[235px] 2xl:mr-[265px] 3xl:mr-[317px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] w-[101px] lg:w-[56px] xl:w-[65px] 2xl:w-[73px] 3xl:w-[87px]"
                alt="IconArtwork Two"
              />
              <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[24px] mt-[1px] w-[12%]"
                    alt="location Three"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[6px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[36px] xl:mb-[41px] 2xl:mb-[46px] 3xl:mb-[55px] mb-[64px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[32px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[37px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px] mb-[66px] mt-[11px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
              74% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Stack className="absolute bg-white_A700 bottom-[24%] lg:h-[195px] xl:h-[223px] 2xl:h-[250px] 3xl:h-[300px] h-[345px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[16px] lg:px-[9px] right-[0] w-[54%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[205px] xl:mr-[235px] 2xl:mr-[265px] 3xl:mr-[317px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] w-[101px] lg:w-[56px] xl:w-[65px] 2xl:w-[73px] 3xl:w-[87px]"
                alt="IconArtwork Three"
              />
              <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[24px] mt-[1px] w-[12%]"
                    alt="location Four"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[6px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[36px] xl:mb-[41px] 2xl:mb-[46px] 3xl:mb-[55px] mb-[64px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[32px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[37px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px] mb-[66px] mt-[11px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
              66% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Stack className="absolute bg-white_A700 bottom-[6%] lg:h-[195px] xl:h-[223px] 2xl:h-[250px] 3xl:h-[300px] h-[345px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[16px] lg:px-[9px] right-[0] w-[54%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[205px] xl:mr-[235px] 2xl:mr-[265px] 3xl:mr-[317px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] w-[101px] lg:w-[56px] xl:w-[65px] 2xl:w-[73px] 3xl:w-[87px]"
                alt="IconArtwork Four"
              />
              <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[24px] mt-[1px] w-[12%]"
                    alt="location Five"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[6px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[36px] xl:mb-[41px] 2xl:mb-[46px] 3xl:mb-[55px] mb-[64px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[32px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 3xl:ml-[10px] ml-[12px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[9px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[37px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px] mb-[66px] mt-[11px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
              62% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
      </Stack>
    </>
  );
};

export default SelectMultipleCandidatePage;
