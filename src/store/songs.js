import axios from 'axios';
import { convertMS } from '../utils';
/**
 * ACTION TYPES
 */
const GOT_SONGS = 'GOT_SONGS';

/**
 * INITIAL STATE
 */
const songs = [];

/**
 * ACTION CREATORS
 */
const gotSongs = songs => ({ type: GOT_SONGS, songs });

/**
 * THUNK CREATORS
 */

export const getSongs = accessToken => async dispatch => {
  try {
    const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: { Authorization: 'Bearer ' + accessToken },
    });

    const songs = res.data.items.map(song => {
      return {
        id: song.id,
        name: song.name,
        preview_url: song.preview_url,
        duration: convertMS(song.duration_ms),
        artist: song.artists[0].name,
        artist_url: song.artists[0].external_urls.spotify,
        album: song.album.name,
        album_id: song.album.id,
        album_image: song.album.images[0].url,
        album_url: song.album.external_urls.spotify,
        song_url: song.external_urls.spotify,
      };
    });
    console.log('songs', songs);
    dispatch(gotSongs(songs));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = songs, action) {
  switch (action.type) {
    case GOT_SONGS:
      return action.songs;
    default:
      return state;
  }
}
