import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getUser, getSongs, getArtists } from './store';
import TopSongs from './TopSongs';
import Button from '@material-ui/core/Button';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }
  async componentDidMount() {
    let params = new URLSearchParams(window.location.search);
    let accessToken = params.get('access_token');

    await this.props.getUser(accessToken);
    await this.props.getArtists(accessToken);
    await this.props.getSongs(accessToken);
    this.setState({ isLoading: false });
  }

  render() {
    const username = this.props.user.username;
    const songs = this.props.songs;
    return (
      <React.Fragment>
        {!this.state.isLoading && username && songs ? (
          <div>
            <div>
              <h1>Welcome {username}</h1>
            </div>

            <TopSongs songs={songs} />
          </div>
        ) : (
          <div>
            <div className="center">
              <a href="http://localhost:8888/login">
                <Button variant="contained" color="primary" size="large">
                  Connect Spotify
                </Button>
              </a>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    artists: state.artists,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: accessToken => dispatch(getUser(accessToken)),
    getArtists: accessToken => dispatch(getArtists(accessToken)),
    getSongs: accessToken => dispatch(getSongs(accessToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
