import replace from 'gulp-replace'; // Плагин поиска и замены
import gulpPlumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)
import browserSync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления
import gulpIf  from 'gulp-if';

export const plugins = {
  replace: replace,
  gulpPlumber: gulpPlumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: gulpIf
};
