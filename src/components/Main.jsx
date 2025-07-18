// components/Main.jsx
import styled from "styled-components";
import NewCard from "../NewCard";

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  max-width: 1110px;
  margin: 40px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WebImage = styled.img`
  width: 100%;
  height: auto;
`;

const Web3Content = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Web3Text = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
  }
`;

const Web3SubText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  p {
    color: #666;
    line-height: 1.6;
  }

  button {
    background-color: hsl(5, 85%, 63%);
    color: black;
    border: none;
    padding: 12px 25px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    width: fit-content;

    &:hover {
      background-color: hsl(240, 100%, 5%);
      color: #fff;
      transition: 0.3s ease-out;
    }
  }
`;

export default function Main() {
  return (
    <MainWrapper>
      <MainLeft>
        <WebImage src="/assets/images/image-web-3-desktop.jpg" alt="Web 3 image" />
        <Web3Content>
          <Web3Text>
            <h1>The Bright Future of Web 3.0?</h1>
          </Web3Text>
          <Web3SubText>
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms
              back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button>Read more</button>
          </Web3SubText>
        </Web3Content>
      </MainLeft>

      <NewCard />
    </MainWrapper>
  );
}