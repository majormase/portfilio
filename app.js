$(() => {

  const $openButton = $('.openModal');
  const $modal = $('#modal');
  const $close = $('#close');

  const openModal = () => {
    $modal.css('display', 'block');
  };

  const closeModal = () => {
    $modal.css('display', 'none');
  };

  $openButton.on('click', openModal)
  $close.on('click', closeModal)
  // setTimeout(openModal, 2000);
  

})
