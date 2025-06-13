/*здесь мы получаем ссыоки на html элементы модального окна и ео содержимое: изображение. заголовок и т. д.*/
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalAuthor = document.getElementById("modalAuthor");
const modalYear = document.getElementById("modalYear");
const modalMaterial = document.getElementById("modalMaterial");
const modalDimensions = document.getElementById("modalDimensions");
const modalWeight = document.getElementById("modalWeight");


const exhibitData = {
  exhibit1: {
    title: "Ваза, серия «Апрель»",
    description: "Данная ваза — впечатления автора от талого снега, капели, смены времени года, богатства снежных и ледяных фактур.",
    author: "Оксана Панфилова",
    year: "2024",
    material: "Шамот, глазури",
    dimensions: "диаметр 40 см",
    weight: "5000 г",
    image: "images/exhibit1.png"
  },
  exhibit2: {
    title: "Фрагмент древней посуды",
    description: "Обнаружен в ходе раскопок на территории старинного поселения.",
    author: "Александр Тимофеев",
    year: "XIX век",
    material: "Керамика, остатки глазури",
    dimensions: "25х25х30 см",
    weight: "1500 г",
    image: "images/exhibit2.png"
  },
  exhibit3: {
    title: "Керамика XX века",
    description: "Редкий экземпляр из частной коллекции, датируемый началом XX века.",
    author: "Марина Лукьянова",
    year: "1905",
    material: "Глина, свинцовая глазурь",
    dimensions: "30х30х40 см",
    weight: "3000 г",
    image: "images/exhibit3.png"
  },
  exhibit4: {
    title: "Ритуальный сосуд",
    description: "Был найден в археологической экспедиции в 1980 году.",
    author: "Анна Родионова",
    year: "1980",
    material: "Терракота",
    dimensions: "20х20х30 см",
    weight: "1800 г",
    image: "images/exhibit4.png"
  },
  exhibit5: {
    title: "Крышка от кувшина",
    description: "Украшена орнаментом, характерным для XIX века.",
    author: "Станислав Иванов",
    year: "1880",
    material: "Глина, золотая краска",
    dimensions: "15х15х5 см",
    weight: "600 г",
    image: "images/exhibit5.png"
  },
  exhibit6: {
    title: "Чаша ручной работы",
    description: "Создана вручную без использования современных технологий.",
    author: "Екатерина Смирнова",
    year: "1910",
    material: "Глина, роспись",
    dimensions: "20х20х10 см",
    weight: "1000 г",
    image: "images/exhibit6.png"
  },
  exhibit7: {
    title: "Современный стиль",
    description: "Современная интерпретация классического гончарного искусства.",
    author: "Артем Котов",
    year: "2024",
    material: "Глина, матовое покрытие",
    dimensions: "25х25х35 см",
    weight: "3000 г",
    image: "images/exhibit7.png"
  },
  exhibit8: {
    title: "Краски и текстуры",
    description: "Искусство сочетания цвета и формы в одной работе.",
    author: "Юлия Петрова",
    year: "2024",
    material: "Глина, минеральная глазурь",
    dimensions: "30х30х40 см",
    weight: "4000 г",
    image: "images/exhibit8.png"
  }};


function showModal(id) {
  const data = exhibitData[id]; // Получаем данные экспоната по переданному id
  if (!data) return; // Если данных нет — выходим из функции

  // Заполняем модальное окно данными из объекта:
  modalTitle.textContent = data.title;
  modalImage.src = data.image;
  modalDescription.textContent = data.description;
  modalAuthor.textContent = data.author;
  modalYear.textContent = data.year;
  modalMaterial.textContent = data.material;
  modalDimensions.textContent = data.dimensions;
  modalWeight.textContent = data.weight;
  modalTitle.textContent = data.title;
  modalImage.src = data.image;
  modalDescription.innerHTML = data.description;

  modalOverlay.style.display = "flex";// Показываем модальное окно
}

function hideModal() {
  modalOverlay.style.display = "none"; // Скрываем модальное окно
}

document.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {  // Если кликнули на фон
    hideModal(); // Закрываем модальное окно
  }
});


// ====== Загрузка новых экспонатов ======
let currentExhibit = 8; // Текущее количество загруженных экспонатов
const maxExhibits = 28; // Максимальное количество экспонатов

document.getElementById("loadMore").addEventListener("click", () => { // нажимаем на кнопку ещё, начинается проверка
  if (currentExhibit >= maxExhibits) { // Если все экспонаты загружены — выходим
    return; 
  }

  const container = document.getElementById("exhibitsContainer"); //container — это <div>, в который будут добавляться новые карточки экспонатов.

  // Загружаем по 4 новых экспоната за клик
  for (let i = 1; i <= 4; i++) {
    const nextId = currentExhibit + i; // вычисляет id слейдующего эксоната
    // Если данных для экспоната нет — используем заглушку
    const exhibit = exhibitData[`exhibit${nextId}`] || { // значок доллара позволяет вставить значение переменной сразу в строку
      title: `Экспонат ${nextId}`,
      description: `Описание экспоната ${nextId} будет добавлено позже.`,
      author: `Автор ${nextId}`,
      year: `2024`,
      material: `Материал не указан`,
      dimensions: `Не определено`,
      weight: `Не определено`,
      image: `images/exhibit${nextId}.png`
    };

    // Создаем HTML-карточку экспоната
    const cardHTML = `
      <div class="col-md-3">
        <div class="card exhibit-card h-100" onclick="showModal('exhibit${nextId}')">
          <img src="${exhibit.image}" alt="Экспонат ${nextId}" class="card-img-top" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="exhibit-title">${exhibit.title}</h5>
            <p class="card-text">${exhibit.author}</p>
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', cardHTML);// Добавляем карточку в конец контейнера
  }

  currentExhibit += 4; // Увеличиваем счетчик

  if (currentExhibit >= maxExhibits) { // Если достигнут максимум — отключаем кнопку
    document.getElementById("loadMore").disabled = true; // Отключаем кнопку
    document.getElementById("loadMore").classList.add("disabled"); // Добавляем класс для стилизации
  }
});
