const translations = {
    en: {
        title: 'ChronoVerse',
        chooseLanguage: 'Choose your language',
        mainTitle: 'Historical Borders & Simulation',
        mainDescription: 'Explore historical borders and simulate their changes over time.',
        regionTitle: 'Choose up to two regions for free',
        regionBtn: 'Continue',
        regions: ['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania']
    },
    ru: {
        title: 'ChronoVerse',
        chooseLanguage: 'Выберите язык',
        mainTitle: 'Исторические границы и симуляция',
        mainDescription: 'Изучайте исторические границы и моделируйте их изменения во времени.',
        regionTitle: 'Выберите до двух регионов бесплатно',
        regionBtn: 'Продолжить',
        regions: ['Европа', 'Азия', 'Африка', 'Северная Америка', 'Южная Америка', 'Океания']
    },
    es: {
        title: 'ChronoVerse',
        chooseLanguage: 'Elige tu idioma',
        mainTitle: 'Fronteras históricas y simulación',
        mainDescription: 'Explora fronteras históricas y simula sus cambios a lo largo del tiempo.',
        regionTitle: 'Elige hasta dos regiones gratis',
        regionBtn: 'Continuar',
        regions: ['Europa', 'Asia', 'África', 'América del Norte', 'América del Sur', 'Oceanía']
    },
    fr: {
        title: 'ChronoVerse',
        chooseLanguage: 'Choisissez votre langue',
        mainTitle: 'Frontières historiques et simulation',
        mainDescription: 'Explorez les frontières historiques et simulez leurs changements au fil du temps.',
        regionTitle: 'Choisissez jusqu’à deux régions gratuitement',
        regionBtn: 'Continuer',
        regions: ['Europe', 'Asie', 'Afrique', 'Amérique du Nord', 'Amérique du Sud', 'Océanie']
    }
};

function setLanguage(lang) {
    window.selectedLang = lang;
    document.getElementById('language-screen').style.display = 'none';
    // Показываем экран выбора регионов
    showRegionScreen(lang);
    // Подсвечиваем выбранную кнопку
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.lang === lang) btn.classList.add('selected');
    });
}

function showRegionScreen(lang) {
    const t = translations[lang];
    document.getElementById('region-title').textContent = t.regionTitle;
    const regionButtonsDiv = document.getElementById('region-buttons');
    regionButtonsDiv.innerHTML = '';
    t.regions.forEach((region, idx) => {
        const btn = document.createElement('button');
        btn.className = 'language-btn region-btn';
        btn.textContent = region;
        btn.dataset.region = idx;
        btn.onclick = () => toggleRegion(btn, lang);
        regionButtonsDiv.appendChild(btn);
    });
    const continueBtn = document.getElementById('region-continue');
    continueBtn.textContent = t.regionBtn;
    continueBtn.disabled = true;
    continueBtn.onclick = () => {
        document.getElementById('region-screen').style.display = 'none';
        document.getElementById('main-interface').style.display = 'block';
        // Здесь можно обработать выбранные регионы: window.selectedRegions
    };
    window.selectedRegions = [];
    document.getElementById('region-screen').style.display = 'flex';
}

function toggleRegion(btn, lang) {
    if (!window.selectedRegions) window.selectedRegions = [];
    const region = btn.textContent;
    const idx = window.selectedRegions.indexOf(region);
    if (idx > -1) {
        window.selectedRegions.splice(idx, 1);
        btn.classList.remove('selected');
    } else {
        if (window.selectedRegions.length >= 2) return;
        window.selectedRegions.push(region);
        btn.classList.add('selected');
    }
    document.getElementById('region-continue').disabled = window.selectedRegions.length === 0;
}

// Если потребуется, можно добавить автоматический выбор языка по браузеру 