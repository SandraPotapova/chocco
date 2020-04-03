$('.team-accord__name').on('click', (e) => {
  const $item = $(e.currentTarget).parents('.team-accord');
  if ($item.hasClass('team-accord--active')) {
    $item.removeClass('team-accord--active');
  } else {
    $item.siblings('.team-accord--active').removeClass('team-accord--active');
    $item.addClass('team-accord--active');
  }
});
