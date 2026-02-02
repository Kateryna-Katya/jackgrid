document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.5 19.6875C22.9334 19.6877 23.35 19.8546 23.6637 20.1537C23.9773 20.4528 24.1639 20.861 24.1847 21.2939C24.2055 21.7268 24.059 22.1511 23.7756 22.4789C23.4921 22.8066 23.0933 23.0128 22.662 23.0546L22.5 23.0625H4.5C4.06663 23.0623 3.64996 22.8954 3.33632 22.5963C3.02267 22.2972 2.83611 21.889 2.81529 21.4561C2.79446 21.0232 2.94097 20.5989 3.22445 20.2711C3.50793 19.9434 3.90665 19.7372 4.338 19.6954L4.5 19.6875H22.5ZM22.5 11.8125C22.9476 11.8125 23.3768 11.9903 23.6932 12.3068C24.0097 12.6232 24.1875 13.0524 24.1875 13.5C24.1875 13.9476 24.0097 14.3768 23.6932 14.6932C23.3768 15.0097 22.9476 15.1875 22.5 15.1875H4.5C4.05245 15.1875 3.62322 15.0097 3.30676 14.6932C2.99029 14.3768 2.8125 13.9476 2.8125 13.5C2.8125 13.0524 2.99029 12.6232 3.30676 12.3068C3.62322 11.9903 4.05245 11.8125 4.5 11.8125H22.5ZM22.5 3.9375C22.9476 3.9375 23.3768 4.11529 23.6932 4.43176C24.0097 4.74822 24.1875 5.17745 24.1875 5.625C24.1875 6.07255 24.0097 6.50178 23.6932 6.81824C23.3768 7.13471 22.9476 7.3125 22.5 7.3125H4.5C4.05245 7.3125 3.62322 7.13471 3.30676 6.81824C2.99029 6.50178 2.8125 6.07255 2.8125 5.625C2.8125 5.17745 2.99029 4.74822 3.30676 4.43176C3.62322 4.11529 4.05245 3.9375 4.5 3.9375H22.5Z" fill="url(#paint0_linear_4_271)" />
  <defs>
    <linearGradient id="paint0_linear_4_271" x1="13.5" y1="19.6939" x2="13.5" y2="9.8054" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF841A" />
      <stop offset="1" stop-color="#FFFD38" />
    </linearGradient>
  </defs>
</svg>
    `;
  
    const crossIcon = `
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.3073 5.19271C18.6139 4.88642 19.0266 4.70983 19.4598 4.69952C19.8931 4.68921 20.3137 4.84597 20.6345 5.13733C20.9553 5.42869 21.1517 5.8323 21.183 6.26454C21.2144 6.69677 21.0782 7.12449 20.8028 7.45907L20.6938 7.57919L7.96586 20.3071C7.65927 20.6134 7.24659 20.79 6.81335 20.8003C6.3801 20.8106 5.95949 20.6538 5.63868 20.3625C5.31787 20.0711 5.12145 19.6675 5.09012 19.2353C5.05879 18.803 5.19495 18.3753 5.47039 18.0407L5.57937 17.9206L18.3073 5.19271Z" fill="url(#paint0_linear_4_275)" />
  <path d="M20.3073 18.0339C20.6136 18.3404 20.7902 18.7531 20.8005 19.1864C20.8108 19.6196 20.654 20.0402 20.3627 20.361C20.0713 20.6818 19.6677 20.8783 19.2355 20.9096C18.8032 20.9409 18.3755 20.8048 18.0409 20.5293L17.9208 20.4203L5.19289 7.69242C4.8866 7.38583 4.71001 6.97316 4.6997 6.53991C4.68939 6.10666 4.84616 5.68606 5.13751 5.36525C5.42887 5.04444 5.83248 4.84802 6.26472 4.81668C6.69695 4.78535 7.12467 4.92151 7.45925 5.19695L7.57937 5.30593L20.3073 18.0339Z" fill="url(#paint1_linear_4_275)" />
  <defs>
    <linearGradient id="paint0_linear_4_275" x1="13.9095" y1="13.5228" x2="12.6756" y2="12.2889" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF841A" />
      <stop offset="1" stop-color="#FFFD38" />
    </linearGradient>
    <linearGradient id="paint1_linear_4_275" x1="11.9772" y1="13.636" x2="13.2111" y2="12.4021" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF841A" />
      <stop offset="1" stop-color="#FFFD38" />
    </linearGradient>
  </defs>
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });