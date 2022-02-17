import { STEPSIZE } from '../constants/settings'
import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
import { WRONG_SPOT_MESSAGE, NOT_CONTAINED_MESSAGE } from '../constants/strings'
import { getGuessStatuses } from './statuses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
export const findFirstUnusedReveal = (word: string, guesses: string[], solution: string) => {
  const knownLetterSet = new Set<string>()
  for (const guess of guesses) {
    const statuses = getGuessStatuses(guess, solution)

    for (let i = 0; i < guess.length; i++) {
      if (statuses[i] === 'correct' || statuses[i] === 'present') {
        knownLetterSet.add(guess[i])
      }
      if (statuses[i] === 'correct' && word[i] !== guess[i]) {
        return WRONG_SPOT_MESSAGE(guess[i], i + 1)
      }
    }
  }

  for (const letter of Array.from(knownLetterSet.values())) {
    // fail fast, always return first failed letter if applicable
    if (!word.includes(letter)) {
      return NOT_CONTAINED_MESSAGE(letter)
    }
  }
  return false
}

export const getWordOfDay = () => {
  const epochMs = new Date('February 14, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    dailySolution: WORDS[(STEPSIZE * index) % WORDS.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { dailySolution, solutionIndex, tomorrow } = getWordOfDay()

export const getRandomWord = () => {
  const index = Math.floor(Math.random()*WORDS.length)
  return {
    solution: WORDS[index].toUpperCase(),
    index: index
  }
}

