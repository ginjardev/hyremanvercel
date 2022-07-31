import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  SelectBox,
  CheckBox,
  Line,
} from "components";

const CompanyPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="justify-between w-[100%]">
          <aside className="items-center w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mr-[44px] xl:mr-[50px] 2xl:mr-[56px] mr-[68px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] mt-[47px] mx-[auto] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_mail.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_user_bluegray_100.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] mx-[auto] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_download.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="download"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    test Library
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] mx-[auto] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_calendar_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[10%]"
                    alt="calendar"
                  />
                  <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    company
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] mt-[28px] mx-[auto] rounded-radius5 w-[85%]">
                  <Img
                    src="images/img_home.png"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                    alt="home"
                  />
                  <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Resume Bank
                  </Text>
                </Row>
                <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[321px] xl:mt-[367px] 2xl:mt-[413px] mt-[496px] rounded-radius5 w-[96%]">
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
          <Column className="items-center lg:mb-[504px] xl:mb-[576px] 2xl:mb-[648px] mb-[778px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[82%]">
            <Row className="bg-white_A700 items-end justify-end xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                Company
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
            <Row className="lg:mt-[33px] xl:mt-[37px] 2xl:mt-[42px] mt-[51px] w-[90%]">
              <SelectBox
                className="bg-transparent font-bold mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[12%]"
                placeholderClassName="bg-transparent text-black_900"
                name="AllJobs"
                placeholder="All Companies"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.png"
                    className="w-[10.5px] h-[4.72px] mr-[0] lg:w-[6px] lg:h-[4px] xl:w-[7px] xl:h-[4px] 2xl:w-[8px] 2xl:h-[4px] 3xl:w-[10px] 3xl:h-[5px]"
                    alt="arrow_down"
                  />
                }
                shape="oundedBorder10"
                variant="dropdown0"
              ></SelectBox>
              <Row className="items-center justify-center mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[57px] xl:ml-[65px] 2xl:ml-[73px] ml-[88px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] rounded-radius10 w-[20%]">
                <Text className="font-bold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_400 w-[auto]">
                  Sort by
                </Text>
                <SelectBox
                  className="bg-transparent font-bold lg:ml-[20px] xl:ml-[22px] 2xl:ml-[25px] ml-[31px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[64%]"
                  placeholderClassName="bg-transparent text-black_900"
                  name="GroupFortyTwo"
                  placeholder="Date Created"
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
              </Row>
              <Button
                className="font-medium lg:ml-[411px] xl:ml-[470px] 2xl:ml-[529px] ml-[635px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[11%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add Company
              </Button>
            </Row>
            <Row className="bg-gray_401 items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] mt-[34px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
              <CheckBox
                className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] pl-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="Company One"
                label="Company"
              ></CheckBox>
              <Text className="font-medium lg:ml-[111px] xl:ml-[127px] 2xl:ml-[143px] ml-[172px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Industry
              </Text>
              <Text className="font-medium xl:ml-[104px] 2xl:ml-[117px] ml-[141px] lg:ml-[91px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Active Job
              </Text>
              <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] ml-[27px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Contact Name
              </Text>
              <Text className="font-medium lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] ml-[75px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Email
              </Text>
              <Text className="font-medium lg:ml-[173px] xl:ml-[197px] 2xl:ml-[222px] ml-[267px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Role
              </Text>
            </Row>
            <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[95%]">
              <CheckBox
                className="font-medium lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] pl-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="Metaport"
                label="Metaport"
              ></CheckBox>
              <Text className="font-medium lg:ml-[116px] xl:ml-[132px] 2xl:ml-[149px] ml-[179px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Education Technology
              </Text>
              <Text className="font-medium lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] ml-[67px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                1
              </Text>
              <Text className="font-medium lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] ml-[66px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Mary Okwong
              </Text>
              <Text className="font-medium ml-[118px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                maryokwong@metaport.com
              </Text>
              <Text className="font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] ml-[72px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                CEO
              </Text>
              <Line className="bg-gray_600 lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] xl:ml-[106px] 2xl:ml-[120px] ml-[144px] lg:ml-[93px] rotate-[90deg] w-[4px]" />
            </Row>
            <Line className="bg-gray_402 h-[1px] xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] w-[99%]" />
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CompanyPage;
