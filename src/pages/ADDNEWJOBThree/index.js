import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  SelectBox,
  Grid,
  Input,
} from "components";

const ADDNEWJOBThreePage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="justify-between w-[100%]">
          <aside className="items-center w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-end lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_mail_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_user_bluegray_100.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_ticket.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="ticket"
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
                <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[365px] xl:mt-[418px] 2xl:mt-[470px] mt-[564px] rounded-radius5 w-[96%]">
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
          <Column className="lg:mb-[40px] xl:mb-[45px] 2xl:mb-[51px] mb-[62px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[82%]">
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
            <Text className="capitalize font-normal ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] not-italic lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] text-black_900 w-[auto]">
              Add New Job
            </Text>
            <Row className="items-end ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] mt-[34px] w-[98%]">
              <Column className="lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] pr-[29px] w-[47%]">
                <Row className="items-center w-[85%]">
                  <Text className="capitalize font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                    Job Details
                  </Text>
                  <Img
                    src="images/img_arrowright_black_900.png"
                    className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] w-[1%]"
                    alt="arrowright"
                  />
                  <Text className="capitalize font-thin 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                    Application form
                  </Text>
                  <Img
                    src="images/img_arrowright_black_900.png"
                    className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] w-[1%]"
                    alt="arrowright One"
                  />
                  <Text className="capitalize font-thin 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                    preview & publish
                  </Text>
                </Row>
                <Column className="bg-bluegray_100 2xl:h-[107px] h-[128px] 3xl:h-[129px] lg:h-[83px] xl:h-[95px] items-center lg:ml-[132px] xl:ml-[151px] 2xl:ml-[170px] ml-[205px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:px-[18px] xl:px-[20px] 2xl:px-[23px] px-[28px] rounded-radius50 2xl:w-[106px] w-[128px] lg:w-[82px] xl:w-[94px]">
                  <Text className="font-normal lg:my-[15px] xl:my-[17px] 2xl:my-[20px] my-[24px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Add logo
                  </Text>
                </Column>
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Job title
                </Text>
                <SelectBox
                  className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]"
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
                <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Company
                </Text>
                <SelectBox
                  className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]"
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
                <Grid className="gap-[10px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px] grid grid-cols-2 lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                  <Column className="w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Industry
                    </Text>
                    <SelectBox
                      className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]"
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
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Work Type
                    </Text>
                    <SelectBox
                      className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]"
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
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Job Type
                    </Text>
                    <SelectBox
                      className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]"
                      placeholderClassName="bg-transparent text-black_900"
                      name="Input Four"
                      placeholder="Full-time"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.png"
                          className="w-[10.5px] h-[4.72px] mr-[27px] lg:w-[6px] lg:h-[4px] lg:mr-[17px] xl:w-[7px] xl:h-[4px] xl:mr-[20px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[22px] 3xl:w-[10px] 3xl:h-[5px]"
                          alt="arrow_down"
                        />
                      }
                      shape="oundedBorder5"
                      size="sm"
                      variant="utlineGray402"
                    ></SelectBox>
                  </Column>
                  <Column className="w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Experience Level
                    </Text>
                    <SelectBox
                      className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]"
                      placeholderClassName="bg-transparent text-black_900"
                      name="Input Five"
                      placeholder="Entry level"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.png"
                          className="w-[10.5px] h-[4.72px] mr-[27px] lg:w-[6px] lg:h-[4px] lg:mr-[17px] xl:w-[7px] xl:h-[4px] xl:mr-[20px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[22px] 3xl:w-[10px] 3xl:h-[5px]"
                          alt="arrow_down"
                        />
                      }
                      shape="oundedBorder5"
                      size="sm"
                      variant="utlineGray402"
                    ></SelectBox>
                  </Column>
                </Grid>
                <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] mt-[19px] w-[100%]">
                  <Column className="w-[49%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Salary Range
                    </Text>
                    <SelectBox
                      className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[100%]"
                      placeholderClassName="bg-transparent text-black_900"
                      name="price"
                      placeholder="GHC 1200 - 1500"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.png"
                          className="w-[10.5px] h-[4.72px] mr-[27px] lg:w-[6px] lg:h-[4px] lg:mr-[17px] xl:w-[7px] xl:h-[4px] xl:mr-[20px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[22px] 3xl:w-[10px] 3xl:h-[5px]"
                          alt="arrow_down"
                        />
                      }
                      shape="oundedBorder5"
                      size="sm"
                      variant="utlineGray402"
                    ></SelectBox>
                  </Column>
                  <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Location
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-medium p-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] placeholder:text-black_900 text-black_900 w-[100%]"
                      wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
                      name="Input Six"
                      placeholder="Accra"
                      shape="RoundedBorder5"
                      size="sm"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] mt-[19px] w-[100%]">
                  <Column className="w-[49%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Expiry Date
                    </Text>
                    <Row className="bg-white_A700 border border-gray_402 border-solid items-center xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius5 w-[100%]">
                      <Text className="font-medium 2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        10/05/2022 - 15/05/2022
                      </Text>
                      <Img
                        src="images/img_calendar_black_900_20X20.png"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                        alt="calendar"
                      />
                    </Row>
                    <Row className="items-end justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]">
                      <Text className="font-medium xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Set required score
                      </Text>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 text-center w-[45%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray402"
                      >
                        70
                      </Button>
                    </Row>
                  </Column>
                  <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Set Matching Skills
                    </Text>
                    <Row className="bg-white_A700 border border-gray_402 border-solid xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius5 w-[100%]">
                      <Text className="bg-gray_301 font-semibold leading-[normal] lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] mb-[53px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 text-center w-[20%]">
                        Angular
                      </Text>
                      <Text className="bg-gray_301 font-semibold leading-[normal] lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] mb-[53px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 text-center w-[30%]">
                        React Native
                      </Text>
                      <Text className="bg-gray_301 font-semibold leading-[normal] lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] mb-[53px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 text-center w-[41%]">
                        Androd Developer
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column className="lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] mt-[58px] w-[53%]">
                <Text className="font-medium ml-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Job Description
                </Text>
                <Column className="bg-white_A700 border border-gray_402 border-solid items-center mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] p-[18px] rounded-radius10 w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 w-[99%]">
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
                    articulate client requirements into technical architecture
                  </Text>
                </Column>
                <Text className="font-medium mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Job Requirement
                </Text>
                <Column className="bg-white_A700 border border-gray_402 border-solid items-center mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] p-[18px] rounded-radius5 w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 w-[99%]">
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
            <Row className="justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[99%]">
              <Button
                className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] mb-[16px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-center w-[11%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineBlack9001_2"
              >
                Save to Draft
              </Button>
              <Button
                className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-center w-[15%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillBlack900"
              >
                Save and Continue
              </Button>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ADDNEWJOBThreePage;
