$('body ul').on('click', 'button', () => {
  $('this').closest('li').fadeOut(2000, () => {
    $('this').remove();
  });
});