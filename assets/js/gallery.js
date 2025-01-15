document.addEventListener('DOMContentLoaded', () => {
  const imageModal = document.getElementById('imageModal')
  imageModal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget
      const imageUrl = trigger.getAttribute('data-image')
      const title = trigger.getAttribute('data-title')
      const caption = trigger.getAttribute('data-caption')

      const modalImage = imageModal.querySelector('#modalImage')
      const modalCaption = imageModal.querySelector('#modalCaption')

      modalImage.src = imageUrl
      modalImage.alt = title || caption // Sử dụng title làm alt text nếu có
      modalCaption.textContent = caption
  })
})