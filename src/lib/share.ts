import { getGuessStatuses } from './statuses'

export const shareStatus = (
  guesses: string[],
  solution: string,
  index: number | string,
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `🇸🇬 Birdle ${index}, ${lost ? 'X' : guesses.length}/6${
      isHardMode ? '*' : ''
    }\n\n` + generateEmojiGrid(guesses, solution)
  )
}

export const generateEmojiGrid = (guesses: string[], solution: string) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess, solution)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🐓'
            case 'present':
              return '🐣'
            default:
              return '🥚'
          }
        })
        .join('')
    })
    .join('\n')
}