// components/NewCard.jsx
import styled from "styled-components";

const CardWrapper = styled.section`
  background-color: hsl(240, 100%, 5%);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
  height: 550px;
  h1 {
    color: hsl(35, 77%, 62%);
    font-size: 2rem;
  }

  h3 {
    font-size: 1.1rem;
    cursor: pointer;
  }

  h3:hover {
    color: hsl(35, 77%, 62%);
  }

  p {
    font-size: 0.9rem;
    color: #ccc;
  }

  hr {
    border: 1px solid #444;
  }
`;

export default function NewCard() {
  return (
    <CardWrapper>
      <h1>New</h1>

      <div>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <hr />

      <div>
        <h3>The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
      </div>
      <hr />

      <div>
        <h3>Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </CardWrapper>
  );
}
