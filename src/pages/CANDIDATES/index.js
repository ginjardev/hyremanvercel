import React from "react";

import {
  Stack,
  Column,
  Img,
  Row,
  Text,
  Slider,
  Button,
  Line,
  CheckBox,
  SelectBox,
} from "components";

const CANDIDATESPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-gray_200 font-poppins h-[1117px] 3xl:h-[1118px] lg:h-[724px] xl:h-[829px] 2xl:h-[932px] mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Stack className="absolute h-[1117px] 3xl:h-[1118px] lg:h-[724px] xl:h-[829px] 2xl:h-[932px] w-[100%]">
          <aside className="absolute items-center left-[0] w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_grid.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="grid"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-bluegray_100 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_mail.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-end lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_user.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_cart.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="cart"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Test Library
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
          <Column className="absolute inset-x-[0] mx-[auto] top-[1%] w-[99%]">
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
                      CANDIDATES
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
                </>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
            <Row className="items-center justify-end ml-[auto] lg:mr-[20px] xl:mr-[23px] 2xl:mr-[26px] mr-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] mt-[58px] w-[3%]">
              <Img
                src="images/img_arrowleft.png"
                className="cursor-pointer 2xl:h-[11px] h-[12px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[16%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowleft"
              />
              <Img
                src="images/img_arrowright.png"
                className="cursor-pointer 2xl:h-[11px] h-[12px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] ml-[39px] w-[16%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright"
              />
            </Row>
          </Column>
        </Stack>
        <Row className="absolute justify-center right-[7%] top-[12%] w-[16%]">
          <Button
            className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[52%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray400"
          >
            Add Candidate
          </Button>
          <Text className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] mb-[16px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] mt-[4px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            1
          </Text>
          <Line className="bg-black_900 h-[1px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] mb-[29px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] ml-[6px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[7%]" />
          <Text className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] mb-[16px] ml-[2px] mt-[4px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            12
          </Text>
          <Text className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] mb-[16px] 2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[4px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            of
          </Text>
          <Text className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] mb-[16px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] mt-[4px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            25
          </Text>
        </Row>
        <Row className="absolute bg-gray_401 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[19px] p-[23px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[17%] w-[82%]">
          <CheckBox
            className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[1px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] pl-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900"
            inputClassName="mr-[5px] w-[undefinedpx]"
            name="FullName"
            label="Full Name"
          ></CheckBox>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown"
          />
          <Text className="font-medium lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] ml-[55px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Email
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown One"
          />
          <Text className="font-medium lg:ml-[119px] xl:ml-[137px] 2xl:ml-[154px] ml-[185px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Gender
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Two"
          />
          <Text className="font-medium lg:ml-[36px] xl:ml-[42px] 2xl:ml-[47px] ml-[57px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Phone
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Three"
          />
          <Text className="font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] ml-[72px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Country
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Four"
          />
          <Text className="font-medium lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] ml-[52px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            City
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Five"
          />
          <Text className="font-medium lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] ml-[47px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
            Skill
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Six"
          />
          <SelectBox
            className="bg-transparent font-medium 2xl:ml-[106px] ml-[128px] lg:ml-[82px] xl:ml-[94px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[11%]"
            placeholderClassName="bg-transparent text-black_900"
            name="FrameSixtyTwo"
            placeholder="Previous Stage"
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
        </Row>
        <Column className="absolute items-center right-[1%] top-[25%] w-[81%]">
          <Row className="w-[97%]">
            <CheckBox
              className="font-medium mt-[2px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] pl-[18px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="CarolineKpogo"
              label="Caroline Kpogo"
            ></CheckBox>
            <Text className="font-medium lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] ml-[49px] mt-[2px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              carolinekpogo@gmail.com
            </Text>
            <Text className="font-medium lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] ml-[58px] mt-[2px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Female
            </Text>
            <Text className="font-medium lg:ml-[55px] xl:ml-[63px] 2xl:ml-[70px] ml-[85px] mt-[2px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              0209414362
            </Text>
            <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] ml-[60px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Ghana
            </Text>
            <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] ml-[90px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Accra
            </Text>
            <Text className="font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] ml-[58px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Angular, Digital Mark......
            </Text>
            <Text className="font-medium mb-[2px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Interview
            </Text>
            <Line className="bg-gray_600 lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] 2xl:ml-[100px] ml-[121px] lg:ml-[78px] xl:ml-[89px] my-[1px] rotate-[90deg] w-[4px]" />
          </Row>
          <Column className="items-center xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] w-[100%]">
            <Line className="bg-gray_402 h-[1px] w-[100%]" />
            <Row className="2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[97%]">
              <CheckBox
                className="font-medium my-[1px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] pl-[18px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="KingsleySarpon"
                label="Kingsley Sarpong"
              ></CheckBox>
              <Text className="font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] ml-[36px] my-[1px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                kingsleyboakye7@gmail.com
              </Text>
              <Text className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] my-[1px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Male
              </Text>
              <Text className="font-medium ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[85px] my-[1px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                0209414362
              </Text>
              <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] ml-[60px] my-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Ghana
              </Text>
              <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] ml-[90px] my-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Kumasi
              </Text>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] ml-[48px] my-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                React, Django, Node, ....
              </Text>
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Interview
              </Text>
              <Line className="bg-gray_600 lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] ml-[111px] lg:ml-[71px] xl:ml-[82px] 2xl:ml-[92px] my-[2px] rotate-[90deg] w-[4px]" />
            </Row>
            <Line className="bg-gray_402 h-[1px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[100%]" />
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default CANDIDATESPage;
