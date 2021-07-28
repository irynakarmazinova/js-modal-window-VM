// _приватная системная функция
function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Modal title</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div class="modal-footer">
            <button>OK</button>
            <button>CANSEL</button>
          </div>
        </div>
      </div>`
  );
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  // options - объект с опциями параметры, которые будут по итогу настраивать модальное окно

  const ANIMATION_SPEED = 200;
  // $modal- приватная переменная
  const $modal = _createModal(options);
  let closing = false;

  return {
    open() {
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");

      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() {},
  };
};

/*
 * реализовать объект опшинс title: string
 * closable: boolean
 * content: string
 * width: string ("400px")
 * destroy(): void - удаляет все слушатели, удалить модалку и что бы не осталось элементов
 * окно должно закрывать при нажатии на крести и оверлей
 * ---------------------
 * setContent(html: string): void | PUBLIC
 * onClose(): void
 * onOpen(): void
 * beforeClose(): boolean
 * ---------------------
 * animate.css
 */
