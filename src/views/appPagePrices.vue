<template>
    <header class="header flex-column">
        <h1>Цены на занятия</h1>
    </header>
    <main class="flex-column">
        <table class="table">
            <thead>
            <tr  class="table-title">
                <th class="table-title-item">Типы занятий</th>
                <th class="table-title-item">Мини-группа 4 человека</th>
                <th class="table-title-item">Мини-группа 2 человека</th>
                <th class="table-title-item">Индивидуальные</th>
            </tr>
            </thead>
            <tr class="table-row-1">
                <td class="table-row-item" aria-label="Типы занятий">Занятие с рускоязычным - преподавателем</td>
                <td class="table-row-item" aria-label="Мини-группа 4 человека">670 руб.</td>
                <td class="table-row-item" aria-label="Мини-группа 2 человека">1070 руб.</td>
                <td class="table-row-item" aria-label="Индивидуальные">1470 руб.</td>
            </tr>
            <tr class="table-row-2">
                <td class="table-row-item" aria-label="Типы занятий">Занятие с преподавателем - носителем языка</td>
                <td class="table-row-item" aria-label="Мини-группа 4 человека">970 руб.</td>
                <td class="table-row-item" aria-label="Мини-группа 2 человека">1270 руб.</td>
                <td class="table-row-item" aria-label="Индивидуальные">1970 руб.</td>
            </tr>
            <tr class="table-row-1">
                <td class="table-row-item" aria-label="Типы занятий">Минимальный пакет</td>
                <td class="table-row-item" aria-label="Мини-группа 4 человека">5360 руб. (8 занятий)</td>
                <td class="table-row-item" aria-label="Мини-группа 2 человека">8560 руб. (8 занятий)</td>
                <td class="table-row-item" aria-label="Индивидуальные">5880 руб. (4 занятия)</td>
            </tr>
        </table>
        <button class="btn" style="width: 70%;">Оплата</button>
        <div class="information-message">
            <img src="../assets/info-logo.png" alt="info-logo" class="info-logo-img">
            <p>В цену входят:</p>
            <ul>
                <li>занятия с преподавателями (один урок - 60 мин)</li>
                <li>доступ в виртуальный класс с учебными материалами </li>
                <li>задания для закрепления материалов каждого занятия</li>
            </ul>
        </div>
        <section class="flex-column">
            <h2>Цены на подготовку к экзаменам</h2>
            <h3>Подготовка к экзаменам происходит в минигруппе из 4-х человек</h3>
            <div class="flex-row">
                <div class="price-card">
                    <div class="price-card-title">
                        <h3>Международный экзамен А2 (CELI, CILS, PLIDA)</h3>
                        <h3>14 700 руб.</h3>
                    </div>
                    <div class="price-card-text">
                        <h4>Курс 16 часов</h4>
                        <p>занятия в мини-группе с преподавателем (один урок - 60 мин)</p>
                        <p>доступ в виртуальный класс с учебными материалами </p>
                        <p>задания для закрепления материалов каждого занятия </p>
                        <button class="btn">Оплата</button>
                    </div>
                </div>
                <div class="price-card">
                    <div class="price-card-title">
                        <h3>Международный экзамен В1, В2, С1 (CELI, CILS, PLIDA)</h3>
                        <h3>19 700 руб.</h3>
                    </div>
                    <div class="price-card-text">
                        <h4>Курс 24 часа</h4>
                        <p>занятия в мини-группе с преподавателем (один урок - 60 мин)</p>
                        <p>доступ в виртуальный класс с учебными материалами</p>
                        <p>задания для закрепления материалов каждого занятия</p>
                        <button class="btn">Оплата</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "appPagePrices"
    }
</script>

<style scoped>
    .flex-column {
        align-items: center;
    }
    .price-card {
        max-width: 35rem;
        margin: 1rem;
        border-radius: 15px;
        cursor: pointer;
        background-color: rgba(255,255,255,0.8);
        box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.1);
    }
        .price-card-title {
            padding: 1rem 2rem;
            border-radius: 15px;
            background-color: rgba(233,187,145,0.75);
        }
        .price-card-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 2rem;
        }
        .price-card-text p {
            padding-bottom: 1rem;
            border-bottom: 2px solid rgba(128, 128, 128, 0.4);
        }
        .price-card-text .btn {
            align-self: stretch;
        }
    @media (max-width: 650px) {
        h1 {
            margin: 0 1rem;
        }
    }
</style>