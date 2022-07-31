import React from "react";

import { Stack, Column, Img, Row, Text, Button, Slider } from "components";

const ResumeBankFourPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-gray_200 font-poppins lg:h-[1349px] xl:h-[1542px] 2xl:h-[1735px] h-[2080px] 3xl:h-[2082px] mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Stack className="absolute lg:h-[1349px] xl:h-[1542px] 2xl:h-[1735px] h-[2080px] 3xl:h-[2082px] w-[100%]">
          <aside className="absolute items-center left-[0] w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[13px] xl:p-[15px] 2xl:p-[17px] p-[21px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] ml-[4px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] w-[73%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] ml-[17px] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] mt-[46px] rounded-radius5 w-[87%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-bluegray_100 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] ml-[16px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[88%]">
                  <Img
                    src="images/img_mail.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="bg-black_900 items-center justify-end ml-[4px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[96%]">
                  <Img
                    src="images/img_user_white_A700.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Button
                  className="2xl:mt-[12px] flex items-center justify-center lg:mt-[9px] ml-[4px] mt-[15px] text-center w-[96%] xl:mt-[11px]"
                  leftIcon={
                    <Img
                      src="images/img_home_black_900.png"
                      className="w-[24px] h-[24px] mr-[20px] text-center lg:w-[15px] lg:h-[16px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:h-[25px]"
                      alt="home"
                    />
                  }
                  shape="RoundedBorder5"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  <div className="bg-transparent capitalize font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                    Resume Bank
                  </div>
                </Button>
                <Row className="items-center lg:mt-[1012px] xl:mt-[1157px] 2xl:mt-[1302px] mt-[1562px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                    alt="settings"
                  />
                  <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-center lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] mb-[47px] ml-[2px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[99%]">
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
                  <Row className="bg-white_A700 items-end justify-end xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
                    <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                      RESUME BANK
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
                </>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
            <Row className="justify-end ml-[auto] lg:mr-[55px] xl:mr-[63px] 2xl:mr-[71px] mr-[86px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] mt-[42px] w-[14%]">
              <Img
                src="images/img_frame132.png"
                className="cursor-pointer xl:h-[10px] 2xl:h-[11px] h-[13px] 3xl:h-[14px] lg:h-[9px] mb-[1px] w-[3%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowright"
              />
              <Img
                src="images/img_frame132.png"
                className="cursor-pointer xl:h-[10px] 2xl:h-[11px] h-[13px] 3xl:h-[14px] lg:h-[9px] lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] ml-[227px] mt-[1px] w-[3%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright One"
              />
            </Row>
          </Column>
        </Stack>
        <Column className="absolute bg-white_A700 justify-center left-[19%] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] p-[42px] top-[6%] w-[23%]">
          <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] mt-[43px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Job Title
          </Text>
          <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-between xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[100%]">
            <Button
              className="2xl:ml-[9px] flex items-center justify-center lg:ml-[7px] ml-[11px] text-center w-[53%] xl:ml-[8px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Web Developer
              </div>
            </Button>
            <Img
              src="images/img_close.png"
              className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] mr-[16px] xl:w-[10px] 2xl:w-[11px] w-[14px] lg:w-[9px]"
              alt="close"
            />
          </Row>
          <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Education
          </Text>
          <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[100%]">
            <Button
              className="2xl:ml-[9px] flex items-center justify-center lg:ml-[7px] ml-[11px] text-center w-[33%] xl:ml-[8px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Degree
              </div>
            </Button>
            <Button
              className="2xl:ml-[30px] flex items-center justify-center lg:ml-[23px] ml-[36px] text-center w-[25%] xl:ml-[26px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                HND
              </div>
            </Button>
            <Img
              src="images/img_close.png"
              className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] mr-[16px] xl:w-[10px] 2xl:w-[11px] w-[14px] lg:w-[9px]"
              alt="close One"
            />
          </Row>
          <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Gender
          </Text>
          <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-between xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[10px] 2xl:p-[11px] p-[14px] lg:p-[9px] rounded-radius10 w-[100%]">
            <Text className="font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] ml-[6px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Female
            </Text>
            <Img
              src="images/img_upload.png"
              className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mr-[10px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] w-[6%]"
              alt="upload"
            />
          </Row>
          <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Location
          </Text>
          <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[100%]">
            <Button
              className="2xl:ml-[9px] flex items-center justify-center lg:ml-[7px] ml-[11px] text-center w-[30%] xl:ml-[8px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Accra
              </div>
            </Button>
            <Button
              className="2xl:ml-[29px] flex items-center justify-center lg:ml-[22px] ml-[35px] text-center w-[29%] xl:ml-[25px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Tema
              </div>
            </Button>
            <Img
              src="images/img_close.png"
              className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] mr-[16px] xl:w-[10px] 2xl:w-[11px] w-[14px] lg:w-[9px]"
              alt="close Two"
            />
          </Row>
          <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Country
          </Text>
          <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-between xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[100%]">
            <Button
              className="2xl:ml-[9px] flex items-center justify-center lg:ml-[7px] ml-[11px] text-center w-[32%] xl:ml-[8px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Ghana
              </div>
            </Button>
            <Img
              src="images/img_close.png"
              className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] mr-[16px] xl:w-[10px] 2xl:w-[11px] w-[14px] lg:w-[9px]"
              alt="close Three"
            />
          </Row>
          <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Tools
          </Text>
          <Row className="bg-white_A700 border border-gray_402 border-solid items-center justify-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[100%]">
            <Button
              className="2xl:ml-[9px] flex items-center justify-center lg:ml-[7px] ml-[11px] text-center w-[36%] xl:ml-[8px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                VS Code
              </div>
            </Button>
            <Button
              className="2xl:ml-[15px] flex items-center justify-center lg:ml-[12px] ml-[19px] text-center w-[34%] xl:ml-[14px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                G-Suite
              </div>
            </Button>
            <Img
              src="images/img_close.png"
              className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] ml-[24px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] mr-[16px] xl:w-[10px] 2xl:w-[11px] w-[14px] lg:w-[9px]"
              alt="close Four"
            />
          </Row>
          <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Skills & Expertise
          </Text>
          <Row className="bg-white_A700 border border-gray_402 border-solid justify-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] p-[18px] rounded-radius10 w-[100%]">
            <Button
              className="2xl:mb-[38px] flex items-center justify-center lg:mb-[29px] mb-[46px] ml-[3px] text-center w-[37%] xl:mb-[34px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Angular
              </div>
            </Button>
            <Button
              className="2xl:mb-[38px] 2xl:ml-[23px] flex items-center justify-center lg:mb-[29px] lg:ml-[18px] mb-[46px] ml-[28px] text-center w-[31%] xl:mb-[34px] xl:ml-[20px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[14px] h-[14px] ml-[10px] text-center lg:w-[9px] lg:h-[10px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[7px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[8px] 3xl:h-[15px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray406"
            >
              <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                React
              </div>
            </Button>
            <Img
              src="images/img_close.png"
              className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] lg:mb-[38px] xl:mb-[43px] 2xl:mb-[49px] mb-[59px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] ml-[33px] xl:mr-[5px] lg:mr-[5px] 2xl:mr-[6px] mr-[8px] mt-[2px] xl:w-[10px] 2xl:w-[11px] w-[14px] lg:w-[9px]"
              alt="close Five"
            />
          </Row>
          <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Year of experience
          </Text>
          <Row className="items-center lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[31%]">
            <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
              2
            </Text>
            <Text className="font-medium lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] ml-[74px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
              5
            </Text>
          </Row>
          <Img
            src="images/img_experiencebar.png"
            className="lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] mb-[52px] mt-[4px] w-[100%]"
            alt="ExperienceBar"
          />
        </Column>
        <Stack className="absolute bg-white_A700 lg:h-[224px] xl:h-[256px] 2xl:h-[288px] h-[345px] 3xl:h-[346px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] px-[16px] right-[0] top-[8%] w-[57%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[237px] xl:mr-[271px] 2xl:mr-[305px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
                alt="IconArtwork"
              />
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] mt-[1px] w-[12%]"
                    alt="location One"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] mb-[64px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] mb-[32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] mb-[66px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              92% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Row className="absolute items-center right-[4%] top-[5%] w-[53%]">
          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            20 results
          </Text>
          <Button
            className="font-medium mb-[3px] lg:ml-[235px] xl:ml-[269px] 2xl:ml-[302px] ml-[363px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[17%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray400"
          >
            Select Multiple
          </Button>
          <div className="bg-white_A700 lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] ml-[36px] rotate-[180deg] w-[4%]"></div>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[4%]"
            size="md"
            variant="FillWhiteA700"
          >
            1
          </Button>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[5%]"
            size="md"
            variant="FillWhiteA700"
          >
            2
          </Button>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[5%]"
            size="md"
            variant="FillWhiteA700"
          >
            3
          </Button>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[5%]"
            size="md"
            variant="FillWhiteA700"
          >
            4
          </Button>
          <div className="bg-white_A700 lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] w-[4%]"></div>
        </Row>
        <Stack className="absolute bg-white_A700 lg:h-[224px] xl:h-[256px] 2xl:h-[288px] h-[345px] 3xl:h-[346px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] px-[16px] right-[0] top-[25%] w-[57%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[237px] xl:mr-[271px] 2xl:mr-[305px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
                alt="IconArtwork One"
              />
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] mt-[1px] w-[12%]"
                    alt="location Two"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] mb-[64px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] mb-[32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] mb-[66px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              89% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Stack className="absolute bg-white_A700 lg:h-[224px] xl:h-[256px] 2xl:h-[288px] h-[345px] 3xl:h-[346px] inset-y-[0] my-[auto] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] px-[16px] right-[0] w-[57%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[237px] xl:mr-[271px] 2xl:mr-[305px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
                alt="IconArtwork Two"
              />
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] mt-[1px] w-[12%]"
                    alt="location Three"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] mb-[64px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] mb-[32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] mb-[66px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              74% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Stack className="absolute bg-white_A700 bottom-[24%] lg:h-[224px] xl:h-[256px] 2xl:h-[288px] h-[345px] 3xl:h-[346px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] px-[16px] right-[0] w-[57%]">
          <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pl-[2px] w-[80%]">
            <Row className="items-center lg:mr-[237px] xl:mr-[271px] 2xl:mr-[305px] mr-[366px] w-[51%]">
              <Img
                src="images/img_user_gray_600.png"
                className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
                alt="IconArtwork Three"
              />
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[71%]">
                <Text className="font-bold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-black_900 w-[auto]">
                  Regina Boatema
                </Text>
                <Text className="font-medium lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                  Web Engineer
                </Text>
                <Row className="ml-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] w-[50%]">
                  <Img
                    src="images/img_location.png"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] mt-[1px] w-[12%]"
                    alt="location Four"
                  />
                  <Text className="font-light mb-[1px] ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Accra, Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Column className="2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[98%]">
              <Row className="w-[70%]">
                <Text className="font-medium lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] mb-[64px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Experience
                </Text>
                <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[81%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Senior Web Engineer at Hubtel Ghana Ltd
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[79%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Developer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2018-2019
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[74%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Web Enginer at MEST Africa
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2016-2018
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]">
                <Text className="font-medium lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] mb-[32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                  Education
                </Text>
                <Column className="w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Bachelor of Science in Computer Engineering at University
                      of Ghana
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2010-2016
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[71%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Fellow Association of Web Developers Ghana
                    </Text>
                    <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                      2019-2021
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
            <Text className="font-medium lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] mb-[66px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              66% match
            </Text>
            <Column className="items-center pb-[10px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] w-[62%]">
              <Button
                className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add to Job
              </Button>
              <Column className="items-center lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] rounded-radius10 w-[87%]">
                <Text className="font-bold xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  View Resume
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
        <footer className="absolute bg-white_A700 bottom-[6%] right-[0] w-[57%]">
          <Stack className="lg:h-[198px] xl:h-[227px] 2xl:h-[255px] h-[305px] 3xl:h-[306px] w-[97%]">
            <Column className="absolute left-[0] pl-[2px] w-[80%]">
              <Row className="items-center lg:mr-[237px] xl:mr-[271px] 2xl:mr-[305px] mr-[366px] w-[51%]">
                <Img
                  src="images/img_user_gray_600.png"
                  className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
                  alt="IconArtwork Four"
                />
                <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[71%]">
                  <Text className="font-bold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-black_900 w-[auto]">
                    Regina Boatema
                  </Text>
                  <Text className="font-medium lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-black_900 w-[auto]">
                    Web Engineer
                  </Text>
                  <Row className="ml-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] w-[50%]">
                    <Img
                      src="images/img_location.png"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] mt-[1px] w-[12%]"
                      alt="location Five"
                    />
                    <Text className="font-light mb-[1px] ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Accra, Ghana
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Column className="2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[98%]">
                <Row className="w-[70%]">
                  <Text className="font-medium lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] mb-[64px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                    Experience
                  </Text>
                  <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[81%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Senior Web Engineer at Hubtel Ghana Ltd
                      </Text>
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                        2019-2021
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[79%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Web Developer at MEST Africa
                      </Text>
                      <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                        2018-2019
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[74%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Web Enginer at MEST Africa
                      </Text>
                      <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                        2016-2018
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]">
                  <Text className="font-medium lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] mb-[32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                    Education
                  </Text>
                  <Column className="w-[87%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Bachelor of Science in Computer Engineering at
                        University of Ghana
                      </Text>
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                        2010-2016
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[71%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Fellow Association of Web Developers Ghana
                      </Text>
                      <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_646 w-[auto]">
                        2019-2021
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Row className="absolute justify-between right-[0] top-[0] w-[27%]">
              <Text className="font-medium lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] mb-[66px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                62% match
              </Text>
              <Column className="items-center pb-[10px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] w-[62%]">
                <Button
                  className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[100%]"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillGray400"
                >
                  Add to Job
                </Button>
                <Column className="items-center lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] rounded-radius10 w-[87%]">
                  <Text className="font-bold xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    View Resume
                  </Text>
                </Column>
              </Column>
            </Row>
          </Stack>
        </footer>
      </Stack>
    </>
  );
};

export default ResumeBankFourPage;
