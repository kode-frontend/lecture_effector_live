import styled from "styled-components";

export const HBox = styled.div<{ height?: number }>`
  height: ${({ height }) => height || 16}px;
`;
