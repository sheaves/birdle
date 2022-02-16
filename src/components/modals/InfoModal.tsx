import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <Carousel showStatus={false} showArrows={false}>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Guess the Singaporean bird in 6 tries. 
            Each bird has a 5-letter code formed by taking some letters from the start of each word in its name.
          </p>
          <br/>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            For 2-word names,  take <strong>3</strong> then <strong>2</strong> letters.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            e.g. <strong><u>COM</u>MON <u>KI</u>NGFISHER</strong>
          </p>
          <div className="flex justify-center mb-1 mt-4">
            <Cell value="C" />
            <Cell value="O" />
            <Cell value="M" />
            <Cell value="K" />
            <Cell value="I" />
          </div>

          <br/>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            For 3-word names, take <strong>2</strong>, <strong>1</strong> and <strong>2</strong> letters.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            e.g. <strong><u>BL</u>ACK-<u>N</u>APED <u>OR</u>IOLE</strong>
          </p>
          <div className="flex justify-center mb-1 mt-4">
            <Cell value="B" />
            <Cell value="L" />
            <Cell value="N" />
            <Cell value="O" />
            <Cell value="R" />
          </div>

          <br/>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            For 4-word names, take <strong>1</strong>, <strong>1</strong>, <strong>1</strong> and <strong>2</strong> letters.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            e.g. <strong><u>W</u>HITE-<u>B</u>ELLIED <u>S</u>EA <u>EA</u>GLE</strong>
          </p>
          <div className="flex justify-center mb-1 mt-4">
            <Cell value="W" />
            <Cell value="B" />
            <Cell value="S" />
            <Cell value="E" />
            <Cell value="A" />
          </div>        

          <br/>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            There are some exceptions to these rules. A complete list of codes is coming soon.
          </p>
          <br/><br/>
        </div>

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            After each guess, the colour of the tiles will
            change to show how close your guess was.
          </p>

          <div className="flex justify-center mb-1 mt-4">
            <Cell value="C" status="correct" />
            <Cell value="O" />
            <Cell value="M" />
            <Cell value="K" />
            <Cell value="I" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            The letter C is in the bird code and in the correct spot.
          </p>

          <div className="flex justify-center mb-1 mt-4">
            <Cell value="B" />
            <Cell value="L" />
            <Cell value="N" status="present" />
            <Cell value="O" />
            <Cell value="R" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            The letter N is in the code but in the wrong spot.
          </p>

          <div className="flex justify-center mb-1 mt-4">
            <Cell value="W" />
            <Cell value="B" />
            <Cell value="S" />
            <Cell value="E" status="absent" />
            <Cell value="A" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            The letter E is not in the code in any spot.
          </p>        
        </div>

        <div>
          <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
            This is an open-source variant of <a
              href="https://www.powerlanguage.co.uk/wordle/"
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Wordle
            </a> inspired by the birding theme of <a
              href="https://brdl.alex.gd/"
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
            >
              BRDL
            </a> and <a
              href="https://btobrdl.glitch.me/"
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
            >
              BIRDL
            </a>, and built upon code from <a
              href="https://reactle.vercel.app/"
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Reactle
            </a>.
          </p>              
        </div>
      </Carousel>    
    </BaseModal>
  )
}
