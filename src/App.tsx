import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { globalCss } from "./styles";
import { Header } from "./components/Header";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});
globalStyles();
function App() {
  return (
    <>
      <Box css={{ maxWidth: 1440, margin: "0 auto" }}>
        <Header />
      </Box>
      <Box
        css={{
          backgroundImage: "url('/background.svg')",
          height: "550px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          "@lg": {
            height: 870,
          },
        }}
      >
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "3.5rem",
            maxWidth: 1440,
            margin: "0 auto",
            "@lg": { flexDirection: "row", padding: "5.88rem 10rem 0 10rem" },
          }}
        >
          <Box>
            <Text
              css={{
                color: "#272221",
                fontSize: "3rem",
                fontWeight: 700,
              }}
            >
              Encontre o café perfeito para qualquer hora do dia
            </Text>
            <Text
              css={{ fontSize: "1.25rem", color: "#403937", marginTop: "1rem" }}
            >
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>
            <Box
              css={{
                marginTop: "4.5rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "3rem",
              }}
            >
              <Box
                css={{
                  display: "inline-flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Box
                  css={{
                    display: "flex",
                    padding: "0.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "62.5rem",
                    background: "$yellow-dark",
                  }}
                >
                  <ShoppingCart width={22} height={22} color="white" />
                </Box>
                <Text css={{ fontSize: 16, fontWeight: 400 }}>
                  Compra simples e segura
                </Text>
              </Box>
              <Box
                css={{
                  display: "inline-flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Box
                  css={{
                    display: "flex",
                    padding: "0.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "62.5rem",
                    background: "$base-subtitle",
                  }}
                >
                  <Package width={22} height={22} color="white" />
                </Box>
                <Text css={{ fontSize: 16, fontWeight: 400 }}>
                  Embalagem mantém o café intacto
                </Text>
              </Box>
              <Box
                css={{
                  display: "inline-flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Box
                  css={{
                    display: "flex",
                    padding: "0.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "62.5rem",
                    background: "$yellow",
                  }}
                >
                  <Timer width={22} height={22} color="white" />
                </Box>
                <Text css={{ fontSize: 16, fontWeight: 400 }}>
                  Entrega rápida e rastreada
                </Text>
              </Box>
              <Box
                css={{
                  display: "inline-flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Box
                  css={{
                    display: "flex",
                    padding: "0.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "62.5rem",
                    background: "$purple",
                  }}
                >
                  <Coffee width={22} height={22} color="white" />
                </Box>
                <Text css={{ fontSize: 16, fontWeight: 400 }}>
                  O café chega fresquinho até você
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <img src="/Coffe.svg" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
