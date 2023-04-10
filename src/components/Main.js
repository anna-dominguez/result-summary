import Image from 'next/image'

import MemoryIcon from '../../public/images/icon-memory.svg'
import ReactionIcon from '../../public/images/icon-reaction.svg'
import VerbalIcon from '../../public/images/icon-verbal.svg'
import VisualIcon from '../../public/images/icon-visual.svg'

const Main = () => (
  <main className="px-[30px] lg:px-16 flex flex-col w-full">
    <h2 className="font-bold text-body lg:text-headingS text-darkNavy my-6">
      Summary
    </h2>
    <div className="flex lg:w-[288px] flex-col space-y-4">
      <div className="p-4 bg-red bg-opacity-5 rounded-xl text-bodyS lg:text-body flex justify-between">
        <div className="text-red flex">
          <Image alt="Reaction Icon" className="mr-3" src={ReactionIcon} />
          Reaction
        </div>
        <p className="text-darkNavy text-bold">
          80<span className="opacity-50"> / 100</span>
        </p>
      </div>
      <div className="p-4 bg-yellow bg-opacity-5 rounded-xl text-bodyS lg:text-body flex justify-between">
        <div className="text-yellow flex">
          <Image alt="Memory Icon" className="mr-3" src={MemoryIcon} />
          Memory
        </div>
        <p className="text-darkNavy text-bold">
          92<span className="opacity-50"> / 100</span>
        </p>
      </div>
      <div className="p-4 bg-green bg-opacity-5 rounded-xl text-bodyS lg:text-body flex justify-between">
        <div className="text-green flex">
          <Image alt="Verbal Icon" className="mr-3" src={VerbalIcon} />
          Verbal
        </div>
        <p className="text-darkNavy text-bold">
          61<span className="opacity-50"> / 100</span>
        </p>
      </div>
      <div className="p-4 bg-blue bg-opacity-5 rounded-xl text-bodyS lg:text-body flex justify-between">
        <div className="text-blue flex">
          <Image alt="Visual Icon" className="mr-3" src={VisualIcon} />
          Visual
        </div>
        <p className="text-darkNavy text-bold">
          72<span className="opacity-50"> / 100</span>
        </p>
      </div>
    </div>
    <button
      className="bg-darkNavy hover:bg-gradient1
                text-white mb-[30px] lg:mb-12 mt-6 lg:mt-10 py-4 rounded-[128px]"
    >
      Continue
    </button>
  </main>
)

export default Main
