export const APP_NAME = "Online Games";

export const GAME_MODES = [
    {
        id: 1,
        mode: "constructors",
        name: "Контейнеры",
        description:
            "Режим, в котором нужно выкупить контейнер у других участников и попробовать окупиться!",
        isAvailable: true,
    },
    {
        id: 2,
        name: "Поиск предметов",
        description: "Режим, в котором нужно найти элементы на картинке быстрее остальных!",
        isAvailable: false,
    },
    {
        id: 3,
        name: "Угадай песню",
        description: "Режим, в котором нужно угадать название и исполнителя песни!",
        isAvailable: false,
    },
];
