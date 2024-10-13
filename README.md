<h1 id="home">Homework :clipboard:</h1>

## react-hw-03-image-finder_ts

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository `react-hw-03-image-finder_ts` created
- When submitting homework, there are links: to the source files and the working page of the
  projects on `GitHub Pages`
- The state of the components stores the minimum required set of data, the rest is calculated
- When running the task code, there are no errors or warnings in the console
- For each component, there is a separate folder with a React component file and a style file
- `propTypes` are described for the components
- Everything that the component expects as props is passed to it when called
- Component names are clear, descriptive
- JS code is clean and understandable, `Prettier` is used
- Styling is done with `CSS modules` or `Styled Components`.

# Image Search

Write an image search application by keyword. Preview of the working application
[see link](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Create the `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`, `<Loader>`, `<Button>` and
`<Modal>` components. Ready-made component styles can be found in the [styles.css](./styles.css)
file and adjusted for your needs, if necessary.

![preview](./hw/preview.jpg)

## Pixabay API Instructions

For HTTP requests, use the public image search service [Pixabay](https://pixabay.com/api/docs/).
Register and get a private access key.

HTTP request URL string.

```bash
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API supports pagination, by default the `page` parameter is equal to `1`. Let the response
contain 12 objects, set in the `per_page` parameter. Do not forget that when searching for a new
keyword, you need to reset the value of `page` to `1`.

The response from the API contains an array of objects, in which you are only interested in the
following properties.

- `id` - unique identifier
- `webformatURL` - link to a small image for the list of cards
- `largeImageURL` - link to a large image for a modal window

## Description of the `<Searchbar>` component

The component accepts one `onSubmit` prop - a function for passing the input value when submitting
the form. Creates a DOM element of the following structure.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Description of the `<ImageGallery>` component

List of image cards. Creates a DOM element of the following structure.

```html
<ul class="gallery">
  <!-- Set of <li> with images -->
</ul>
```

## Description of the `<ImageGalleryItem>` component

A list item component with an image. Creates a DOM element of the following structure.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Description of the `<Button>` component

When the `Load more` button is clicked, the next batch of images should be loaded and rendered
together with the previous ones. The button should only be rendered when there are some loaded
images. If the array of images is empty, the button is not rendered.

## Description of the `<Loader>` component

A spinner component, displayed while the images are loading. Use any ready-made component, for
example [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) or any other.

## Description of the `<Modal>` component

When a gallery item is clicked, a modal window with a dark overlay should open and a large version
of the image should be displayed. The modal window should be closed by pressing the `ESC` key or by
clicking on the overlay.

The appearance is similar to the functionality of this
[VanillaJS plugin](https://basiclightbox.electerious.com/), only instead of a white modal window, an
image is rendered (in the example, press `Run`). No need to do animation!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерії прийому

- Створено репозиторій `react-hw-03-image-finder_ts`
- При здачі домашньої роботи є посилання: на вихідні файли та робочу сторінку проектів на
  `GitHub Pages`
- У стані компонентів зберігається мінімально необхідний набір даних, інше обчислюється
- При запуску коду завдання, в консолі немає помилок та попереджень
- Для кожного компонента є окрема папка з файлом React-компонента та файлом стилів
- Для компонентів описані `propTypes`
- Все що компонент чекає у вигляді пропов, передається йому при виклику
- Імена компонентів зрозумілі, описові
- JS-код чистий та зрозумілий, використовується `Prettier`
- Стилізація виконана `CSS-модулями` або `Styled Components`.

# Пошук зображень

Напиши програму пошуку зображень за ключовим словом. попередній перегляд робітника програми
[дивись за посиланням](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Створи компоненти `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`, `<Loader>`, `<Button>` та
`<Modal>`. Готові стилі компонентів можна взяти в файл [styles.css](./styles.css) і підправити під
себе, якщо необхідно.

![preview](./hw/preview.jpg)

## Інструкція Pixabay API

Для HTTP-запитів використовуй публічний сервіс пошуку зображень
[Pixabay](https://pixabay.com/api/docs/). Зареєструйся та отримай приватний ключ доступу.

URL-рядок HTTP-запиту.

```bash
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API підтримує пагінацію, за замовчуванням параметр `page` дорівнює `1`. Нехай у відповіді
надходить по 12 об'єктів, встановлено в параметрі `per_page`. Не забудь, що при пошуку за новим
ключовим словом, необхідно скидати значення `page` в `1`.

У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише такі властивості.

- `id` - унікальний ідентифікатор
- `webformatURL` - посилання на маленьке зображення для списку карток
- `largeImageURL` - посилання на велике зображення для модального вікна

## Опис компоненту `<Searchbar>`

Компонент приймає один проп `onSubmit` - функцію передачі значення інпуту при сабміті форми. Створює
DOM елемент наступної структури.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Опис компоненту `<ImageGallery>`

Список карток зображень. Створює DOM елемент наступної структури.

```html
<ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul>
```

## Опис компоненту `<ImageGalleryItem>`

Компонент елемента списку із зображенням. Створює DOM-елемент наступного структури.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Опис компоненту `<Button>`

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція зображень і рендерувати
разом з попередніми. Кнопка повинна рендеруватись тільки тоді, коли є якісь завантажені зображення.
Якщо масив зображень порожній, кнопка не рендер.

## Опис компоненту `<Loader>`

Компонент спинера, відображається поки завантаження изобаржений. Використовуй будь-який готовий
компонент, наприклад [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) або
будь-який інший.

## Опис компонента `<Modal>`

При кліку по елементу галереї має відкриватися модне вікно з темним оверлеем і відображатиметься
велика версія зображення. Модальне вікно має закриватись за натисканням клавіші `ESC` або по кліку
на оверлеї.

Зовнішній вигляд схожий на функціонал цього
[VanillaJS-плагіна](https://basiclightbox.electerious.com/), тільки замість білого модального вікна
рендері зображення (у прикладі натисніть `Run`). Анімацію робити не потрібно!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерии приема

- Создан репозиторий `react-hw-03-image-finder_ts`
- При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу проектов на
  `GitHub Pages`
- В состоянии компонентов хранится минимально необходимый набор данных, остальное вычисляется
- При запуске кода задания, в консоли нету ошибок и предупреждений
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей
- Для компонентов описаны `propTypes`
- Все что компонент ожидает в виде пропов, передается ему при вызове
- Имена компонентов понятные, описательные
- JS-код чистый и понятный, используется `Prettier`
- Стилизация выполнена `CSS-модулями` или `Styled Components`.

# Поиск изображений

Напиши приложение поиска изображений по ключевому слову. Превью рабочего приложения
[смотри по ссылке](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Создай компоненты `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`, `<Loader>`, `<Button>` и
`<Modal>`. Готовые стили компонентов можно взять в файле [styles.css](./styles.css) и подправить под
себя, если необходимо.

![preview](./hw/preview.jpg)

## Инструкция Pixabay API

Для HTTP-запросов используй публичный сервис поиска изображений
[Pixabay](https://pixabay.com/api/docs/). Зарегистрируйся и получи приватный ключ доступа.

URL-строка HTTP-запроса.

```bash
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API поддерживает пагинацию, по умолчанию параметр `page` равен `1`. Пусть в ответе приходит
по 12 объектов, установлено в параметре `per_page`. Не забудь что при поиске по новому ключевому
слову, необходимо сбрасывать значение `page` в `1`.

В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.

- `id` - уникальный идентификатор
- `webformatURL` - ссылка на маленькое изображение для списка карточек
- `largeImageURL` - ссылка на большое изображение для модального окна

## Описание компонента `<Searchbar>`

Компонент принимает один проп `onSubmit` - функцию для передачи значения инпута при сабмите формы.
Создает DOM-элемент следующей структуры.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Описание компонента `<ImageGallery>`

Список карточек изображений. Создает DOM-элемент следующей структуры.

```html
<ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul>
```

## Описание компонента `<ImageGalleryItem>`

Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Описание компонента `<Button>`

При нажатии на кнопку `Load more` должна догружаться следующая порция изображений и рендериться
вместе с предыдущими. Кнопка должна рендерится только тогда, когда есть какие-то загруженные
изобаржения. Если массив изображений пуст, кнопка не рендерится.

## Описание компонента `<Loader>`

Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой готовый компонент,
например [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) или любой другой.

## Описание компонента `<Modal>`

При клике по элементу галереи должно открываться модальное окно с темным оверлеем и отображаться
большая версия изображения. Модальное окно должно закрываться по нажатию клавиши `ESC` или по клику
на оверлее.

Внешний вид похож на функционал этого [VanillaJS-плагина](https://basiclightbox.electerious.com/),
только вместо белого модального окна рендерится изображение (в примере нажми `Run`). Анимацию делать
не нужно!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
