import React from 'react'

const Navbar = () => {
  return (
    <>
         <header className="w-full bg-[white] flex items-center fixed top-0 z-50 justify-between px-6 py-4 border-b">
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-bold">Medium</h1>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#">For you</a>
          <a href="#">Featured</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-full px-3 py-1">
          {/* <Search className="w-4 h-4 text-gray-500" /> */}
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none text-sm"
          />
        </div>
        {/* <Button>Write</Button> */}
        <div className="w-8 h-8 rounded-full bg-black"></div>
      </div>
    </header>
    </>
  )
}

export default Navbar