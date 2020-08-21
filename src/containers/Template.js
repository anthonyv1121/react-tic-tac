import React, { Component } from "react";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import TicTacToe from "./TicTacToe";
import NavDrawer from "../components/NavDrawer";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { theme } from "../config/theme";
import { Header, Main } from "../styled/Template";

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <NavDrawer />
          <Header>TicTacTuring</Header>
          <Main>
            <Route exact path="/" component={TicTacToe} />
            <Route path="/profile" component={Profile} />
          </Main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template;
