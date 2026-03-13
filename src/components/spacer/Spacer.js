// import { View } from "react-native";
// import styled, {useTheme} from "styled-components/native";

// const sizeVariant = {
//   small: 1,
//   medium: 2,
//   large: 3,
// };

// const positionVariant = {
//   top: "marginTop",
//   left: "marginLeft",
//   right: "marginRight",
//   bottom: "marginBottom",
// };

// const getVariant = (position, size, theme) => {
//   const sizeIndex = sizeVariant[size];
//   const property = positionVariant[position];
//   const value = theme.space[sizeIndex];
//   return `${property}:${value}`;
// };

// const SpacerView = styled.View`
// ${({variant}) => variant}`;

// const Spacer = ({position,size,children}) => {
//   const theme = useTheme();
//    const variant = getVariant(position, size, theme);
//   return <SpacerView variant={variant}>{children}</SpacerView>;
// };

// Spacer.defaultProps = {
//   position: "top",
//   size: "small",
// };

// export default Spacer;

import styled from "styled-components/native";

const Spacer = styled.View`
  ${({ position = "top", size = "small", theme }) => {
    const sizes = { small: 1, medium: 2, large: 3 };
    const positions = {
      top: "marginTop",
      left: "marginLeft",
      right: "marginRight",
      bottom: "marginBottom",
    };

    return `${positions[position]}: ${theme.space[sizes[size]]}`;
  }}
`;

export default Spacer;
