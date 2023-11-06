async function getContent() {
    let url = "https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json"

    let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if (response.ok) {
        let json = await response.json();
        return json;
    } else {
        alert("Ошибка HTTP: " + response.status);
        return "error";
    }
}

let blogCardsGrid = document.querySelector(".blog__cards__grid");
function createCard(el) {
    let blogCard = document.createElement("a");
    blogCard.href = "https://mihailgok.ru"
    blogCard.target = "_blank"
    blogCard.classList.add("blog__card");

    let blogCardImg = document.createElement("img");

    blogCardImg.src = el.imgUrl ? el.imgUrl.replace("hhttps", "https") : "https://isradar.com/upload/no-image.jpg";
    blogCardImg.classList.add("blog__card__img");

    let blogCardText = document.createElement("div");
    blogCardText.classList.add("blog__card__text");

    let blogCardHeader = document.createElement("h3");
    blogCardHeader.classList.add("blog__card__header");
    blogCardHeader.textContent = el.name;

    let blogCardDate = document.createElement("date");
    blogCardDate.classList.add("blog__card__date");
    blogCardDate.textContent = el.date

    let blogCardDesc = document.createElement("p");
    blogCardDesc.classList.add("blog__card__desc");
    blogCardDesc.textContent = el.text;

    let blogCardBottom = document.createElement("div");
    blogCardBottom.classList.add("blog__card__text__bottom");

    blogCardBottom.innerHTML = `
       <p class="blog__card__author">${el.author}</p>
       <button class="blog__card__like">
          <svg class="blog__card__like__svg">
             <use xlink:href="image/sprite.svg#like"></use>
          </svg>
          <svg class="blog__card__like__svg">
             <use xlink:href="image/sprite.svg#like-active"></use>
          </svg>
       </button>
    `;

    blogCardText.append(blogCardHeader);
    blogCardText.append(blogCardDate);
    blogCardText.append(blogCardDesc);
    blogCardText.append(blogCardBottom);

    blogCard.append(blogCardImg);
    blogCard.append(blogCardText);

    blogCardsGrid.append(blogCard);
}

let content = getContent();

content.then(
    result => {
        if (result !== "error") {
            for (let el of result) {
                createCard(el);
            }
        }
    }
)