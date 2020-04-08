//const openButton = document.querySelector(".order__form-button");
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
};



/*const openButton = document.querySelector(".order__form-button");
const orderForm = document.querySelector("#order-form");

openButton.addEventListener("click", function(event) {
  event.preventDefault(); 
  
    if (orderForm.checkValidity()) {
  
    const data = new FormData();
    data.append("name", orderForm.elements.name.value);
    data.append("phone", orderForm.elements.phone.value);
    data.append("comment", orderForm.elements.comment.value);
    data.append("to", "sandra_potapova@mail.ru");
  
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail", true);
    xhr.send(data);

    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        overlay.open();
        overlay.setContent("сообщение отправлено");
        form.reset();
      } else {
        overlay.open();
        overlay.setContent("сообщение  не отправлено");
      }
    })
  };
});*/