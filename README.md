# ПУЛЬС / PULSE — Next.js + TypeScript

Двуязычный (RU/EN) лендинг цифрового агентства со светлой и тёмной темой, ярким настраиваемым акцентом и анимациями. Переписан из HTML-прототипа в идиоматичный проект **Next.js 14 (App Router)** на TypeScript.

## Запуск

```bash
cd puls-next
npm install
npm run dev
```

Откройте http://localhost:3000

Прод-сборка:

```bash
npm run build
npm start
```

## Стек

- **Next.js 14** (App Router, React Server + Client Components)
- **TypeScript** в строгом режиме
- **next/font** — шрифты Manrope и Unbounded (с кириллицей), без внешних `<link>`
- Обычный CSS с CSS-переменными для тем (`app/globals.css`) — без CSS-in-JS и зависимостей

## Структура

```
puls-next/
├─ app/
│  ├─ layout.tsx        # <html>, шрифты, SiteProvider, метаданные
│  ├─ page.tsx          # сборка секций лендинга
│  └─ globals.css       # токены тем, keyframes, стили всех компонентов
├─ components/
│  ├─ SiteProvider.tsx  # контекст: тема / язык / акцент (+ localStorage)
│  ├─ Nav.tsx           # навигация, переключатели темы и языка
│  ├─ ScrollProgress.tsx# полоса прогресса скролла
│  ├─ Hero.tsx          # первый экран, параллакс, счётчики, магнитные кнопки
│  ├─ ClientLogos.tsx   # бегущая строка логотипов
│  ├─ Services.tsx      # карточки услуг (8)
│  ├─ Cases.tsx         # кейсы с загрузкой изображений
│  ├─ Pricing.tsx       # тарифы
│  ├─ Team.tsx          # команда с загрузкой фото
│  ├─ Contact.tsx       # форма заявки (клиентское состояние)
│  ├─ Footer.tsx
│  ├─ ImageSlot.tsx     # placeholder изображения (drag-drop + localStorage)
│  ├─ Counter.tsx       # анимированный счётчик при появлении
│  ├─ MagneticLink.tsx  # кнопка, тянущаяся к курсору
│  └─ useReveal.ts      # хук появления при скролле
└─ lib/
   └─ content.ts        # типы + весь двуязычный контент + утилиты
```

## Где что менять

- **Тексты** — весь контент в `lib/content.ts` (объект `CONTENT` с ключами `ru` / `en`). Типы фиксируют структуру для обоих языков.
- **Цвета / темы** — CSS-переменные в `app/globals.css` (`:root`, `[data-theme="light"]`).
- **Акцент** — по умолчанию `#C6F932`. Задаётся пропом `defaultAccent` у `SiteProvider` в `app/layout.tsx`; палитра вариантов — `ACCENTS` в `content.ts`. В контексте есть `setAccent()` — можно повесить на UI-переключатель.
- **Тема/язык по умолчанию** — пропы `defaultTheme` / `defaultLang` у `SiteProvider`. Выбор пользователя сохраняется в `localStorage`.

## Изображения

Кейсы и команда используют `ImageSlot` — кликните или перетащите картинку, она сохранится в `localStorage` (ключи `puls.img.*`). Для продакшена замените компонент на `next/image` с реальными файлами из `/public`.

## Форма

`Contact.tsx` сейчас имитирует отправку (показывает экран успеха). Подключите реальный обработчик: серверный экшен, route handler (`app/api/...`) или сторонний сервис.

## Заметки

- Анимации уважают `prefers-reduced-motion`.
- Смена темы мгновенная (без transition на цвете фона) — это осознанно, плавный переход давал артефакт перерисовки в некоторых браузерах.
- Контакты (`hello@puls.digital`, телефон) — плейсхолдеры, замените на реальные.
