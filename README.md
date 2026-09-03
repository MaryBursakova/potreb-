Chrome-safe версия.

Что исправлено:
- полностью убрана зависимость от Google Fonts;
- добавлены WebP-копии изображений;
- hero preload + fetchpriority;
- всем ключевым изображениям заданы размеры;
- ниже первого экрана используется lazy loading;
- отключен backdrop-filter;
- добавлена защита от горизонтального overflow;
- добавлены min-width:0 для CSS Grid;
- CSS/JS получили cache-busting ?v=chrome3.

Замените в репозитории:
index.html
styles.css
script.js
assets/*
