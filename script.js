const games = [
    {
        title: "Counter-Strike",
        category: "fantasy",
        img: "https://avatars.mds.yandex.net/i?id=7aa3a462dbf2891d41b01b851a77390f32c51714-4012095-images-thumbs&n=13",
        desc: "Один из самых популярных командных шутеров в мире."
    },
    {
        title: "Minecraft",
        category: "classic",
        img: "https://avatars.mds.yandex.net/i?id=060769d52651bdfd3faa806c8ada2d7ca6a5d75f-8568171-images-thumbs&n=13",
        desc: "Песочница с бесконечными возможностями."
    },
    {
        title: "Grand Theft Auto V",
        category: "fantasy",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        desc: "Открытый мир с криминальным сюжетом."
    },
    {
        title: "The Witcher 3",
        category: "fantasy",
        img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        desc: "Культовая ролевая игра с богатым миром."
    },
    {
        title: "Terraria",
        category: "classic",
        img: "https://avatars.mds.yandex.net/i?id=0f91537f674b0ea683bb5c4891d91cba59c874fe-11869273-images-thumbs&n=13",
        desc: "2D-песочница с исследованием и приключениями."
    },
    {
        title: "Stardew Valley",
        category: "classic",
        img: "https://avatars.mds.yandex.net/i?id=602275daddb81108f820353fa938190e7f038b61-8529854-images-thumbs&n=13",
        desc: "Фермерский симулятор с RPG-элементами."
    },
    {
        title: "Silent Hill 2",
        category: "detective",
        img: "https://avatars.mds.yandex.net/i?id=a8909afaefbe923e87a5f52fdccc20ddfd0b98ba-5233821-images-thumbs&n=13",
        desc: "Туман, страх и сильный сюжет."
    },
    {
        title: "The Evil Within",
        category: "detective",
        img: "https://avatars.mds.yandex.net/get-entity_search/2363292/1227098696/S600xU_2x",
        desc: "Напряжённый хоррор с выживанием."
    },
    {
        title: "The Last of Us",
        category: "classic",
        img: "https://avatars.mds.yandex.net/get-entity_search/10767883/1196910146/SUx182_2x",
        desc: " The Last of Us — игра в жанрах action-adventure с элементами хоррора и стелса от третьего лица. Разработчик — Naughty Dog, издатель — Sony Computer Entertainment."
    },
    {
        title: "Red Dead Redemption",
        category: "classic",
        img: "https://avatars.mds.yandex.net/get-entity_search/5542822/551836602/SUx104_2x",
        desc: " Red Dead Redemption — компьютерная игра в жанре action-adventure, разработанная компанией Rockstar San Diego. Является логическим продолжением игры 2004 года — Red Dead Revolver."
    },
    {
        title: "Five Nights at Freddy’s",
        category: "detective",
        img: "https://avatars.mds.yandex.net/get-entity_search/4759071/1228890855/SUx182_2x",
        desc: " Five Nights at Freddy’s (с англ. — «Пять ночей у Фредди») — независимая компьютерная игра в жанрах point-and-click и survival horror, разработанная и изданная в 2014 году американским игровым дизайнером Скоттом Коутоном."
    },
    {
        title: "The Dark Pictures Anthology",
        category: "detective",
        img: "https://avatars.mds.yandex.net/i?id=e55911b85e7cf9d059954e2aca1fa6374ea6d7ea-10385082-images-thumbs&n=13",
        desc: " The Dark Pictures Anthology — серия компьютерных игр в жанре интерактивного кино/драмы с элементами survival horror. Разработана компанией Supermassive Games, первый сезон издан Bandai Namco Entertainment.."
    },
    {
        title: "Metro Exodus",
        category: "fantasy",
        img: "https://avatars.mds.yandex.net/get-entity_search/1589423/1227716259/SUx182_2x",
        desc: " Metro Exodus (в России издана под названием «Метро: Исход») — компьютерная игра в жанре шутера от первого лица с элементами survival horror и стелс-экшена. Это третья игра в серии Metro, основанная на романах Дмитрия Глуховского, и продолжает историю Metro 2033 и Metro: Last Light."
    },
    {
        title: "S.T.A.L.K.E.R.",
        category: "fantasy",
        img: "https://avatars.mds.yandex.net/get-entity_search/10920629/1227512394/SUx182_2x",
        desc: "S.T.A.L.K.E.R. — серия игр, разработанная украинской компанией GSC Game World. Создана в жанрах шутера от первого лица и survival horror с элементами ролевой игры и action-adventure."
    },

];

const container = document.getElementById("cardsContainer");
const filter = document.getElementById("categoryFilter");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

function renderCards(category) {
    container.innerHTML = "";

    games
        .filter(game => category === "all" || game.category === category)
        .forEach(game => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
        <img src="${game.img}" alt="${game.title}">
        <h3>${game.title}</h3>
      `;

            card.addEventListener("click", () => {
                modalImg.src = game.img;
                modalImg.alt = game.title;
                modalTitle.textContent = game.title;
                modalDesc.textContent = game.desc;
                modal.classList.remove("hidden");
            });

            container.appendChild(card);
        });
}

filter.addEventListener("change", () => {
    renderCards(filter.value);
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

renderCards("all");
const openCommunity = document.getElementById("openCommunity");
const communityModal = document.getElementById("communityModal");
const closeCommunity = document.getElementById("closeCommunity");

const messageInput = document.getElementById("messageInput");
const sendMessage = document.getElementById("sendMessage");
const messagesBlock = document.getElementById("messages");


openCommunity.addEventListener("click", (e) => {
    e.preventDefault();
    communityModal.classList.remove("hidden");
    loadMessages();
});


closeCommunity.addEventListener("click", () => {
    communityModal.classList.add("hidden");
});


sendMessage.addEventListener("click", () => {
    const text = messageInput.value.trim();
    if (!text) return;

    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(text);
    localStorage.setItem("messages", JSON.stringify(messages));

    messageInput.value = "";
    loadMessages();
});


function loadMessages() {
    messagesBlock.innerHTML = "";
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.forEach(msg => {
        const div = document.createElement("div");
        div.className = "message";
        div.textContent = msg;
        messagesBlock.appendChild(div);
    });
}

sendMessage.addEventListener("click", async () => {
    const text = messageInput.value.trim();
    if (!text) return;

    await db.collection("messages").add({
        text,
        time: firebase.firestore.FieldValue.serverTimestamp()
    });

    messageInput.value = "";
});
card.innerHTML = `
  <div class="card-img">
    <img src="${game.img}">
    <div class="card-overlay">Подробнее</div>
  </div>
  <h3>${game.title}</h3>
`;
card.innerHTML = `
  <div class="card-img">
    <img src="${game.img}" alt="${game.title}">
    <div class="card-overlay">
      <span class="icon">🎮</span>
      <span>Подробнее</span>
    </div>
  </div>
  <h3>${game.title}</h3>
`;
