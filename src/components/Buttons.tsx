import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { textLinesAtom, shuffleArray } from '../pages/Shuffle';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme?.spacing?.(1),
      },
    },
  }),
);

export const Buttons = () => {

  const [theme] = useAtom(themeAtom)

  const [isShuffled, setIsShuffled] = useState(false);
  const classes = useStyles(theme);

  const [textLines, setTextLines] = useAtom(textLinesAtom)

  useEffect(() => {
    const setShuffledArray = (array: string[]): void => {
      const newArray = [...shuffleArray(array)].filter(x => x !== '')
      setTextLines(newArray)
    }

    if (isShuffled) {
      let id = setInterval(() => { setShuffledArray(textLines) }, 100);
      return () => clearInterval(id);
    }
  }, [isShuffled]);
  return (
    <div className={classes.root}>
      <ButtonGroup
        color="primary"
        aria-label="button group"
        variant="contained"
      >
        <Button
          disabled={isShuffled}
          onClick={() => setIsShuffled(true)}
        >Start</Button>
        <Button
          disabled={!isShuffled}
          onClick={() => setIsShuffled(false)}
        >Stop</Button>
      </ButtonGroup>
    </div>
  )
}