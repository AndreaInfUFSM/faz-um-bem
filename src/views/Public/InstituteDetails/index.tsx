import detailsStyle from '../../../css/InstituteDetails.module.css';
import campaignStyles from '../../../css/Campaigns.module.css';
// import "../../../css/campaign-images-slider.css";
import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Image,
  Tooltip,
  Grid,
  GridItem,
  Link,
  Text,
  IconButton,
  useMediaQuery
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { FaRegEnvelope, FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import "@fontsource/montserrat/700.css"

export default function Home() {
  let { id } : any = {};
  id = useParams();
  id = id.id;
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  const [isGreater] = useMediaQuery("(min-width: 1200px)")
  const history = useHistory();
  const campanhas = [
    {
      id: 0,
      title: "Campanha 1",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 1,
      instituteId: 0
    },
    {
      id: 1,
      title: "Campanha 2",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 2,
      instituteId: 1
    },
    {
      id: 2,
      title: "Campanha 3",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 3,
      instituteId: 2
    },
    {
      id: 3,
      title: "Campanha 4",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 4,
      instituteId: 3
    },
    {
      id: 4,
      title: "Campanha 5",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 5,
      instituteId: 4
    },
    {
      id: 5,
      title: "Campanha 6",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 6,
      instituteId: 5
    },
    {
      id: 6,
      title: "Campanha 7",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 7,
      instituteId: 6
    },
    {
      id: 7,
      title: "Campanha 8",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 8,
      instituteId: 7
    },
    {
      id: 8,
      title: "Campanha 9",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 9,
      instituteId: 8
    },
    {
      id: 9,
      title: "Campanha 10",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 10,
      instituteId: 9
    },
    {
      id: 10,
      title: "Campanha 11",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 11,
      instituteId: 10
    },
    {
      id: 11,
      title: "Campanha 12",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 12,
      instituteId: 11
    },
    {
      id: 12,
      title: "Campanha 13",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 13,
      instituteId: 12
    },
    {
      id: 13,
      title: "Campanha 14",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 14,
      instituteId: 13
    },
    {
      id: 14,
      title: "Campanha 15",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      picture_url: 15,
      instituteId: 14
    },
  ];
  const institutes = [
    {
      id: 0,
      name: "Instituição 1",
      picture_url: 1,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 1,
      name: "Instituição 2",
      picture_url: 2,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 2,
      name: "Instituição 3",
      picture_url: 3,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 3,
      name: "Instituição 4",
      picture_url: 4,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 4,
      name: "Instituição 5",
      picture_url: 5,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 5,
      name: "Instituição 6",
      picture_url: 6,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 6,
      name: "Instituição 7",
      picture_url: 7,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 7,
      name: "Instituição 8",
      picture_url: 8,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 8,
      name: "Instituição 9",
      picture_url: 9,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 9,
      name: "Instituição 10",
      picture_url: 10,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 10,
      name: "Instituição 11",
      picture_url: 11,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 11,
      name: "Instituição 12",
      picture_url: 12,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 12,
      name: "Instituição 13",
      picture_url: 13,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 13,
      name: "Instituição 14",
      picture_url: 14,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      id: 14,
      name: "Instituição 15",
      picture_url: 15,
      telephone: "(55) 9 9191-9191",
      email: "instituicao@mail.com",
      description: "Precisamos da sua ajuda com doações para lorem ipsum dolor sit amet, sit consectetuer adipiscing elit, "
      + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
  ];
  // // eslint-disable-next-line
  // const campanha = campanhas.find(element => element.id == id);
  // eslint-disable-next-line
  const instituicao = institutes.find(element => element.id == id);
  let slides = (isMobile) ? 1 : 3;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1
  };
  return (
    <Box backgroundColor="gray.200">
      <Header />
      <Box
        padding={!isDesktop ? "50px 5px" : "50px"}
        textAlign="center"
      >
        <Box
          padding={isGreater ? "0 20%" : "0 5px"}
        >
          <Grid
            templateColumns={isMobile ? "" : "repeat(3, 1fr)"}
            templateRows={isMobile ? "repeat(2, 1fr)" : ""}
            gap={12}
          >
            <GridItem>
                  <Box className={detailsStyle["institute-image"]}>
                    <Image
                      src={`https://fazumbem.inf.ufsm.br/images/logos/${instituicao.picture_url}.png`}
                    />
                  </Box>
            </GridItem>
            <GridItem colSpan={isMobile ? 1 : 2} textAlign={isMobile ? "center" : "left"}>
              <Heading>
                <Text
                  display="inline"
                  fontSize={isMobile ? "35px" : "55px"}
                  fontFamily="Comfortaa"
                  color="white"
                  backgroundColor="#ED6A5A"
                >
                  {instituicao.name}
                </Text>
              </Heading>
              <Box marginTop="50px">
                <Text
                  fontSize={isMobile ? "18px" : "24px"}
                  color="bluish.100"
                  lineHeight="31.69px"
                  // padding={isGreater ? "0 20%" : "0 5px"}
                >
                  {instituicao.description}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        {/*
        <Box
          marginTop="100px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <VStack align={isMobile ? "center" : "left"} spacing={10}>
            <Heading color="bluish.100">Campanhas desta instituição</Heading>
            <Text
              fontSize={isMobile ? "22px" : "24px"}
              color="bluish.100"
            >
              Para fazer uma doação, clique no botão abaixo e saiba mais.
            </Text>

          </VStack>
        </Box>
        */}
        <Box
          marginTop="100px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <Heading color="bluish.100">Campanhas desta instituição</Heading>
          <Box margin="70px 0" textAlign="center">
            <Slider {...settings}>
              {campanhas.map((campanha: any = []) => (
                <Box className={campaignStyles["card-wrapper"]} key={campanha.id}>
                  <Box className={campaignStyles["card"]}>
                    <Box className={campaignStyles["card-image"]}>
                      <Image
                        src={`https://fazumbem.inf.ufsm.br/images/entidades/${campanha.picture_url}.png`}
                      />
                    </Box>
                    <Box className={campaignStyles["card-title"]}>
                      {campanha.title}
                    </Box>
                    <Box className={campaignStyles["card-description"]}>
                      {campanha.description}
                    </Box>
                    <Box className={campaignStyles["campaign-icons"]} textAlign="center">
                        <Tooltip
                          hasArrow
                          label="Ver informações"
                          bg="bluish.100"
                          color="white"
                          placement="top"
                          borderRadius="8px"
                          transition="0.4s"
                        >
                          <IconButton
                            aria-label="info"
                            borderRadius="10px"
                            transform="translateY(-3px)"
                            bgColor="white"
                            icon={<InfoIcon />}
                            onClick={() => history.push(`/campaign/${campanha.id}`)}
                            _hover={{
                              bgColor: "#ED6A5A",
                              color: "white"
                            }}
                          />
                        </Tooltip>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
        <Box
          marginTop="100px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <VStack align={isMobile ? "center" : "left"} spacing={10}>
            <Heading color="bluish.100">Contato</Heading>
            <Text
              fontSize={isMobile ? "22px" : "24px"}
              color="bluish.100"
            >
              Telefone: {instituicao.telephone}
            </Text>
            <Text
              fontSize={isMobile ? "22px" : "24px"}
              color="bluish.100"
            >
              Email: {instituicao.email}
            </Text>
            <Box>
              <HStack spacing="24px">
                <Box>
                  <Tooltip
                    hasArrow
                    label="E-mail da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href={`mailto:${instituicao.email}`}
                    >
                      <FaRegEnvelope  size={50}/>
                    </Box>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    hasArrow
                    label="Instagram da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href="#"
                    >
                      <FaInstagram size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    hasArrow
                    label="Facebook da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href="#"
                    >
                      <FaFacebookSquare size={48} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    hasArrow
                    label="WhatsApp da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href={`http://api.whatsapp.com/send/?phone=55${instituicao.telephone}`}
                    >
                      <FaWhatsapp size={48} />
                    </Box>
                  </Tooltip>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}