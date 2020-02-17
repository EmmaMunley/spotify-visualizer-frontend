import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_USER = 'GOT_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const gotUser = user => ({ type: GOT_USER, user });

/**
 * THUNK CREATORS
 */

export const getUser = accessToken => async dispatch => {
  try {
    const res = await axios.get('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + accessToken },
    });
    const user = {
      id: res.data.id,
      username: res.data.display_name,
      followers: res.data.followers.total,
      spotify_url: res.data.external_urls.spotify,
      imageUrl: res.data.images[0] || 'null',
    };
    user.id !== null
      ? dispatch(gotUser(user || defaultUser))
      : console.error(
          'Something went wrong. Please try reconnecting your spotify account'
        );
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GOT_USER:
      return action.user;
    default:
      return state;
  }
}
