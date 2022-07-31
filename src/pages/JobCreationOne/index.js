import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Stack,
  Column,
  Img,
  Row,
  Text,
  Slider,
  Button,
  Input,
  SelectBox,
} from "components";

const JobCreationOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/jobcreation");
  }
  function handleNavigate18() {
    navigate("/dashboardseven");
  }
  function handleNavigate19() {
    navigate("/candidatesthree");
  }
  function handleNavigate20() {
    navigate("/testlibrary");
  }
  function handleNavigate21() {
    navigate("/resumebanksix");
  }
  function handleNavigate22() {
    navigate("/jobcreationtwo");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-white_A700 font-poppins h-[1144px] 3xl:h-[1145px] lg:h-[742px] xl:h-[849px] 2xl:h-[954px] mx-[auto] lg:pr-[25px] xl:pr-[29px] 2xl:pr-[33px] pr-[40px] w-[100%]">
        <Stack className="absolute h-[1144px] 3xl:h-[1145px] lg:h-[742px] xl:h-[849px] 2xl:h-[954px] w-[100%]">
          <aside className="absolute items-center left-[0] w-[16%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Row
                  className="common-pointer items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] rounded-radius5 w-[90%]"
                  onClick={handleNavigate18}
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
                <div className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                  <Row className="bg-white_A700 items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_mail_black_900.png"
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] ml-[2px] w-[9%]"
                      alt="mail"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      Jobs
                    </Text>
                  </Row>
                </div>
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] mx-[auto] w-[94%]">
                  <Row
                    className="common-pointer items-center rounded-radius5 w-[96%]"
                    onClick={handleNavigate19}
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
                  <Row
                    className="common-pointer items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[96%]"
                    onClick={handleNavigate20}
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
                  <div className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] w-[97%]">
                    <Row
                      className="common-pointer items-center rounded-radius5 w-[100%]"
                      onClick={handleNavigate21}
                    >
                      <Img
                        src="images/img_home_white_A700.png"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                        alt="home"
                      />
                      <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        Resume Bank
                      </Text>
                    </Row>
                  </div>
                  <Row className="items-center lg:mt-[430px] xl:mt-[492px] 2xl:mt-[553px] mt-[664px] rounded-radius5 w-[100%]">
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
          <Column className="absolute inset-x-[0] mx-[auto] top-[2%] w-[98%]">
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
                  <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                    <Text className="capitalize font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
                      JOBS
                    </Text>
                    <Button
                      className="2xl:ml-[833px] flex items-center justify-center lg:ml-[647px] ml-[999px] text-center w-[5%] xl:ml-[740px]"
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
                </>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
            <Row className="items-center lg:ml-[280px] xl:ml-[320px] 2xl:ml-[360px] ml-[432px] lg:mr-[625px] xl:mr-[715px] 2xl:mr-[804px] mr-[965px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] w-[15%]">
              <Img
                src="images/img_arrowright_black_900.png"
                className="cursor-pointer h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[2%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowright"
              />
              <Img
                src="images/img_arrowright_black_900.png"
                className="cursor-pointer h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[205px] ml-[246px] w-[2%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright One"
              />
            </Row>
          </Column>
        </Stack>
        <Row className="absolute justify-center right-[8%] top-[9%] w-[73%]">
          <Column className="lg:pr-[177px] xl:pr-[203px] 2xl:pr-[228px] pr-[274px] w-[73%]">
            <Row className="items-center w-[100%]">
              <Text className="capitalize font-thin lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                Job Details
              </Text>
              <Text className="capitalize font-bold lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] ml-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                Application form
              </Text>
              <Text className="capitalize font-thin lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] ml-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                preview & publish
              </Text>
            </Row>
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] mt-[43px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Full Name
            </Text>
            <Input
              className="bg-transparent border-0 font-medium p-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] placeholder:text-gray_404 text-gray_404 w-[100%]"
              wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
              name="Input"
              placeholder="Enter full name"
              shape="RoundedBorder5"
              size="md"
            ></Input>
            <Row className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] w-[100%]">
              <Column className="w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Gender
                </Text>
                <SelectBox
                  className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[100%]"
                  placeholderClassName="bg-transparent text-gray_404"
                  name="Input One"
                  placeholder="Select Gender"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[10.5px] h-[4.72px] mr-[16px] lg:w-[6px] lg:h-[4px] lg:mr-[10px] xl:w-[7px] xl:h-[4px] xl:mr-[11px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[13px] 3xl:w-[10px] 3xl:h-[5px]"
                      alt="arrow_down"
                    />
                  }
                  shape="oundedBorder5"
                  size="sm"
                  variant="utlineGray402"
                ></SelectBox>
              </Column>
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Phone Number
                </Text>
                <Row className="bg-white_A700 border border-gray_402 border-solid items-center xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                  <SelectBox
                    className="bg-transparent font-medium ml-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[27%]"
                    placeholderClassName="bg-transparent text-black_900"
                    name="Group291"
                    placeholder="(+233)"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.png"
                        className="w-[10.5px] h-[4.72px] mr-[0] lg:w-[6px] lg:h-[4px] xl:w-[7px] xl:h-[4px] 2xl:w-[8px] 2xl:h-[4px] 3xl:w-[10px] 3xl:h-[5px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] ml-[16px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[auto]">
                    Enter phone number
                  </Text>
                </Row>
              </Column>
            </Row>
            <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[100%]">
              <Column className="w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Email
                </Text>
                <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] py-[9px] rounded-radius5 xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[100%]">
                  Enter email
                </Text>
              </Column>
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Country
                </Text>
                <SelectBox
                  className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[100%]"
                  placeholderClassName="bg-transparent text-gray_404"
                  name="Input Three"
                  placeholder="Select country"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[10.5px] h-[4.72px] mr-[16px] lg:w-[6px] lg:h-[4px] lg:mr-[10px] xl:w-[7px] xl:h-[4px] xl:mr-[11px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[13px] 3xl:w-[10px] 3xl:h-[5px]"
                      alt="arrow_down"
                    />
                  }
                  shape="oundedBorder5"
                  size="sm"
                  variant="utlineGray402"
                ></SelectBox>
              </Column>
            </Row>
            <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[100%]">
              <Column className="w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Region/State
                </Text>
                <SelectBox
                  className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[100%]"
                  placeholderClassName="bg-transparent text-gray_404"
                  name="Input Four"
                  placeholder="Enter State/Region"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[10.5px] h-[4.72px] mr-[16px] lg:w-[6px] lg:h-[4px] lg:mr-[10px] xl:w-[7px] xl:h-[4px] xl:mr-[11px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[13px] 3xl:w-[10px] 3xl:h-[5px]"
                      alt="arrow_down"
                    />
                  }
                  shape="oundedBorder5"
                  size="sm"
                  variant="utlineGray402"
                ></SelectBox>
              </Column>
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Location
                </Text>
                <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] py-[9px] rounded-radius5 xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[100%]">
                  Enter Location
                </Text>
              </Column>
            </Row>
            <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[100%]">
              <Column className="w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Years of Experience
                </Text>
                <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] py-[9px] rounded-radius5 xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[100%]">
                  Select years of experience
                </Text>
              </Column>
              <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Salary Expectation
                </Text>
                <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] py-[9px] rounded-radius5 xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_404 w-[100%]">
                  Enter Expected Salary
                </Text>
              </Column>
            </Row>
          </Column>
          <Row className="border border-gray_402 border-solid items-center justify-center mb-[109px] lg:mb-[70px] xl:mb-[80px] 2xl:mb-[90px] lg:mt-[199px] xl:mt-[228px] 2xl:mt-[256px] mt-[308px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] p-[24px] rounded-radius10 w-[27%]">
            <Img
              src="images/img_plus_blue_700_22X22.png"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[44px] xl:ml-[50px] 2xl:ml-[56px] ml-[68px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
              alt="plus One"
            />
            <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:mr-[38px] xl:mr-[43px] 2xl:mr-[49px] mr-[59px] my-[0] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Add Assessment
            </Text>
          </Row>
        </Row>
        <Column className="absolute bottom-[29%] right-[10%] w-[71%]">
          <Row className="items-center w-[52%]">
            <Column className="bg-white_A700 border border-gray_402 border-solid items-center lg:p-[25px] xl:p-[28px] 2xl:p-[32px] p-[39px] rounded-radius10 w-[49%]">
              <Img
                src="images/img_docattachment_blue_800.png"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                alt="Docattachment"
              />
              <Text className="font-medium mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Add Resume / CV
              </Text>
            </Column>
            <Column className="bg-white_A700 border border-gray_402 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:p-[25px] xl:p-[28px] 2xl:p-[32px] p-[39px] rounded-radius10 w-[49%]">
              <Img
                src="images/img_docattachment_blue_800.png"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                alt="Docattachment One"
              />
              <Text className="font-medium mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Add Cover Letter
              </Text>
            </Column>
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] w-[100%]">
            <Button
              className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[10%]"
              shape="RoundedBorder10"
              size="md"
              variant="OutlineBluegray102"
            >
              Save to Draft
            </Button>
            <Column
              className="common-pointer bg-bluegray_102 items-center xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[7%]"
              onClick={handleNavigate12}
            >
              <Column className="items-center rounded-radius10 w-[88%]">
                <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-blue_800 w-[auto]">
                  Previous
                </Text>
              </Column>
            </Column>
          </Row>
        </Column>
        <Button
          className="common-pointer absolute bottom-[29%] font-normal not-italic right-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[9%]"
          onClick={handleNavigate22}
          shape="RoundedBorder10"
          size="md"
          variant="FillBlue800"
        >
          Save and Continue
        </Button>
      </Stack>
    </>
  );
};

export default JobCreationOnePage;
