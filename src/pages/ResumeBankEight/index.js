import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Line,
  CheckBox,
} from "components";

const ResumeBankEightPage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/jobseight");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] pr-[52px] w-[18%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] rounded-radius5 w-[90%]">
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
                  <Column className="items-center w-[100%]">
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
                    <Row className="items-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] rounded-radius5 w-[91%]">
                      <Img
                        src="images/img_user_white_A700.png"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                        alt="user"
                      />
                      <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        Candidates
                      </Text>
                    </Row>
                  </Column>
                </div>
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] mx-[auto] w-[94%]">
                  <Row className="items-center rounded-radius5 w-[96%]">
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
                    <Row className="items-center rounded-radius5 w-[100%]">
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
          <Column className="lg:mb-[490px] xl:mb-[561px] 2xl:mb-[631px] mb-[757px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[82%]">
            <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[97%]">
              <Text className="capitalize font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
                rESUME BANK
              </Text>
              <Button
                className="2xl:ml-[728px] flex items-center justify-center lg:ml-[565px] ml-[873px] text-center w-[5%] xl:ml-[647px]"
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
            <Row className="xl:ml-[11px] 2xl:ml-[12px] ml-[15px] lg:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[92%]">
              <Button
                className="common-pointer flex items-center justify-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] rotate-[180deg] w-[5%]"
                onClick={handleNavigate16}
                shape="icbRoundedBorder33"
                size="lgIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_frame132.png"
                  className="flex items-center justify-center"
                  onClick={handleNavigate16}
                  alt="Frame132"
                />
              </Button>
              <Column className="lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] mb-[17px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] ml-[26px] w-[93%]">
                <Row className="w-[100%]">
                  <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[auto]">
                    JUNIOR MOBILE DEVELOPER
                  </Text>
                  <Text className="font-normal 2xl:mb-[10px] mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] ml-[26px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                    Copy job url
                  </Text>
                  <Img
                    src="images/img_mobile_gray_607.png"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] 2xl:mb-[10px] mb-[13px] lg:mb-[8px] xl:mb-[9px] xl:ml-[5px] lg:ml-[5px] 2xl:ml-[6px] ml-[8px] mt-[1px] w-[2%]"
                    alt="mobile"
                  />
                  <Text className="font-medium xl:mb-[10px] 2xl:mb-[11px] mb-[14px] lg:mb-[9px] lg:ml-[381px] xl:ml-[435px] 2xl:ml-[490px] ml-[588px] mt-[2px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_7f w-[auto]">
                    Share on
                  </Text>
                  <Button
                    className="flex lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] items-center justify-center 2xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] rounded-radius50 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                    size="smIcn"
                    variant="icbOutlineBlack9007f"
                  >
                    <Img
                      src="images/img_map.png"
                      className="h-[12px] flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                      alt="akariconslink"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] items-center justify-center 2xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] rounded-radius50 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                    size="smIcn"
                    variant="icbOutlineBlack9007f"
                  >
                    <Img
                      src="images/img_akariconslink.png"
                      className="h-[12px] flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                      alt="akariconslink One"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] items-center justify-center 2xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] rounded-radius50 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                    size="smIcn"
                    variant="icbOutlineBlack9007f"
                  >
                    <Img
                      src="images/img_akariconslink_black_900.png"
                      className="flex items-center justify-center"
                      alt="akariconslink Two"
                    />
                  </Button>
                </Row>
                <Row className="items-center mt-[2px] w-[15%]">
                  <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                    Full time
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                    Accra , Ghana
                  </Text>
                </Row>
              </Column>
            </Row>
            <Row className="ml-[1px] mt-[3px] w-[97%]">
              <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-gray_607 w-[auto]">
                JOB DETAILS
              </Text>
              <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                CANDIDATES
              </Text>
              <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900_7f w-[auto]">
                NOTES
              </Text>
              <Button
                className="font-normal mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[518px] xl:ml-[593px] 2xl:ml-[667px] ml-[800px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[11%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillBlue800"
              >
                Submit Candidate
              </Button>
            </Row>
            <Stack className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] h-[72px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] w-[100%]">
              <Stack className="absolute bottom-[44%] h-[2px] 3xl:h-[3px] w-[100%]">
                <Line className="absolute bg-gray_402 h-[1px] top-[0] w-[100%]" />
                <Column className="absolute w-[100%]">
                  <Line className="bg-gray_402 h-[2px] w-[100%]" />
                  <Line className="bg-black_900 h-[2px] lg:ml-[107px] xl:ml-[123px] 2xl:ml-[138px] ml-[166px] mr-[1094px] lg:mr-[709px] xl:mr-[811px] 2xl:mr-[912px] w-[11%]" />
                </Column>
              </Stack>
              <Row className="absolute bg-bluegray_102 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[19px] p-[23px] right-[3%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[97%]">
                <CheckBox
                  className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[1px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] pl-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  name="FullName"
                  label="Full Name"
                ></CheckBox>
                <Text className="font-medium lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] ml-[96px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Email
                </Text>
                <Text className="font-medium lg:ml-[151px] xl:ml-[173px] 2xl:ml-[195px] ml-[234px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Phone
                </Text>
                <Text className="font-medium lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] ml-[87px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Skills Match
                </Text>
                <Text className="font-medium lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] ml-[45px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Test Score
                </Text>
                <Text className="font-medium lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] ml-[55px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Owner
                </Text>
                <Text className="font-medium lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] ml-[86px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Stage
                </Text>
              </Row>
            </Stack>
            <Row className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] ml-[42px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[93%]">
              <CheckBox
                className="font-normal mt-[1px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] pl-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="ReginaBoatema"
                label="Regina Boatema"
                variant="OutlineGray4021_2"
              ></CheckBox>
              <Text className="font-normal mb-[1px] lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] ml-[46px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                reginaboatema@gmail.com
              </Text>
              <Text className="font-normal mb-[1px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                0209414362
              </Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] ml-[72px] mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                98 %
              </Text>
              <Text className="font-normal ml-[111px] lg:ml-[71px] xl:ml-[82px] 2xl:ml-[92px] mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                0
              </Text>
              <Text className="font-normal lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] ml-[92px] mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Mista Boakye
              </Text>
              <Text className="font-medium lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] ml-[33px] mt-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                Interview
              </Text>
              <Line className="bg-gray_600 lg:h-[13px] xl:h-[15px] 2xl:h-[16px] h-[19px] 3xl:h-[20px] lg:ml-[118px] xl:ml-[135px] 2xl:ml-[152px] ml-[183px] my-[2px] rotate-[90deg] w-[4px]" />
            </Row>
            <Line className="bg-gray_402 h-[1px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[97%]" />
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ResumeBankEightPage;
