import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_ARTISTS = 'GET_ARTISTS';

/**
 * INITIAL STATE
 */
const artists = [];

/**
 * ACTION CREATORS
 */
const gotArtists = artists => ({ type: GOT_ARTISTS, artists });

/**
 * THUNK CREATORS
 */

export const getArtists = accessToken => async dispatch => {
  try {
    const res = await axios.get('	https://api.spotify.com/v1/me/top/artists', {
      headers: { Authorization: 'Bearer ' + accessToken },
    });

    const artists = res.data.items.map(artist => {
      return {
        id: artist.id,
        name: artist.name,
        followers: artist.followers.total,
        spotify_url: artist.external_urls.spotify,
        imageUrl: artist.images[0],
        genre: artist.genres[0],
      };
    });

    artists.length > 1
      ? dispatch(gotArtists(artists || artists))
      : console.error(
          'Something went wrong. Could not find any artists. Please try reconnecting your spotify account'
        );
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = artists, action) {
  switch (action.type) {
    case GOT_ARTISTS:
      return action.artists;
    default:
      return state;
  }
}
