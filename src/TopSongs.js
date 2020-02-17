import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  let count = 1;

  return (
    <Fragment>
      <h2>Top Songs:</h2>
      {props.songs ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header} align="left">
                  #
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Song
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Artist
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Album
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Duration
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {songs.map(song => (
                <TableRow key={song.name}>
                  <TableCell component="th" scope="row" align="left">
                    {count++}
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    <a href={song.song_url}>{song.name} </a>
                  </TableCell>

                  <TableCell align="left">
                    <a href={song.artist_url}>{song.artist} </a>
                  </TableCell>

                  <TableCell align="left">
                    <a href={song.album_url}>{song.album} </a>
                  </TableCell>
                  <TableCell align="left">{song.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </Fragment>
  );
}
