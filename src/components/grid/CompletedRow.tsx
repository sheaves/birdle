import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { Disclosure } from '@headlessui/react'
import { DEFS } from '../../constants/definitions'

type Props = {
  guess: string
  solution: string
  isRevealing?: boolean
}

export const CompletedRow = ({ guess, solution, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess, solution)

  return (
      <div className="flex justify-center mb-1 ">
        <Disclosure as="div" className="flex-initial">
          {({ open }) => (
          <>
            <Disclosure.Button>
              <div className="flex justify-center m-0">
                {guess.split('').map((letter, i) => (
                  <Cell
                    key={i}
                    value={letter}
                    status={statuses[i]}
                    position={i}
                    isRevealing={isRevealing}
                    isCompleted
                  />
                ))}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className='flex justify-center pb-2 text-sm text-gray-500'>
              {DEFS[guess.toLowerCase()]}
            </Disclosure.Panel>
          </>
          )}
        </Disclosure>
      </div>
  )
}
