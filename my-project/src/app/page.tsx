import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-[url('/bl_land_bg.png')] bg-cover bg-center">
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-2 pb-20 gap-2 sm:p-12 font-[family-name:var(--font-geist-sans)]">
    <div className="flex items-center absolute"></div>
    
      <main className="flex flex-col gap-[32px] row-center-2 items-center sm:items-center">
        <h1 className="text-6xl font-extralight font-Oxygen">РАМЕЙКОВ ИЛЬЯ ВАЛЕРЬЕВИЧ</h1>
        <div className="flex flex-col space-y-4 place-items-left ml-162 my-20 text-3xl font-extralight">
          <div className="font-Raleway">ПРОДЮСИРОВАНИЕ ИНСТАГРАМ
МОНТАЖ, СЪЁМКА ВИДЕО</div>
          <div className="font-Raleway">ПРОДВИЖЕНИЕ
СТОМАТОЛОГОВ
И ЗУБНЫХ ТЕХНИКОВ</div>
          <div className="font-Raleway">РАЗВИЛ ИНСТАГРАМ
С НУЛЯ ДО 215.000 АУДИТОРИИ</div>
        </div>
        
        <div className="flex gap-4 items-center flex-col mx-auto sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background text-sm gap-2 hover:bg-[#f5e4dd] dark:hover:bg-[#ccc] font-Raleway  sm:text-xl h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ОСТАВИТЬ ЗАЯВКУ
          </a>
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
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
