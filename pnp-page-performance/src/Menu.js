import React from 'react'

function Menu() {
  // 메뉴 버튼
  return (
    <header>
      <div>PnP logo</div>
      <div class="bg-white w-screen overflow-auto whitespace-no-wrap py-3 px-4 text-right">
        <button class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">
          홈
        </button>
        <button class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">
          학회소개
        </button>
        <button class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">
          구성원
        </button>
        <button class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">
          학회활동
        </button>
        <button class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">
          학회실적
        </button>
        <button class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">
          문의하기
        </button>
      </div>
    </header>
  )
}

export default Menu
// {/* <header className="text-gray-700 body-font border-b border-gray-200">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                 <a
//                     className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//                     href="/"
//                 >
//                     <Logo className="w-10 h-10" />
//                     {/* <span className="ml-3 text-xl">PnP</span> */}
//                 </a>
//                 <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//                     <a className="mr-5 hover:text-gray-900">ABOUT</a>
//                     <a className="mr-5 hover:text-gray-900">ACTIVITY</a>
//                     <a className="mr-5 hover:text-gray-900">MEMBERS</a>
//                     <a className="mr-5 hover:text-gray-900">RECRUIT</a>
//                 </nav>
//             </div>
//         </header> */}
