const reviewsList = document.querySelectorAll(".reviews__list li");
const avatarsList = document.querySelectorAll(".reviews__avatar-list li");
const reviewsListArr = Array.from(reviewsList);
const avatarsListArr = Array.from(avatarsList);
const initialActive = document.querySelector(".reviews__avatar-item--active");
let lastActiveIndex = avatarsListArr.findIndex(itm => itm === initialActive);

avatarsListArr.forEach(item => {
  item.addEventListener("click", (e) => {
    if (lastActiveIndex !== null){
      reviewsList[lastActiveIndex].classList.remove("reviews__item--active");
      avatarsList[lastActiveIndex].classList.remove("reviews__avatar-item--active");
    }

    const item = e.currentTarget;
    item.classList.add("reviews__avatar-item--active");
    const index = avatarsListArr.findIndex(itm => itm === item);
    reviewsListArr[index].classList.add("reviews__item--active");
    lastActiveIndex = index;
  })
});