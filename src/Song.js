import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const Song = ({ song, isItemSelected, labelId, handleClick }) => (
  <TableRow
    hover
    onClick={event => handleClick(event, song.name)}
    role="checkbox"
    aria-checked={isItemSelected}
    tabIndex={-1}
    key={song.name}
    selected={isItemSelected}
  >
    <audio controls>
      <source src={song.preview_url} />
    </audio>
    <TableCell padding="checkbox">
      <Checkbox
        checked={isItemSelected}
        inputProps={{ 'aria-labelledby': labelId }}
      />
    </TableCell>

    <TableCell align="left">
      <a href={song.song_url}>{song.name} </a>
    </TableCell>
    <TableCell align="left">
      <a href={song.artist_url}>{song.artist} </a>
    </TableCell>
    <TableCell align="left">
      <a href={song.album_url}>{song.album} </a>
    </TableCell>
    <TableCell align="right">{song.duration}</TableCell>
  </TableRow>
);
export default Song;
