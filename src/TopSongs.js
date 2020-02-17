import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EnhancedTableCopy from './EnhancedTableCopy';

const useStyles = makeStyles({
  table: {
    width: '50%',
    backgroundColor: 'darkGrey',
  },
  header: {
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Circular-Pro-Bold',
  },
});

export default function TopSongs(props) {
  const classes = useStyles();
  const songs = props.songs;

  const headCells = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Title' },
    { id: 'artist', numeric: false, disablePadding: false, label: 'Artist' },
    { id: 'album', numeric: false, disablePadding: false, label: 'Album' },
    { id: 'duration', numeric: true, disablePadding: false, label: 'Duration' },
  ];

  const rows = songs.map(song => [
    { url: song.song_url, label: song.name },
    { url: song.artist_url, label: song.artist },
    { url: song.album_url, label: song.album },
    { label: song.duration },
  ]);

  return (
    <Fragment>
      <h2>Top Songs:</h2>
      {props.songs ? (
        <EnhancedTableCopy
          headCells={headCells}
          rows={rows}
          title="Top Songs"
        ></EnhancedTableCopy>
      ) : null}
    </Fragment>
  );
}
