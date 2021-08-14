// в _createModal нижнее подчеркивание - означает системная функция/метод, котор не должна быть вызвана отдельно, приватная
function _createModal(options) {
  const DEFAULT_WIDTH = "600px";
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="modal-overlay">
        <div class="modal-window" style="width: ${
          options.width || DEFAULT_WIDTH
        }">
          <div class="modal-header">
            <span class="modal-title">${options.title || "Window"}</span>
            ${
              options.closable ? `<span class="modal-close">&times;</span>` : ""
            }
          </div>
          <div class="modal-body">
          ${options.content || ""}
          </div>
          <div class="modal-footer">
            <button>Ok</button>
            <button>Cansel</button>
          </div>
        </div>
      </div>`
  );
  document.body.appendChild(modal);
  return modal;
}

// у $ присутствует функция modal, которая явл функцией
$.modal = function (options) {
  // options - объект с опциями параметры, которые будут по итогу настраивать модальное окно
  const ANIMATION_SPEED = 200;
  // $modal- приватная переменная

  const $modal = _createModal(options);
  let closing = false;

  return {
    // эти методы позволяют взаимодействовать с инстансом
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
// получу по итогу, когда вызову данный плагин - инстанс этого модального окна

/*
 * лучше не через класс, а так - пользуюсь замыканиями -> доступны приватные переменные
 * анимация делается через css
 * ---------------------
 * animate.css
 */
