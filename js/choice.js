$('.choice__element-label').on('click', (e) => {
  const $item = $(e.currentTarget).parents('.choice__accordeon-item');
  if ($item.hasClass('choice__accordeon-item--active')) {
    $item.removeClass('choice__accordeon-item--active');
  } else {
    $item.siblings('.choice__accordeon-item--active').removeClass('choice__accordeon-item--active');
    $item.addClass('choice__accordeon-item--active');
  }
});

$('.choice__element-close').on('click', (e) => {
  const $item = $(e.currentTarget).parents('.choice__accordeon-item');
  console.log($item.length);
  $item.removeClass('choice__accordeon-item--active');
});