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
    },
    es: {
        title: 'ChronoVerse',
        chooseLanguage: 'Elige tu idioma',
        mainTitle: 'Fronteras históricas y simulación',
        mainDescription: 'Explora fronteras históricas y simula sus cambios a lo largo del tiempo.'
    },
    fr: {
        title: 'ChronoVerse',
        chooseLanguage: 'Choisissez votre langue',
        mainTitle: 'Frontières historiques et simulation',
        mainDescription: 'Explorez les frontières historiques et simulez leurs changements au fil du temps.'
    }
};

function setLanguage(lang) {
    window.selectedLang = lang;
    document.getElementById('language-screen').style.display = 'none';
    document.getElementById('main-interface').style.display = 'block';
    document.getElementById('main-title').textContent = translations[lang].mainTitle;
    document.getElementById('main-description').textContent = translations[lang].mainDescription;
    document.title = translations[lang].title;
    // Подсвечиваем выбранную кнопку
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.lang === lang) btn.classList.add('selected');
    });
}

// Если потребуется, можно добавить автоматический выбор языка по браузеру 