
export default function Home() {
  return (
  
  <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-2 pb-20 gap-2 font-[family-name:var(--font-geist-sans)]">
    <div className="flex justify-around">
      <main className="flex flex-col md:gap-[32px] mx-auto row-center-2 items-center sm:items-center">
        <h1 className=" text-3xl  md:text-6xl md:mt-6 font-extralight font-Oxygen">РАМЕЙКОВ ИЛЬЯ ВАЛЕРЬЕВИЧ</h1>
        <div className="md:container md:mx-auto flex-row columns-sm text-3xl md:space-y-2">
            <div><img
            src="\bl_land_bg.svg"
            alt="Producer"
          /></div>
          <div className="md:h-12"></div>
          <div className="flex-col space-y-4 my-4 md:w-160">
          <div className="font-extralight font-Raleway">ПРОДЮСИРОВАНИЕ ИНСТАГРАМ
МОНТАЖ, СЪЁМКА ВИДЕО</div>
          <div className="font-extralight font-Raleway">ПРОДВИЖЕНИЕ
СТОМАТОЛОГОВ
И ЗУБНЫХ ТЕХНИКОВ</div>
          <div className="font-extralight font-Raleway">РАЗВИЛ ИНСТАГРАМ
С НУЛЯ ДО 215.000 АУДИТОРИИ</div>
        </div>
        <div className="flex gap-4 items-center my-6 md:my-12 flex-col md:ml-12 sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background text-sm gap-2 hover:bg-[#f5e4dd] dark:hover:bg-[#ccc] font-Raleway  sm:text-xl h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://uslugi.yandex.ru/profile/IlyaRamejkov-3035849"
            target="_blank"
            rel="noopener noreferrer"
          >
            ОСТАВИТЬ ЗАЯВКУ
          </a>
        </div>
        </div>
      </main>
      </div>
    </div>
  );
}
