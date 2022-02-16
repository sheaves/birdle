import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { Disclosure } from '@headlessui/react'
import { DEFS } from '../../constants/definitions'
import { isWordInWordList } from '../../lib/words'

type Props = {
  guess: string
  className: string
}

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      { (guess.length === MAX_WORD_LENGTH) && (isWordInWordList(guess))
        ?
        <Disclosure as="div" className="flex-initial">
          {({ open }) => (
          <>
            <Disclosure.Button>
              <div className="flex justify-center m-0">
                {splitGuess.map((letter, i) => (
                  <Cell key={i} value={letter} />
                ))}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className='flex justify-center pb-2 text-sm text-gray-500'>
              {DEFS[guess.toLowerCase()]}
            </Disclosure.Panel>
          </>
          )}
        </Disclosure>        
        :
        <>
          {splitGuess.map((letter, i) => (
            <Cell key={i} value={letter} />
          ))}
          {emptyCells.map((_, i) => (
            <Cell key={i} />
          ))}        
        </>
      }

    </div>
  )
}
