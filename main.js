// Xử lý khi nhấn nút "Mua ngay"
const buyButtons = document.querySelectorAll('.product-card button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Bạn đã chọn mua sản phẩm này! 🎁');
  });
});

// Xử lý khi nhấn nút "Đăng ký"
const subscribeButton = document.querySelector('.subscribe button');
subscribeButton.addEventListener('click', () => {
  const emailInput = document.querySelector('.subscribe input');
  const email = emailInput.value.trim();
  if (email === '' || !email.includes('@')) {
    alert('Vui lòng nhập đúng định dạng email!');
  } else {
    alert(`Cảm ơn bạn đã đăng ký! 🎉`);
    emailInput.value = ''; // Xoá input sau khi đăng ký
  }
});

// Hiệu ứng nhún cho podium khi trang load
window.addEventListener('load', () => {
  const podiumItems = document.querySelectorAll('.podium-item');
  podiumItems.forEach((item, index) => {
    item.style.transform = 'translateY(50px)';
    item.style.opacity = '0';
    setTimeout(() => {
      item.style.transition = 'all 0.8s ease';
      item.style.transform = 'translateY(0)';
      item.style.opacity = '1';
    }, index * 300);
  });
});