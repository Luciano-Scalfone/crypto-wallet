import styled from "styled-components";

export const HomeWrapper = styled.div.attrs({ className: "homeWrapper" })`
  display: grid;
  grid-template-areas:
    "head1 head2 head3 head4"
    "body1 body2 body3 body4"
    "foot1 foot2 foot3 foot4";
  column-gap: 16px;
  grid-template-rows: 81px 1fr 56px;
  min-height: 100vh;
`;
