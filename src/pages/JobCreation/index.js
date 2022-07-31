import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  SelectBox,
  Grid,
  Input,
} from "components";

const JobCreationPage = () => {
  const navigate = useNavigate();

  function handleNavigate25() {
    navigate("/dashboardseven");
  }
  function handleNavigate26() {
    navigate("/candidatesthree");
  }
  function handleNavigate27() {
    navigate("/testlibrary");
  }
  function handleNavigate28() {
    navigate("/resumebanksix");
  }
  function handleNavigate29() {
    navigate("/jobcreationone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pr-[25px] xl:pr-[29px] 2xl:pr-[33px] pr-[40px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] pr-[52px] w-[19%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Row
                  className="common-pointer items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] rounded-radius5 w-[90%]"
                  onClick={handleNavigate25}
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
                    onClick={handleNavigate26}
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
                    onClick={handleNavigate27}
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
                      onClick={handleNavigate28}
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
          <Column className="xl:mb-[107px] 2xl:mb-[120px] mb-[145px] lg:mb-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[81%]">
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
            <Stack className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] h-[36px] 3xl:h-[37px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[45%]">
              <Text className="absolute capitalize font-bold left-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                Job Details
              </Text>
              <Img
                src="images/img_arrowright_black_900.png"
                className="absolute h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] inset-y-[0] left-[26%] my-[auto] w-[1%]"
                alt="arrowright"
              />
              <Text className="absolute capitalize font-thin left-[29%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                Application form
              </Text>
              <Img
                src="images/img_arrowright_black_900.png"
                className="absolute h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] inset-y-[0] my-[auto] right-[35%] w-[1%]"
                alt="arrowright One"
              />
              <Text className="absolute capitalize font-thin right-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                preview & publish
              </Text>
              <Row className="absolute items-center justify-between w-[100%]">
                <Text className="capitalize font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                  Job Details
                </Text>
                <Img
                  src="images/img_arrowright_black_900.png"
                  className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1%]"
                  alt="arrowright Two"
                />
                <Text className="capitalize font-thin lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                  Application form
                </Text>
                <Img
                  src="images/img_arrowright_black_900.png"
                  className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1%]"
                  alt="arrowright Three"
                />
                <Text className="capitalize font-thin lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                  preview & publish
                </Text>
              </Row>
            </Stack>
            <Row className="items-center justify-evenly lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] mt-[78px] w-[100%]">
              <Column className="lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[47%]">
                <Column className="bg-bluegray_102 2xl:h-[107px] h-[128px] 3xl:h-[129px] lg:h-[83px] xl:h-[95px] items-center lg:ml-[139px] xl:ml-[159px] 2xl:ml-[179px] ml-[215px] lg:mr-[176px] xl:mr-[202px] 2xl:mr-[227px] mr-[273px] lg:px-[18px] xl:px-[20px] 2xl:px-[23px] px-[28px] rounded-radius50 2xl:w-[106px] w-[128px] lg:w-[82px] xl:w-[94px]">
                  <Text className="font-normal lg:my-[15px] xl:my-[17px] 2xl:my-[20px] my-[24px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Add logo
                  </Text>
                </Column>
                <Column className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] w-[100%]">
                  <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Job title
                  </Text>
                  <SelectBox
                    className="bg-transparent font-normal xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[100%]"
                    placeholderClassName="bg-transparent text-black_900"
                    name="Input"
                    placeholder="Moblie Developer"
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
                  <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] mt-[19px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Company
                  </Text>
                  <SelectBox
                    className="bg-transparent font-normal xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[100%]"
                    placeholderClassName="bg-transparent text-black_900"
                    name="Input One"
                    placeholder="IT Consortium"
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
                  <Grid className="gap-[10px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px] grid grid-cols-2 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Industry
                      </Text>
                      <SelectBox
                        className="bg-transparent font-normal xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[100%]"
                        placeholderClassName="bg-transparent text-black_900"
                        name="Input Two"
                        placeholder="IT & Software Industry"
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
                    <Column className="w-[100%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Work Type
                      </Text>
                      <SelectBox
                        className="bg-transparent font-normal xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[100%]"
                        placeholderClassName="bg-transparent text-black_900"
                        name="Input Three"
                        placeholder="Remote"
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
                    <Column className="w-[100%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Job Type
                      </Text>
                      <SelectBox
                        className="bg-transparent font-normal xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[100%]"
                        placeholderClassName="bg-transparent text-black_900"
                        name="Input Four"
                        placeholder="Full-time"
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
                    <Column className="w-[100%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Experience Level
                      </Text>
                      <SelectBox
                        className="bg-transparent font-normal xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[100%]"
                        placeholderClassName="bg-transparent text-black_900"
                        name="Input Five"
                        placeholder="Entry level"
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
                  </Grid>
                  <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] mt-[22px] w-[100%]">
                    <Column className="w-[49%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Salary Range
                      </Text>
                      <SelectBox
                        className="bg-transparent font-normal xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[100%]"
                        placeholderClassName="bg-transparent text-black_900"
                        name="price"
                        placeholder="GHC 1200 - 1500"
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
                    <Column className="w-[49%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Location
                      </Text>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] placeholder:text-black_900 text-black_900 w-[100%]"
                        wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
                        name="Input Six"
                        placeholder="Accra"
                        shape="RoundedBorder5"
                        size="sm"
                      ></Input>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] mt-[22px] w-[100%]">
                    <Column className="w-[49%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Expiry Date
                      </Text>
                      <Row className="bg-white_A700 border border-gray_402 border-solid items-center xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                        <Text className="font-normal ml-[0] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                          10/05/2022 - 15/05/2022
                        </Text>
                        <Img
                          src="images/img_calendar_black_900_20X20.png"
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                          alt="calendar"
                        />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] w-[100%]">
                        <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                          Set required score
                        </Text>
                        <Button
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 text-center w-[45%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="OutlineGray402"
                        >
                          70
                        </Button>
                      </Row>
                    </Column>
                    <Column className="w-[49%]">
                      <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Set Matching Skills
                      </Text>
                      <Row className="bg-white_A700 border border-gray_402 border-solid xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius5 w-[100%]">
                        <Text className="bg-bluegray_102 font-normal leading-[normal] lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] mb-[53px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 text-center w-[20%]">
                          Angular
                        </Text>
                        <Text className="bg-bluegray_102 font-normal leading-[normal] lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] mb-[53px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 text-center w-[29%]">
                          React Native
                        </Text>
                        <Text className="bg-bluegray_102 font-normal leading-[normal] lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] mb-[53px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 text-center w-[41%]">
                          Androd Developer
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="w-[53%]">
                <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Job Description
                </Text>
                <Column className="bg-white_A700 border border-gray_402 border-solid items-center mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[96%]">
                    Your central role in the mobile ecosystem enables you to
                    help clients manage the demands of fast-moving
                    environments.  With your knowledge of innovative on-the-go
                    solutions, you’ll help them become mobility leaders by
                    creating strategic, cross-company approaches that increase
                    productivity, enhance collaboration and drive more
                    transactions. <br />
                    <br />
                    The work: <br />
                    Develop mobile native and mobile web applications <br />
                    Mobile application development, architecture and
                    infrastructure design, technology build and deployment
                    activities on multiple platforms <br />
                    Assist in refining and enhancing mobile architectures and
                    frameworks <br />
                    Coordinate and work with clients and offshore teams and
                    articulate client requirements into technical architecture{" "}
                    <br />
                    <br />
                    <br />
                    Qualifications
                    <br />
                    Here’s what you need: <br />
                    Minimum 1 year hands-on Angular/Ionic, and/or React Native
                    and/or Android (Java/Kotlin)/iOS (objective C/Swift) Native
                    mobile app development experience <br />
                    Minimum 1 year of experience troubleshooting, diagnosing,
                    prototyping, gathering requirements or supporting mobile app
                    development as part of a team <br />
                    Bachelor's degree or equivalent (minimum 12 years) work
                    experience  <br />
                    <br />
                    Bonus points if: <br />
                    Experience working with Angular version 5 or 6 and/or Ionic
                    version 3 or 4 preferred <br />
                    Must have contributed significantly to at least two mobile
                    applications and be able to describe those contributions{" "}
                    <br />
                    Cumulative mobile app development, design, and/or
                    architecture experience with any of the following areas:{" "}
                    <br />
                    Hybrid Mobile Applications (Angular/Ionic, React Native,
                    HTML/CSS, JS, Cordova) <br />
                    Server-side/Middleware (REST API services, microservices,
                    Node.js, Apigee) <br />
                    Native Applications (iOS, Android) <br />
                    Development experience with Flutter – backend/frontend
                    development
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] w-[100%]">
              <Button
                className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[8%]"
                shape="RoundedBorder10"
                size="md"
                variant="OutlineBluegray102"
              >
                Save to Draft
              </Button>
              <Button
                className="flex items-center justify-center text-center w-[13%]"
                onClick={handleNavigate29}
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
                <div className="common-pointer bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                  Save and Continue
                </div>
              </Button>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default JobCreationPage;
