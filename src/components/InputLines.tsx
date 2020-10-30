import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { textLinesAtom } from '../pages/Shuffle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

export const InputLines = () => {

  const [theme] = useAtom(themeAtom)
  const [textLines, setTextLines] = useAtom(textLinesAtom)

  const classes = useStyles(theme);

  const textLinesToString = (textlines: string[]): string => {
    return textLines.join('\n')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTextLines(e.currentTarget.value.split('\n'));
    localStorage.setItem(window.location.href, JSON.stringify(textLines))
  }

  useEffect(() => {
    if (localStorage.getItem(window.location.href)) {
      const localstorageData = localStorage.getItem(window.location.href);
      if (typeof localstorageData === 'string') {
        setTextLines(JSON.parse(localstorageData));
      }
    }
  }, [])
  return (
    <div className={classes.root} >
      <TextField
        id="filled-multiline-static"
        label="Input here!"
        multiline
        rows={20}
        variant="outlined"
        value={textLinesToString(textLines)}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}