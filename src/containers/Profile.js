import React, { Component } from "react";
import {
  Container,
  Name,
  GameListHeader,
  GameList,
  GameRecord,
  Column,
  ColumnLabels
} from "../styled/Profile";

class Profile extends Component {
  static defaultProps = {
    user: {
      email: "useremail",
      games: [
        {
          winner: true,
          createdAt: "12/25/16",
          id: "001"
        },
        {
          winner: true,
          createdAt: "12/26/16",
          id: "002"
        },
        {
          winner: false,
          createdAt: "12/27/16",
          id: "003"
        }
      ]
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  get records() {
    return this.props.user.games.map((game, i) => {
      return (
        <GameRecord key={i} index={i}>
          <Column>{game.winner ? "Winer" : "Didn't Win"}</Column>
          <Column>"Robot"</Column>
          <Column>"No"</Column>
          <Column>{game.createdAt}</Column>
        </GameRecord>
      );
    });
  }
  render() {
    let { email } = this.props.user;
    return (
      <Container>
        <Name>{email}</Name>
        <GameList>
          <GameListHeader>My Games</GameListHeader>
          <ColumnLabels>
            <Column>Outcome</Column>
            <Column>Guess</Column>
            <Column>Guessed Correctly</Column>
            <Column>Date</Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    );
  }
}

export default Profile;
