import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Input,
  Stack,
  Switch,
  SelectBox,
} from "components";

const ADDNEWJOBTwoPage = () => {
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
                    src="images/img_download.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="download"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    test Library
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
          <Column className="items-center lg:mb-[134px] xl:mb-[154px] 2xl:mb-[173px] mb-[208px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[82%]">
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
            <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] w-[98%]">
              <Text className="capitalize font-normal not-italic lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] text-black_900 w-[auto]">
                Add New Job
              </Text>
              <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] mt-[34px] w-[38%]">
                <Text className="capitalize font-thin lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                  Job Details
                </Text>
                <Img
                  src="images/img_arrowright_black_900.png"
                  className="h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] w-[1%]"
                  alt="arrowright"
                />
                <Text className="capitalize font-bold 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
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
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] w-[83%]">
                <Column className="lg:pr-[177px] xl:pr-[203px] 2xl:pr-[228px] pr-[274px] w-[78%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Full Name
                  </Text>
                  <Input
                    className="bg-transparent border-0 font-medium p-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] placeholder:text-gray_404 text-gray_404 w-[100%]"
                    wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
                    name="Input"
                    placeholder="Enter full name"
                    shape="RoundedBorder5"
                    size="sm"
                  ></Input>
                </Column>
                <Stack className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] mb-[33px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[4%]">
                  <Switch value={false} className="absolute w-[100%]" />
                  <Switch value={false} className="absolute w-[100%]" />
                </Stack>
                <Text className="font-medium lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] mb-[30px] lg:ml-[20px] xl:ml-[22px] 2xl:ml-[25px] ml-[31px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                  Add Assessment
                </Text>
              </Row>
              <Row className="justify-evenly lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] w-[100%]">
                <Column className="mb-[101px] lg:mb-[65px] xl:mb-[74px] 2xl:mb-[84px] lg:pr-[172px] xl:pr-[197px] 2xl:pr-[221px] pr-[266px] w-[64%]">
                  <Row className="items-center w-[100%]">
                    <Column className="w-[49%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Gender
                      </Text>
                      <SelectBox
                        className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[100%]"
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
                    <Stack className="lg:h-[45px] xl:h-[52px] 2xl:h-[58px] h-[69px] 3xl:h-[70px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                      <Text className="absolute font-medium left-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 top-[0] w-[auto]">
                        Phone Number
                      </Text>
                      <Column className="absolute bg-white_A700 border border-gray_402 border-solid bottom-[0] xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius5 w-[100%]">
                        <Text className="font-medium ml-[2px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[auto]">
                          Enter phone number
                        </Text>
                      </Column>
                      <Column className="absolute w-[100%]">
                        <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                          Phone Number
                        </Text>
                        <Row className="bg-white_A700 border border-gray_402 border-solid items-center xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius5 w-[100%]">
                          <SelectBox
                            className="bg-transparent font-medium ml-[2px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[29%]"
                            placeholderClassName="bg-transparent text-black_900"
                            name="Group108"
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
                          <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] ml-[16px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[auto]">
                            Enter phone number
                          </Text>
                        </Row>
                      </Column>
                    </Stack>
                  </Row>
                  <Row className="items-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                    <Column className="w-[49%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Email
                      </Text>
                      <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius5 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[100%]">
                        Enter email
                      </Text>
                    </Column>
                    <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Country
                      </Text>
                      <SelectBox
                        className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[100%]"
                        placeholderClassName="bg-transparent text-gray_404"
                        name="Input Three"
                        placeholder="Select country"
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
                  </Row>
                  <Row className="items-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                    <Column className="w-[49%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Region/State
                      </Text>
                      <SelectBox
                        className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[100%]"
                        placeholderClassName="bg-transparent text-gray_404"
                        name="Input Four"
                        placeholder="Enter State/Region"
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
                      <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] pl-[21px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius5 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[100%]">
                        Enter Location
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                    <Column className="w-[49%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Years of Experience
                      </Text>
                      <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] pl-[21px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius5 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[100%]">
                        Select years of experience
                      </Text>
                    </Column>
                    <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[49%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Salary Expectation
                      </Text>
                      <Text className="bg-white_A700 border border-gray_402 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] pl-[21px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius5 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[100%]">
                        Enter Expected Salary
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                    <Column className="bg-white_A700 border border-gray_402 border-solid items-center lg:p-[24px] xl:p-[28px] 2xl:p-[31px] p-[38px] rounded-radius10 w-[49%]">
                      <Img
                        src="images/img_docattachment.png"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                        alt="Docattachment"
                      />
                      <Text className="font-medium mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Add Resume / CV
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_402 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:p-[24px] xl:p-[28px] 2xl:p-[31px] p-[38px] rounded-radius10 w-[49%]">
                      <Img
                        src="images/img_docattachment.png"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                        alt="Docattachment One"
                      />
                      <Text className="font-medium mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Add Cover Letter
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="xl:mt-[106px] 2xl:mt-[120px] mt-[144px] lg:mt-[93px] w-[36%]">
                  <Row className="border border-gray_402 border-solid items-center lg:mr-[101px] xl:mr-[116px] 2xl:mr-[130px] mr-[157px] lg:p-[14px] xl:p-[17px] 2xl:p-[19px] p-[23px] rounded-radius10 w-[68%]">
                    <Img
                      src="images/img_plus_blue_700.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] ml-[60px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="plus"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Add Assessment
                    </Text>
                  </Row>
                  <Row className="items-center justify-end ml-[auto] lg:mt-[194px] xl:mt-[222px] 2xl:mt-[250px] mt-[300px] w-[80%]">
                    <Button
                      className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[36%]"
                      shape="RoundedBorder5"
                      size="xl"
                      variant="OutlineBlack900"
                    >
                      Previous
                    </Button>
                    <Button
                      className="font-normal lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] ml-[39px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-center w-[54%]"
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
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ADDNEWJOBTwoPage;
