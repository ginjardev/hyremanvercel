import React from "react";

import { Column, Row, Img, Text, Button, Line, Stack, List } from "components";

const DASHBOARDTwoPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="items-center w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="bg-white_A700 items-center justify-end lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_vector_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="Vector"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_mail.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_user_white_A700.png"
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
                    src="images/img_home_white_A700.png"
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
                    alt="Vector One"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    log Out
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[82%]">
            <Row className="bg-white_A700 items-end justify-end xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                DASHBOARD
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
            <Row className="items-center justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] mt-[58px] w-[100%]">
              <Column className="bg-white_A700 items-center lg:py-[11px] xl:py-[13px] 2xl:py-[15px] py-[18px] rounded-radius10 shadow-bs w-[70%]">
                <Row className="items-center justify-between xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[94%]">
                  <Text className="capitalize font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                    Hiring Pipeline
                  </Text>
                  <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_703 w-[auto]">
                    View all
                  </Text>
                </Row>
                <Line className="bg-bluegray_101 h-[2px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[100%]" />
                <Column className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[96%]">
                  <Row className="lg:pr-[20px] xl:pr-[22px] 2xl:pr-[25px] pr-[31px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Job
                    </Text>
                    <Text className="font-medium mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[178px] xl:ml-[204px] 2xl:ml-[230px] ml-[276px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Candidates
                    </Text>
                    <Text className="font-medium lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] ml-[54px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Review
                    </Text>
                    <Text className="font-medium lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] ml-[64px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Interview
                    </Text>
                    <Text className="font-medium lg:ml-[46px] xl:ml-[52px] 2xl:ml-[59px] ml-[71px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Hired
                    </Text>
                    <Text className="font-medium lg:ml-[53px] xl:ml-[60px] 2xl:ml-[68px] ml-[82px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Status
                    </Text>
                  </Row>
                  <Stack className="lg:h-[29px] xl:h-[33px] 2xl:h-[37px] h-[44px] 3xl:h-[45px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]">
                    <Text className="absolute font-medium h-[max-content] inset-y-[0] left-[0] my-[auto] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Junior Android Developer
                    </Text>
                    <List
                      className="absolute xl:gap-[11px] 2xl:gap-[12px] gap-[15px] lg:gap-[9px] grid grid-cols-5 min-h-[auto] right-[0] w-[68%]"
                      orientation="horizontal"
                    >
                      <Column className="bg-gray_400 items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                          50
                        </Text>
                      </Column>
                      <Column className="bg-gray_400 items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                          25
                        </Text>
                      </Column>
                      <Column className="bg-gray_400 items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                          20
                        </Text>
                      </Column>
                      <Column className="bg-gray_400 items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                          5
                        </Text>
                      </Column>
                      <Column className="bg-gray_400 items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                          On-going
                        </Text>
                      </Column>
                    </List>
                    <Row className="absolute items-center justify-between w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Junior Android Developer
                      </Text>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        50
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        25
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        20
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        5
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        On-going
                      </Button>
                    </Row>
                  </Stack>
                  <List
                    className="gap-[0] min-h-[auto] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Marketing Executive
                      </Text>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        25
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        10
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        14
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        1
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        On-going
                      </Button>
                    </Row>
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Managing Director
                      </Text>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        25
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        10
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        14
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        1
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        On-going
                      </Button>
                    </Row>
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Digital Marketer
                      </Text>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        10
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        6
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        4
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        0
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        On-going
                      </Button>
                    </Row>
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Sales Executive
                      </Text>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        76
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        60
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        14
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        2
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        On-going
                      </Button>
                    </Row>
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] my-[5px] w-[100%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Sales Executive
                      </Text>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        76
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        60
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        14
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        2
                      </Button>
                      <Button
                        className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[12%]"
                        size="md"
                        variant="FillGray400"
                      >
                        On-going
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Column className="bg-white_A700 lg:py-[14px] xl:py-[16px] 2xl:py-[18px] py-[22px] rounded-radius10 shadow-bs w-[29%]">
                <Text className="capitalize font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] ml-[24px] lg:mr-[154px] xl:mr-[176px] 2xl:mr-[198px] mr-[238px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                  Job Summary
                </Text>
                <Line className="bg-bluegray_101 h-[2px] lg:mb-[228px] xl:mb-[260px] 2xl:mb-[293px] mb-[352px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]" />
              </Column>
            </Row>
            <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]">
              <Column className="bg-white_A700 lg:py-[11px] xl:py-[12px] 2xl:py-[14px] py-[17px] rounded-radius10 shadow-bs w-[70%]">
                <Row className="items-center justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] w-[95%]">
                  <Text className="capitalize font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                    Interviews
                  </Text>
                  <Row className="bg-gray_400 items-center justify-between p-[2px] rounded-radius10 w-[25%]">
                    <Button
                      className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[48%]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillWhiteA700"
                    >
                      Today
                    </Button>
                    <Button
                      className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[48%]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillGray400"
                    >
                      Yesterday
                    </Button>
                  </Row>
                </Row>
                <Line className="bg-bluegray_101 h-[2px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]" />
                <Column className="items-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] mb-[41px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[76%]">
                  <Row className="items-center justify-end xl:pl-[5px] lg:pl-[5px] 2xl:pl-[6px] pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] w-[100%]">
                    <Img
                      src="images/img_clock_bluegray_101.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="clock"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      9:00 am - 11:00 am
                    </Text>
                    <Text className="font-medium lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] ml-[164px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Interview with 20 Junior Developer candidates
                    </Text>
                  </Row>
                  <Row className="items-center justify-end 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:pl-[5px] lg:pl-[5px] 2xl:pl-[6px] pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] w-[100%]">
                    <Img
                      src="images/img_clock_bluegray_101.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="clock One"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      9:00 am - 11:00 am
                    </Text>
                    <Text className="font-medium lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] ml-[164px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Interview with 20 Junior Developer candidates
                    </Text>
                  </Row>
                  <Row className="items-center justify-end 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:pl-[5px] lg:pl-[5px] 2xl:pl-[6px] pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] w-[100%]">
                    <Img
                      src="images/img_clock_bluegray_101.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="clock Two"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      9:00 am - 11:00 am
                    </Text>
                    <Text className="font-medium lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] ml-[164px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Interview with 20 Junior Developer candidates
                    </Text>
                  </Row>
                  <Row className="items-center justify-end 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:pl-[5px] lg:pl-[5px] 2xl:pl-[6px] pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] w-[100%]">
                    <Img
                      src="images/img_clock_bluegray_101.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="clock Three"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      9:00 am - 11:00 am
                    </Text>
                    <Text className="font-medium lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] ml-[164px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Interview with 20 Junior Developer candidates
                    </Text>
                  </Row>
                  <Row className="items-center justify-end 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:pl-[5px] lg:pl-[5px] 2xl:pl-[6px] pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] w-[100%]">
                    <Img
                      src="images/img_clock_bluegray_101.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="clock Four"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      9:00 am - 11:00 am
                    </Text>
                    <Text className="font-medium lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] ml-[164px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Interview with 20 Junior Developer candidates
                    </Text>
                  </Row>
                  <Row className="items-center justify-end 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:pl-[5px] lg:pl-[5px] 2xl:pl-[6px] pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] w-[100%]">
                    <Img
                      src="images/img_clock_bluegray_101.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="clock Five"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      9:00 am - 11:00 am
                    </Text>
                    <Text className="font-medium lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] ml-[164px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Interview with 20 Junior Developer candidates
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[18px] xl:py-[20px] 2xl:py-[23px] py-[28px] rounded-radius10 shadow-bs w-[29%]">
                <Row className="items-center justify-between w-[89%]">
                  <Text className="capitalize font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                    Test
                  </Text>
                  <Text className="font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_703 w-[auto]">
                    View All
                  </Text>
                </Row>
                <Line className="bg-bluegray_101 h-[2px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] w-[100%]" />
                <Column className="items-center lg:mb-[116px] xl:mb-[132px] 2xl:mb-[149px] mb-[179px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[89%]">
                  <Row className="items-center justify-between w-[99%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Type
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_503 w-[auto]">
                      Responses
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Psychographic
                    </Text>
                    <Text className="bg-gray_400 font-medium lg:px-[21px] xl:px-[24px] 2xl:px-[27px] px-[33px] py-[2px] rounded-radius14 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      56
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Numeric
                    </Text>
                    <Text className="bg-gray_400 font-medium lg:px-[21px] xl:px-[24px] 2xl:px-[27px] px-[33px] py-[2px] rounded-radius14 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      62
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      Adwenepa
                    </Text>
                    <Text className="bg-gray_400 font-medium lg:px-[21px] xl:px-[24px] 2xl:px-[27px] px-[33px] py-[2px] rounded-radius14 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                      24
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DASHBOARDTwoPage;
