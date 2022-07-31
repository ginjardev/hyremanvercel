import React from "react";

import { Column, Row, Img, Text, Button, Line } from "components";

const DASHBOARDFivePage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[21px] xl:pr-[24px] 2xl:pr-[27px] pr-[33px] w-[19%]">
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
                <Row className="items-center justify-end lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] mb-[73px] ml-[auto] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] rounded-radius5 w-[95%]">
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
          <Column className="items-center lg:mb-[401px] xl:mb-[458px] 2xl:mb-[516px] mb-[619px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[81%]">
            <Row className="bg-white_A700 items-end justify-end xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                DASHBOARD
              </Text>
              <Button
                className="font-medium mb-[4px] lg:ml-[483px] xl:ml-[553px] 2xl:ml-[622px] ml-[746px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[7%]"
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
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] xl:mb-[10px] 2xl:mb-[11px] mb-[14px] lg:mb-[9px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] mr-[10px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                alt="user One"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] mt-[38px] w-[100%]">
              <Column className="bg-white_A700 mb-[2px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] py-[22px] rounded-radius10 shadow-bs w-[31%]">
                <Text className="capitalize font-medium lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] ml-[34px] lg:mr-[120px] xl:mr-[137px] 2xl:mr-[155px] mr-[186px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Jobs
                </Text>
                <Line className="bg-bluegray_101 h-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]" />
                <Img
                  src="images/img_creditcard.png"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] lg:ml-[123px] xl:ml-[140px] 2xl:ml-[158px] ml-[190px] lg:mr-[141px] xl:mr-[161px] 2xl:mr-[181px] mr-[218px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] mt-[64px] w-[4%]"
                  alt="creditcard"
                />
                <Text className="capitalize font-bold 2xl:ml-[110px] ml-[132px] lg:ml-[85px] xl:ml-[97px] lg:mr-[103px] xl:mr-[118px] 2xl:mr-[133px] mr-[160px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] mt-[26px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[auto]">
                  no current jobs
                </Text>
                <Button
                  className="font-medium lg:mb-[53px] xl:mb-[61px] 2xl:mb-[69px] mb-[83px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] mt-[42px] mx-[auto] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[24%]"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillGray400"
                >
                  Add
                </Button>
              </Column>
              <div className="overflow-x-auto w-[31%]">
                <Column className="bg-white_A700 items-center overflow-auto lg:py-[14px] xl:py-[16px] 2xl:py-[18px] py-[22px] rounded-radius10 shadow-bs w-[100%]">
                  <Row className="items-center justify-end w-[100%]">
                    <Column className="mb-[2px] w-[44%]">
                      <Text className="capitalize font-medium lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] ml-[34px] lg:mr-[147px] xl:mr-[168px] 2xl:mr-[189px] mr-[227px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Candidates
                      </Text>
                      <Line className="bg-bluegray_101 h-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]" />
                    </Column>
                    <Column className="w-[55%]">
                      <Text className="capitalize font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] ml-[24px] lg:mr-[226px] xl:mr-[259px] 2xl:mr-[291px] mr-[350px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        appointments
                      </Text>
                      <Line className="bg-bluegray_101 h-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]" />
                    </Column>
                  </Row>
                  <Text className="capitalize font-bold mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[auto]">
                    No candidates available
                  </Text>
                  <Button
                    className="font-medium lg:mb-[53px] xl:mb-[61px] 2xl:mb-[69px] mb-[83px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] mt-[48px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[24%]"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillGray400"
                  >
                    Add
                  </Button>
                </Column>
              </div>
              <Column className="bg-white_A700 items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] rounded-radius10 shadow-bs w-[31%]">
                <Row className="bg-gray_405 items-center ml-[auto] mt-[3px] p-[2px] rounded-radius16 w-[43%]">
                  <Button
                    className="font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-center w-[49%]"
                    shape="CircleBorder14"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    Today
                  </Button>
                  <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                    Yesterday
                  </Text>
                </Row>
                <Text className="capitalize font-bold 2xl:mt-[110px] mt-[133px] lg:mt-[86px] xl:mt-[98px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_404 w-[auto]">
                  no appointments available
                </Text>
                <Button
                  className="font-medium lg:mb-[56px] xl:mb-[64px] 2xl:mb-[72px] mb-[87px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] mt-[49px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[25%]"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillGray400"
                >
                  Add
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DASHBOARDFivePage;
