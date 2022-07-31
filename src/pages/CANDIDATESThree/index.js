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
  Line,
  CheckBox,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CANDIDATESThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate39() {
    navigate("/resumebanksix");
  }
  function handleNavigate48() {
    navigate("/dashboardseven");
  }
  function handleNavigate49() {
    navigate("/jobsten");
  }
  function handleNavigate50() {
    navigate("/testlibrary");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack className="bg-white_A700 font-poppins h-[1144px] 3xl:h-[1145px] lg:h-[742px] xl:h-[849px] 2xl:h-[954px] mx-[auto] 2xl:pr-[10px] pr-[13px] lg:pr-[8px] xl:pr-[9px] w-[100%]">
        <Stack className="absolute h-[1144px] 3xl:h-[1145px] lg:h-[742px] xl:h-[849px] 2xl:h-[954px] right-[2%] w-[98%]">
          <aside className="absolute items-center left-[0] w-[16%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Column className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] w-[90%]">
                  <Row
                    className="common-pointer items-center rounded-radius5 w-[100%]"
                    onClick={handleNavigate48}
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
                  <div className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] w-[100%]">
                    <Row
                      className="common-pointer items-center rounded-radius5 w-[100%]"
                      onClick={handleNavigate49}
                    >
                      <Img
                        src="images/img_mail.png"
                        className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                        alt="mail"
                      />
                      <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        Jobs
                      </Text>
                    </Row>
                  </div>
                </Column>
                <Row className="bg-white_A700 items-center justify-evenly lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_user.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] mx-[auto] w-[94%]">
                  <Row
                    className="common-pointer items-center rounded-radius5 w-[96%]"
                    onClick={handleNavigate50}
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
                      onClick={handleNavigate39}
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
                      CANDIDATES
                    </Text>
                    <Button
                      className="2xl:ml-[741px] flex items-center justify-center lg:ml-[576px] ml-[889px] text-center w-[5%] xl:ml-[659px]"
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
            <Row className="items-center justify-end ml-[auto] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] mr-[29px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] mt-[34px] w-[3%]">
              <Img
                src="images/img_arrowleft.png"
                className="cursor-pointer 2xl:h-[11px] h-[12px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[18%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowleft"
              />
              <Img
                src="images/img_arrowright.png"
                className="cursor-pointer 2xl:h-[11px] h-[12px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[20px] xl:ml-[22px] 2xl:ml-[25px] ml-[31px] w-[18%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright"
              />
            </Row>
          </Column>
        </Stack>
        <Row className="absolute items-end right-[8%] top-[9%] w-[74%]">
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="bg-transparent border-0 font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] placeholder:text-gray_600_7f text-gray_600_7f w-[100%]"
            wrapClassName="flex w-[33%]"
            name="SearchBar"
            placeholder="Search candidate"
            prefix={
              <Img
                src="images/img_search_gray_646_16X16.png"
                className="cursor-pointer w-[16px] h-[16px] ml-[16px] mr-[14px] lg:w-[10px] lg:h-[11px] lg:ml-[10px] lg:mr-[9px] xl:w-[11px] xl:h-[12px] xl:ml-[11px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[13px] 2xl:mr-[11px] 3xl:h-[17px] my-[auto]"
                alt="search"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  color="#7f686b6f"
                  className="cursor-pointer w-[16px] h-[16px] ml-[10px] mr-[22px] lg:w-[10px] lg:h-[11px] lg:ml-[6px] lg:mr-[14px] xl:w-[11px] xl:h-[12px] xl:ml-[7px] xl:mr-[16px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[8px] 2xl:mr-[18px] 3xl:h-[17px] my-[auto]"
                  onClick={() => setInputvalue("")}
                />
              ) : (
                ""
              )
            }
            shape="srcCircleBorder22"
            variant="srcOutlineBlack9003f"
          ></Input>
          <Button
            className="2xl:ml-[492px] flex items-center justify-center lg:ml-[382px] ml-[590px] text-center w-[12%] xl:ml-[437px]"
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
              Add Candidate
            </div>
          </Button>
          <Button
            className="font-normal lg:ml-[20px] xl:ml-[22px] 2xl:ml-[25px] ml-[31px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[2%]"
            shape="RoundedBorder5"
            size="sm"
            variant="OutlineBlue800"
          >
            1
          </Button>
          <Line className="bg-black_900 h-[1px] xl:ml-[5px] lg:ml-[5px] 2xl:ml-[6px] ml-[8px] lg:my-[12px] xl:my-[14px] 2xl:my-[15px] my-[19px] w-[1%]" />
          <Button
            className="font-normal xl:ml-[5px] lg:ml-[5px] 2xl:ml-[6px] ml-[8px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[2%]"
            shape="RoundedBorder5"
            size="sm"
            variant="OutlineBlack9001_2"
          >
            2
          </Button>
        </Row>
        <Row className="absolute bg-bluegray_102 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[15px] p-[19px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[15%] w-[81%]">
          <CheckBox
            className="font-medium xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] lg:pl-[16px] xl:pl-[18px] 2xl:pl-[20px] pl-[25px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase"
            inputClassName="mr-[5px] w-[undefinedpx]"
            name="FullName"
            label="Full Name"
          ></CheckBox>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown"
          />
          <Text className="font-medium lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] ml-[53px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase w-[auto]">
            Email
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown One"
          />
          <Text className="font-medium lg:ml-[106px] xl:ml-[122px] 2xl:ml-[137px] ml-[165px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase w-[auto]">
            Gender
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Two"
          />
          <Text className="font-medium lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] ml-[34px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase w-[auto]">
            Phone
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Three"
          />
          <Text className="font-medium lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] ml-[59px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase w-[auto]">
            Country
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Four"
          />
          <Text className="font-medium lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase w-[auto]">
            City
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Five"
          />
          <Text className="font-medium lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] ml-[33px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase w-[auto]">
            Skill
          </Text>
          <Img
            src="images/img_arrowdown.png"
            className="xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
            alt="arrowdown Six"
          />
          <SelectBox
            className="bg-transparent font-medium 2xl:ml-[109px] ml-[131px] lg:ml-[84px] xl:ml-[97px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 uppercase w-[8%]"
            placeholderClassName="bg-transparent text-black_900"
            name="FrameSixtyTwo"
            placeholder="Industry"
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
        <Column className="absolute items-center pt-[4px] right-[1%] top-[22%] w-[81%]">
          <Row className="w-[98%]">
            <CheckBox
              className="font-medium mt-[2px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] pl-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="CarolineKpogo"
              label="Caroline Kpogo"
            ></CheckBox>
            <Text className="font-normal lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] ml-[49px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              carolinekpogo@gmail.com
            </Text>
            <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Female
            </Text>
            <Text className="font-normal lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] ml-[66px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              0209414362
            </Text>
            <Text className="font-normal lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] ml-[52px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Ghana
            </Text>
            <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] ml-[90px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Accra
            </Text>
            <Text className="font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] ml-[48px] mt-[2px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Angular, Digital Mark......
            </Text>
            <Text className="font-normal mb-[2px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] ml-[29px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              IT Software and Dev....
            </Text>
            <Line className="bg-gray_600 lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[86px] my-[1px] rotate-[90deg] w-[4px]" />
          </Row>
          <Line className="bg-gray_402 h-[1px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
        </Column>
        <Column className="absolute items-center pt-[4px] right-[1%] top-[26%] w-[81%]">
          <Row className="w-[98%]">
            <CheckBox
              className="font-medium mt-[1px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] pl-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="KingsleySarpon"
              label="Kingsley Sarpong"
            ></CheckBox>
            <Text className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] ml-[36px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              kingsleyboakye7@gmail.com
            </Text>
            <Text className="font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[20px] ml-[25px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Male
            </Text>
            <Text className="font-normal lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] ml-[84px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              0209414362
            </Text>
            <Text className="font-normal lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] ml-[52px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Ghana
            </Text>
            <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] ml-[90px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Kumasi
            </Text>
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] ml-[38px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              React, Django, Node, ....
            </Text>
            <Text className="font-normal mb-[1px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] ml-[32px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              IT Software and Dev....
            </Text>
            <Line className="bg-gray_600 lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[86px] my-[1px] rotate-[90deg] w-[4px]" />
          </Row>
          <Line className="bg-gray_402 h-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] w-[100%]" />
        </Column>
      </Stack>
    </>
  );
};

export default CANDIDATESThreePage;
