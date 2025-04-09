document.addEventListener('DOMContentLoaded', function() {
    // Отключаем прокрутку только для index_stock.html
    if (window.location.pathname.includes('index_stock')) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        
        // Включаем прокрутку только для контента
        const contentWrapper = document.querySelector('.content-wrapper');
        if (contentWrapper) {
            contentWrapper.style.overflowY = 'auto';
            contentWrapper.style.height = 'calc(100vh - 150px)';
        }
    }
  const colorButtons = document.querySelectorAll('.color-btn');
  const rightPanel = document.querySelector('.right-panel');

  colorButtons.forEach(button => {
    button.addEventListener('click', function() {
      const color = this.dataset.color;
      rightPanel.style.backgroundColor = color;
    });
  });
});
