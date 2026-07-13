const correctHash = 1509442; 

function hashCode(str) { 
    let h = 0; 
    for(let i=0; i<str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0; 
    return h; 
}

const meals = [
    // 🥩 ОСНОВНОЕ
    { id: 1, icon: '🍗', name: 'Куриные голени', desc: 'Запеченные в аэрогриле.', cat: 'Основное', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chicken_drumsticks.jpg/640px-Chicken_drumsticks.jpg', recipe: 'Маринад: майонез, чеснок, паприка. Аэрогриль 180°C — 25 минут.' },
    { id: 2, icon: '🍳', name: 'Печень с луком', desc: 'Быстро и вкусно.', cat: 'Основное', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chicken_liver_with_onions.jpg/640px-Chicken_liver_with_onions.jpg', recipe: 'Обжарить лук до золота, добавить печень. Жарь 10 минут.' },
    { id: 3, icon: '🌪️', name: 'Котлеты домашние', desc: 'Сочные и ароматные.', cat: 'Основное', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Kottbullar.jpg/640px-Kottbullar.jpg', recipe: 'Фарш + тертый картофель. Запекать в аэрогриле 20 минут.' },
    { id: 4, icon: '🥩', name: 'Куриная отбивная', desc: 'В золотистом кляре.', cat: 'Основное', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Schnitzel.jpg/640px-Schnitzel.jpg', recipe: 'Филе отбить, обмакнуть в муку и яйцо. Жарить до румянца.' },
    { id: 5, icon: '🥓', name: 'Жареная колбаса', desc: 'Просто и по-мужски.', cat: 'Основное', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Fried_sausage.jpg/640px-Fried_sausage.jpg', recipe: 'Нарезать и обжарить с луком до хруста.' },

    // 🍚 ГАРНИРЫ
    { id: 11, icon: '🥣', name: 'Картофельное пюре', desc: 'Нежное, со сливочным маслом.', cat: 'Гарнир', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mashed_potatoes.jpg/640px-Mashed_potatoes.jpg', recipe: 'Картофель отварить, размять с маслом и каплей молока.', addons: [1, 2, 3, 4, 5, 102] },
    { id: 12, icon: '🍝', name: 'Макароны', desc: 'Классический гарнир.', cat: 'Гарнир', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pasta_in_a_pan.jpg/640px-Pasta_in_a_pan.jpg', recipe: 'Варить 10 минут. Слить воду, добавить масло.', addons: [1, 2, 3, 4, 5, 103, 104] },
    { id: 13, icon: '🌾', name: 'Гречка', desc: 'Рассыпчатая и полезная.', cat: 'Гарнир', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Buckwheat_kasha.jpg/640px-Buckwheat_kasha.jpg', recipe: 'Гречку промыть, варить 20 минут под крышкой.', addons: [1, 2, 3, 4, 5] },
    { id: 14, icon: '🥔', name: 'Картошка по-селянски', desc: 'Аэрогриль-стайл.', cat: 'Гарнир', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Roasted_potatoes.jpg/640px-Roasted_potatoes.jpg', recipe: 'Дольки с чесноком и маслом. 20 минут в аэрогриле.', addons: [1, 4, 5] },
    { id: 15, icon: '🍳', name: 'Жареная картошка', desc: 'С хрустящей корочкой.', cat: 'Гарнир', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Fried_potatoes.jpg/640px-Fried_potatoes.jpg', recipe: 'Жарить на сковороде с луком до золота.', addons: [2, 3, 5, 101] },

    // 🥘 ВСЁ В ОДНОМ
    { id: 21, icon: '🍝', name: 'Макароны по-флотски', desc: 'Фарш + макароны.', cat: 'Самостоятельное', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Makary-po-flotski.jpg/640px-Makary-po-flotski.jpg', recipe: 'Отварить макароны, обжарить фарш с луком, смешать.' },
    { id: 22, icon: '🥘', name: 'Жаркое с картошкой', desc: 'Картофель тушеный с мясом.', cat: 'Самостоятельное', diff: 3, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Zharkoe.jpg/640px-Zharkoe.jpg', recipe: 'Тушить картофель с курицей, луком и морковью 30 минут.' },
    { id: 23, icon: '🥞', name: 'Картофельные драники', desc: 'С луком и чесноком.', cat: 'Самостоятельное', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Potato_pancakes_01.jpg/640px-Potato_pancakes_01.jpg', recipe: 'Тертый картофель, яйцо, мука. Жарить как оладьи.' },
    { id: 24, icon: '🥘', name: 'Ленивые голубцы', desc: 'Рис, фарш и капуста.', cat: 'Самостоятельное', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Golubtsy.jpg/640px-Golubtsy.jpg', recipe: 'Смешать фарш, рис и капусту, тушить в томате.' },

    // 🥣 СУПЫ
    { id: 51, icon: '🍲', name: 'Сырный суп', desc: 'С плавленым сыром.', cat: 'Супы', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cheese_soup.jpg/640px-Cheese_soup.jpg', recipe: 'Основа — бульон, картошка, плавленый сырок до растворения.' },
    { id: 52, icon: '🍗', name: 'Суп с крылышками', desc: 'Наваристый и простой.', cat: 'Супы', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chicken_soup.jpg/640px-Chicken_soup.jpg', recipe: 'Варить крылышки 30 мин, добавить овощи и картошку.' },
    { id: 53, icon: '🫘', name: 'Гороховый суп', desc: 'С копченостями.', cat: 'Супы', diff: 3, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pea_soup.jpg/640px-Pea_soup.jpg', recipe: 'Горох разварить до пюре, добавить картофель и копчености.' },
    { id: 54, icon: '🥘', name: 'Борщ с фасолью', desc: 'Сытный постный.', cat: 'Супы', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Borscht_served.jpg/640px-Borscht_served.jpg', recipe: 'Свекла, капуста, картофель, фасоль из банки.' },

    // 🥖 ПЕРЕКУСЫ
    { id: 31, icon: '🌯', name: 'Шаурма', desc: 'Домашняя классика.', cat: 'Перекус', diff: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Shaurma.jpg/640px-Shaurma.jpg', recipe: 'Лаваш, курица, капуста, соус. Подпечь в аэрогриле.' },
    { id: 32, icon: '🥪', name: 'Горячие бутерброды', desc: 'С расплавленным сыром.', cat: 'Перекус', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Hot_sandwich.jpg/640px-Hot_sandwich.jpg', recipe: 'Хлеб, колбаса, сыр. Аэрогриль 5 мин.' },
    { id: 33, icon: '🍕', name: 'Мини-пицца', desc: 'На батоне.', cat: 'Перекус', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pizza_slice.jpg/640px-Pizza_slice.jpg', recipe: 'Батон, колбаса, сыр, помидор. Запечь.' },

    // 🥗 ДОПОЛНЕНИЯ (ID > 100)
    { id: 101, icon: '🥗', name: 'Салат из капусты', cat: 'Дополнения', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coleslaw.jpg/640px-Coleslaw.jpg', recipe: 'Нашинковать капусту, морковь, заправить маслом.' },
    { id: 102, icon: '🥒', name: 'Соленый огурчик', cat: 'Дополнения', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pickle.jpg/640px-Pickle.jpg', recipe: 'Нарезать кружочками.' },
    { id: 103, icon: '🍅', name: 'Томатный соус', cat: 'Дополнения', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tomato_sauce.jpg/640px-Tomato_sauce.jpg', recipe: 'Кетчуп или томатная паста.' },
    { id: 104, icon: '🧀', name: 'Сырный соус', cat: 'Дополнения', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_sauce.jpg/640px-Cheese_sauce.jpg', recipe: 'Плавленый сырок растопить с ложкой воды.' },
    { id: 107, icon: '🥓', name: 'Шкварки с луком', cat: 'Дополнения', diff: 1, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Greaves.jpg/640px-Greaves.jpg', recipe: 'Сало вытопить, добавить лук.' }
];
