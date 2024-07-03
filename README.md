# Как запустить

```bash
# install dependencies
npm install --legacy-peer-deps

# execute the project
npm run serve
```

```bash
# build project
npm build

# lint
npm lint
```

1. Везде отформатировал код с `prettier` [коммит](https://github.com/antlis/ttrefactoring/commit/62934ca706794cf00bdc87779514af1567ae5bf1)

2. Поставил пакеты, при этом обновился `package-lock.json`, убрал ненужный `default: ''` [коммит](https://github.com/antlis/ttrefactoring/commit/a7af73803375b0c2cc604c646ba50500a427da4a)

3. Задал порт 3000 для `package.json serve` таски [коммит](https://github.com/antlis/ttrefactoring/commit/d509d14c41bc0a20abe17f70ea5c7ef2b92bf4e5)

4. Перенес `vuex store` в отдельные модули [коммит](https://github.com/antlis/ttrefactoring/commit/01408497666dc4afc0df1b35f59fa36a66e1e1ef)

5. Добавил `sass`, реорганизовал стили [коммит](https://github.com/antlis/ttrefactoring/commit/88707a475b2ad10adf70f27a3d736558940fc0d5)

7. Создал отдельные компоненты для навбара, и для сообщения когда нет никаких таск, убрал `margin` из некоторых компонентов [коммит](https://github.com/antlis/ttrefactoring/commit/e029fdf4ce0c4d829ca6d800a96303816324c0c7)

8. Перенес скрипты в компонентах наверх [коммит](https://github.com/antlis/ttrefactoring/commit/d17e0ac89b28893c1b4b3e336778bc3e4607f1da)

9. Добавил `prevent` модификатор для евента формы `submit`, убрал `preventDefault` из метода сабмит, отрефакторил условие if для `title`, убрали лишние `event` аргументы у метода `newTask`, переименовал `newTask` в `createNewTask` [коммит](https://github.com/antlis/ttrefactoring/commit/b0a40a9747446a2e70c7824a54c904611f8876da)

10. Добавил уникальные идентификаторы для тасков с помощью библиотеки `vue-uuid`, заглавные буквы вначале компонента `TaskGrid` [коммит](https://github.com/antlis/ttrefactoring/commit/bd5e2f65ddf79eee00d0ce03fa782cb19ed77e3a)

11. Убрал лишний аргумент у эмитов `Task` компонента [коммит](https://github.com/antlis/ttrefactoring/commit/6c7390535dace98806429b5f98136a8600d30b80)

12. Обновил `babel.config`, указал другой присет [коммит](https://github.com/antlis/ttrefactoring/commit/b11835d2268e290d3682609894a340c828b815ea)

13. Сделал переменные для цветов в стилях [коммит](https://github.com/antlis/ttrefactoring/commit/4057badd80d080f128ab6d13314904192fd7b245)

14. Обновил README.md, убрал ненужный `required: true`, у комонента `TaskProgress` [коммит](https://github.com/antlis/ttrefactoring/commit/27714ca506006ad4d28472352274636ee99b3884)
