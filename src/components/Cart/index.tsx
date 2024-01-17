import { styled } from "../../styles";
import CartImg from "../../assets/cartImg.svg"
export const Cart = () => {
  return (
    <CartContainer>
      <Img src={CartImg} alt="cart image" />
    </CartContainer>
  );
};

const Img = styled("img", {
  width: 22,
  height: 22,
})
const CartContainer = styled("div", {
  cursor: "pointer",
  display: "flex",
  padding: "0.5rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.25rem",
  borderRadius: "0.375rem",
  background: "$yellow-light",
});
