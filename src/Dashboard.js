import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getUser, getSongs, getArtists } from './store';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
    this.loginRedirect = this.loginRedirect.bind(this);
  }
  async componentDidMount() {
    let params = new URLSearchParams(window.location.search);
    let accessToken = params.get('access_token');

    this.props.getUser(accessToken);
    this.props.getArtists(accessToken);
    this.props.getSongs(accessToken);
  }
  loginRedirect() {
    let path = '/login';
    this.props.history.push(path);
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.isLoading ? (
          <div>Welcome {this.state.user.username}</div>
        ) : (
          <div>
            <button onClick={this.loginRedirect}>Sign In With Spotify</button>
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
