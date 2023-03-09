import styled from "styled-components";

export const WavesWrapper = styled.section.attrs({ className: "waves-wrapper" })`
  width: 100vw;
  height: 180px;
  left: -147px;
  top: 257px;
  overflow: hidden;

  .waves-wrapper__wave2SVG {
    transform: translate(0, -100%);
  }

  .waves-wrapper__wave3SVG {
    transform: translate(0, -200%);
  }
`;
