import React from "react";
import styled from "@emotion/styled";
import colors from "./colors";

const Color = styled.div`
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 3px;
  box-shadow: 0px 0px 2px black;
  cursor: pointer;
  background-color: ${({ color }) => color};
  ${({ selected }) =>
    selected &&
    `
    border: 1px solid white; 
  `};
`;

const Flex = styled.div`
  display: flex;
  margin-right: 20px;
  flex-wrap: wrap;
`;

export default function PalettePicker({ currentTheme, setCurrentTheme }) {
  const updateTheme = (e, color) => {
    const updatedTheme = {
      ...currentTheme,
      palette: { ...currentTheme.palette, primary: color, secondary: color },
    };
    setCurrentTheme(updatedTheme);
  };
  return (
    <Flex>
      {colors.map((color, index) => (
        <Color
          onClick={(e) => updateTheme(e, color)}
          selected={currentTheme.palette.primary[300] === color[300]}
          color={color[300]}
          key={index}
        />
      ))}
    </Flex>
  );
}
