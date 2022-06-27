import {FunctionComponent} from 'react' 
import { Navbar } from '..'

interface Props {
  children: React.ReactNode;
}

const Baselayout:FunctionComponent<Props> = ( {children} )  => {
  return (
    <>
    <Navbar />
    <div className='py-16 bg-gray-50 min-h-screen overflow-hidden'>
       <div className="px-4 space-y-8 mx-auto  max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
    </div>
    </>
  )
}

export default Baselayout