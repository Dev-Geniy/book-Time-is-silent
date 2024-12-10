
    // Страницы
    const pages = [
      {
        title: "Введение",
        subtitle: "Подзаголовок",
        content: "<p>Это текст для введения.</p><p>Это текст для введения.</p>"
      },
      {
        title: "Глава 1",
        subtitle: "Глава 1 - Продвижение",
        content: "<p>Это текст для главы.</p><p>Больше информации и анализа.</p>"
      },
      {
        title: "Глава 2",
        subtitle: "Глава 2 - Продвижение",
        content: "<p>Это текст для главы.</p><p>Больше информации и анализа.</p>"
      },
      {
        title: "Глава 3",
        subtitle: "Глава 3 - Продвижение",
        content: "<p>Это текст для главы.</p><p>Напряжение нарастает.</p>"
      },
      {
        title: "Глава 4",
        subtitle: "Глава 4 - Продвижение",
        content: "<p>Это текст для главы.</p><p>Итоги и выводы.</p>"
      },
      {
        title: "Глава 5",
        subtitle: "Глава 5 - Продвижение",
        content: "<p>Это текст для главы.</p><p>Итоги и выводы.</p>"
      },
      {
        title: "Глава 6",
        subtitle: "Глава 6 - Продвижение",
        content: "<p>Это текст для главы.</p><p>Итоги и выводы.</p>"
      }
    ];

    const pagesContainer = document.getElementById('pages');
    let currentPage = 0;

    function renderPages() {
      pages.forEach((page, index) => {
        const pageElement = document.createElement('div');
        pageElement.classList.add('page');
        if (index === 0) pageElement.classList.add('active');

        pageElement.innerHTML = `
          <h2>${page.title}</h2>
          <h3>${page.subtitle}</h3>
          ${page.content}
        `;

        pagesContainer.appendChild(pageElement);
      });
    }

    function goToPage(pageIndex) {
      document.querySelector('.page.active').classList.remove('active');
      currentPage = pageIndex;
      document.querySelectorAll('.page')[currentPage].classList.add('active');
      document.getElementById('coverContent').style.display = pageIndex === 0 ? 'flex' : 'none';
            toggleMenu(false);
    }

    function goToPreviousPage() {
      if (currentPage > 0) {
        goToPage(currentPage - 1);
      }
    }

    function goToNextPage() {
      if (currentPage < pages.length - 1) {
        goToPage(currentPage + 1);
      }
    }

    function goToContents() {
      goToPage(0);
    }

    function toggleMenu(show = null) {
      const menu = document.getElementById('burgerMenu');
      const isActive = menu.classList.contains('active');
      if (show === null) {
        menu.classList.toggle('active', !isActive);
      } else {
        menu.classList.toggle('active', show);
      }
    }

    function shareContent() {
      const shareData = {
        title: 'Название Книги',
        text: 'Прочитайте эту удивительную книгу!',
        url: window.location.href,
      };
      if (navigator.share) {
        navigator.share(shareData).catch(console.error);
      } else {
        alert('Функция совместного использования не поддерживается вашим устройством.');
      }
    }

    // Переключение темы
    const themeSwitcher = document.getElementById('themeSwitcher');
    themeSwitcher.addEventListener('click', () => {
      const isDarkTheme = document.body.style.backgroundColor === 'var(--dark-theme-bg)';
      document.body.style.backgroundColor = isDarkTheme ? 'var(--light-theme-bg)' : 'var(--dark-theme-bg)';
      document.body.style.color = isDarkTheme ? 'var(--text-color)' : '#fff';
      themeSwitcher.innerHTML = `<i class="fas ${isDarkTheme ? 'fa-moon' : 'fa-sun'}"></i>`;
    });

    // Инициализация страниц
    document.addEventListener('DOMContentLoaded', renderPages);
    
    // Модальное окно инфо о скачивании
    function showPwaInstructions() {
  document.getElementById('pwaInstructionsModal').style.display = 'block';
}

function closePwaInstructions() {
  document.getElementById('pwaInstructionsModal').style.display = 'none';
}

    // Регистрация Сервер Воркер
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(() => {
        console.log('Service Worker зарегистрирован.');
      }).catch((error) => {
        console.error('Ошибка регистрации Service Worker:', error);
      });
    });
  }
