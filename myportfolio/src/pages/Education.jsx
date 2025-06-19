import React from 'react'

function Education() {
  return (
    <div className="relative my-2 w-full rounded-xl p-2 bg-gray-800 text-white">

      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className=" text-center text-5xl bg-gradient-to-l from-purple-400 to-blue-500 bg-clip-text text-transparent font-bold">Education</h1>
        <div className=" h-2 w-[150px] bg-purple-800 rounded-2xl "></div>
      </div>
      
      {/* MCA */}
      <div className="items-center justify-center w-full">
        <div>
          <div className="flex flex-row space-x-3">
            {/* GU logo container */}
            <div className="h-[100px] w-[100px] flex items-center justify-center bg-gray-900">
              <div className="h-[50px] w-[50px] bg-white rounded-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl  text-wrap font-bold">Master of Computer Applications - MCA</h1>
              <p className="text-md">Galgotias University , Greater Noida</p>
              <p className="text-md text-gray-400 ju "> Sept 2022 - July 2024</p>
            </div>
          </div>

        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Education