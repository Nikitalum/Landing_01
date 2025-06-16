import Image from "next/image";

export default function Home() {
  return (
  
  <div className="grid grid-rows-[20px_1fr_20px] mx-auto items-start justify-items-center min-h-screen p-2 pb-20 gap-2 sm:p-12 font-[family-name:var(--font-geist-sans)]">
    <div className="flex items-center absolute">
      <main className="flex flex-col gap-[32px] mx-auto row-center-2 items-center sm:items-center">
        <h1 className="text-6xl font-extralight font-Oxygen">РАМЕЙКОВ ИЛЬЯ ВАЛЕРЬЕВИЧ</h1>
        <div className="md:container md:mx-auto flex-row columns-sm text-3xl">
            <div className=""><Image
            aria-hidden
            src="../public/bl_land_bg.svg"
            alt="Producer"
            width={576}
            height={997}
          /></div>
          <div className=" flex-col space-y-4">
          <div className="font-extralight font-Raleway ">ПРОДЮСИРОВАНИЕ ИНСТАГРАМ
МОНТАЖ, СЪЁМКА ВИДЕО</div>
          <div className="font-extralight font-Raleway">ПРОДВИЖЕНИЕ
СТОМАТОЛОГОВ
И ЗУБНЫХ ТЕХНИКОВ</div>
          <div className="font-extralight font-Raleway">РАЗВИЛ ИНСТАГРАМ
С НУЛЯ ДО 215.000 АУДИТОРИИ</div>
        </div>
        <div className="flex gap-4 items-center my-12 flex-col ml-12 sm:flex-row">
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
