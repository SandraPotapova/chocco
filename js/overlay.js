const openButton = document.querySelector(".order__form-button");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

openButton.addEventListener("click", function(e) {
  e.preventDefault();
  overlay.open();
  overlay.setContent("Сообщение отправлено");
});

function createOverlay(template) {
  const fragment = document.createElement('div');

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".overlay__content");
  const closeElement = fragment.querySelector(".overlay__close");
  
  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });
  closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(content) {
      contentElement.innerHTML = content;
    }
  };
}