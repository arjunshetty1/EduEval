"use client"

const Wrapper = ({children}) => {   // children will be the by default prop
  return (

    <div className="w-full px-5 md:px-10">
      {children}
      </div>
      

  )
}

export default Wrapper 




