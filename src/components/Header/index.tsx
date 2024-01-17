import { styled } from "../../styles";
import Logo from "../../assets/Logo.svg";
import { MapPin } from "@phosphor-icons/react";
import { Text } from "../Text";
import { Cart } from "../Cart";
import { Box } from "../Box";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <Box css={{display: "inline-flex", gap: 16}}>
        <Location>
          <MapPin width={22} height={22} color="#8047F8" />
          <Text css={{ color: "$purple-dark" }}>BH, MG</Text>
        </Location>
        <Cart />
      </Box>
    </HeaderContainer>
  );
};
const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  "@lg": {
    padding: "2rem 10rem",
  },
});

const Location = styled("div", {
  display: "flex",
  padding: "0.5rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.25rem",
  background: "$purple-light",
  borderRadius: "0.375rem",
});
