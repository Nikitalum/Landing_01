import Image from "next/image";

export default function Home() {
  return (
  
  <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-2 pb-20 gap-2 sm:p-12 font-[family-name:var(--font-geist-sans)]">
    <div className="flex items-center absolute">
    
      <main className="flex flex-col gap-[32px] row-center-2 items-center sm:items-center">
        <h1 className="text-6xl font-extralight font-Oxygen">РАМЕЙКОВ ИЛЬЯ ВАЛЕРЬЕВИЧ</h1>
        <div className="columns-sm text-3xl">
            <div className=""><img className="object-fill"
            aria-hidden
            src="/bl_land_bg.png"
            alt="File icon"
            width={600}
            height={900}
          /></div>
          <div className="flex-col space-y-4">
          <div className="font-Raleway">ПРОДЮСИРОВАНИЕ ИНСТАГРАМ
МОНТАЖ, СЪЁМКА ВИДЕО</div>
          <div className="font-Raleway">ПРОДВИЖЕНИЕ
СТОМАТОЛОГОВ
И ЗУБНЫХ ТЕХНИКОВ</div>
          <div className="font-Raleway">РАЗВИЛ ИНСТАГРАМ
С НУЛЯ ДО 215.000 АУДИТОРИИ</div>
        </div>
        <div className="flex gap-4 items-center my-12 flex-col ml-12 sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background text-sm gap-2 hover:bg-[#f5e4dd] dark:hover:bg-[#ccc] font-Raleway  sm:text-xl h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ОСТАВИТЬ ЗАЯВКУ
          </a>
        </div>
        </div>
      </main>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          
        </a>
      </footer>
    </div>
  );
}
