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
