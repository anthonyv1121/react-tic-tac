import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { NavToggleButton } from "../styled/NavDrawer";

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      width: 150
    };
  }
  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      };
    });
  };
  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer variant="persistent" anchor="left" open={this.state.open}>
          <div
            style={{
              height: "200px",
              width: "100%",
              backgroundColor: "salmon"
            }}
          >
            LoginContainer
          </div>
          <MenuList onClick={this.toggle}>
            <NavLink to="/">
              <MenuItem>
                <ListItemText inset primary="Play" />
              </MenuItem>
            </NavLink>

            <NavLink to="/profile">
              <MenuItem>
                <ListItemText inset primary="Profile" />
              </MenuItem>
            </NavLink>
          </MenuList>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
