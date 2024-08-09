export const usePlans = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const priceList = {
    starter: {
      default: 120,
      swithSale: 100,
    },
    popular: {
      default: 1680,
      swithSale: 1400,
    },
    enterprise: {
      default: 2520,
      swithSale: 2100,
    },
  };

  const setPriceSwithSale = () => {
    starterPrice.textContent = priceList.starter.swithSale;
    popularPrice.textContent = priceList.popular.swithSale;
    enterprisePrice.textContent = priceList.enterprise.swithSale;
  };

  switcher.checked = true;

  const setPriceDefault = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
  };

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPriceSwithSale();
    } else {
      setPriceDefault();
    }
  });
};
