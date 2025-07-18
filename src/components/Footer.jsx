import styled from "styled-components";
import retro from "../assets/image-retro-pcs.jpg";
import laptops from "../assets/image-top-laptops.jpg";
import gaming from "../assets/image-gaming-growth.jpg";

const FooterWrapper = styled.footer`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterItem = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const FooterImage = styled.img`
  width: 100px;
`;

const FooterText = styled.div`
  h2 {
    color: hsl(233, 8%, 79%);
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1rem;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
      color: grey;
      transition: 0.7s ease-in-out;
    }
  }

  p {
    font-size: 0.85rem;
    color: #666;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>
        <FooterImage src={retro} alt="retro pcs" />
        <FooterText>
          <h2>01</h2>
          <h5>Reviving Retro PCs</h5>
          <p>What happens when old PCs are given modern upgrades?</p>
        </FooterText>
      </FooterItem>

      <FooterItem>
        <FooterImage src={laptops} alt="top laptops" />
        <FooterText>
          <h2>02</h2>
          <h5>Top 10 Laptops of 2022</h5>
          <p>Our best picks for various needs and budgets.</p>
        </FooterText>
      </FooterItem>

      <FooterItem>
        <FooterImage src={gaming} alt="gaming growth" />
        <FooterText>
          <h2>03</h2>
          <h5>The Growth of Gaming</h5>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </FooterText>
      </FooterItem>
    </FooterWrapper>
  );
}
