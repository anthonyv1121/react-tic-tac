import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Fab from "@material-ui/core/Fab";

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${props => (props.open ? `${props.width}px` : "none")};
  transition: margin 0.2s;
`;

export const NavToggleButton = props => {
  return (
    <StayVisible {...props}>
      <Fab aria-label="Open" onClick={props.toggle}>
        <MenuIcon />
      </Fab>
    </StayVisible>
  );
};
