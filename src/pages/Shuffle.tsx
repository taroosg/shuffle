import React from 'react';
import { InputLines } from '../components/InputLines'
import { Buttons } from '../components/Buttons'
import { atom } from 'jotai'

export const textLinesAtom = atom([...Array(10).keys()].map(x => ++x).map(String));

export const shuffleArray = (array: string[]): string[] => {
  let tempArray = array
  for (let i = tempArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = tempArray[i];
    tempArray[i] = tempArray[j];
    tempArray[j] = tmp;
  }
  return tempArray
}

export const Shuffle = () => {
  return (
    <>
      <InputLines />
      <Buttons />
    </>
  )
}