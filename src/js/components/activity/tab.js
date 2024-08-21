export const useTab = () => {
  const elTabBtn = document.querySelectorAll('.hero__tab-btn');

  elTabBtn.forEach((el) =>
    el.addEventListener('click', (e) => {
      const tabBtn = e.target;
      const tabBtnActive = document.querySelector('.hero__tab-btn--active');
      const tabId = e.target.getAttribute('data-target-id');
      const tabContent = document.querySelector(`[data-id="${tabId}"]`);
      const tabContentActive = document.querySelector('.hero__tab-pane-show');

      if (!tabBtn.classList.contains('hero__tab-btn--active')) {
        tabBtn.classList.add('hero__tab-btn--active');
        tabBtnActive.classList.remove('hero__tab-btn--active');
        tabContent.classList.add('hero__tab-pane-show');
        tabContentActive.classList.remove('hero__tab-pane-show');
      }
    }),
  );
};
