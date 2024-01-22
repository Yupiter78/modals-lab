import content from "./api/book.api.js";

const customBox = document.querySelector("#custom_box");
const modal = document.querySelector('.custom_modal');
const modalContent = document.querySelector('.custom_modal-content');
const closeBtn = document.querySelector('.close');

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.handleOpenModal = function (src) {
    modalContent.src = src;
    modal.style.display = "block";
}


if (Array.isArray(content)) {
    const galleryItemTemplates = content.map((item) => {
        const titleContent = item.title ? `<p class="card-text">${item.title}</p>` : "";
        return `<div class="col">
      <div class="card shadow-sm" style="width: 80%;">
        <img src=${item.img} width="100%" height="100%" alt="image" class="modal-trigger"/>
        <div class="card-body">${titleContent}
          <div class="d-flex justify-content-center align-items-center">
              <button type="button" class="btn btn-sm btn-primary w-75" onclick="handleOpenModal('${item.img}')">Просмотр</button>
          </div>
        </div>
      </div>
    </div>`;
    });

    customBox.insertAdjacentHTML("beforeend", galleryItemTemplates.join(""));
}

