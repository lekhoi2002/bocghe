document.addEventListener('DOMContentLoaded', function () {
  var imageModal = document.getElementById('imageModal');
  imageModal.addEventListener('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      var imageUrl = trigger.getAttribute('data-image');
      var title = trigger.getAttribute('data-title');
      var caption = trigger.getAttribute('data-caption');
      
      var modalImage = imageModal.querySelector('#modalImage');
      var modalCaption = imageModal.querySelector('#modalCaption');
      
      modalImage.src = imageUrl;
      modalImage.alt = caption;
      modalCaption.textContent = caption;
  });
});
