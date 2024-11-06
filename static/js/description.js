document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".category-description-container");
    const description = document.getElementById("categoryDescription");
    const toggleBtn = document.getElementById("toggleDescriptionBtn");
    const overlay = document.createElement('div');
    overlay.classList.add('read-more-overlay');
    
    function checkOverflow() {
        const isOverflowing = description.scrollHeight > description.offsetHeight;
        toggleBtn.style.display = isOverflowing ? "inline-block" : "none";
        overlay.style.display = isOverflowing ? "block" : "none";
        
        if (isOverflowing && !container.contains(overlay)) {
            container.insertBefore(overlay, container.lastElementChild);
        }
    }

    toggleBtn.addEventListener("click", function() {
        description.classList.toggle('expanded');
        toggleBtn.textContent = description.classList.contains('expanded') ? "Thu gọn" : "Xem thêm";
        overlay.style.display = description.classList.contains('expanded') ? "none" : "block";
    });

    // Kiểm tra ban đầu và mỗi khi cửa sổ thay đổi kích thước
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
});
