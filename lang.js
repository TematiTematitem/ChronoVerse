const translations = {
    en: {
        title: 'ChronoVerse',
        chooseLanguage: 'Choose your language',
        mainTitle: 'Historical Borders & Simulation',
        mainDescription: 'Explore historical borders and simulate their changes over time.'
    },
    ru: {
        title: 'ChronoVerse',
        chooseLanguage: 'Выберите язык',
        mainTitle: 'Исторические границы и симуляция',
        mainDescription: 'Изучайте исторические границы и моделируйте их изменения во времени.'
    }
};

function setLanguage(lang) {
    // Сохраняем язык (можно расширить до localStorage)
    window.selectedLang = lang;
    // Скрываем экран выбора языка
    document.getElementById('language-screen').style.display = 'none';
    // Показываем основной интерфейс
    document.getElementById('main-interface').style.display = 'block';
    // Обновляем текст на выбранном языке
    document.getElementById('main-title').textContent = translations[lang].mainTitle;
    document.getElementById('main-description').textContent = translations[lang].mainDescription;
    document.title = translations[lang].title;
}

// Если потребуется, можно добавить автоматический выбор языка по браузеру 