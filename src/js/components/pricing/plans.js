export const usePlans = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const starterPriceText = document.querySelector(
    '[data-price="starter-text"]',
  );
  const popularPriceText = document.querySelector(
    '[data-price="popular-text"]',
  );
  const enterprisePriceText = document.querySelector(
    '[data-price="enterprise-text"]',
  );

  const swithSaleStarter = 120 * 12 * 0.8;
  const swithSalePopular = 1680 * 12 * 0.8;
  const swithSaleEnterprise = 2520 * 12 * 0.8;

  console.log(swithSaleStarter);
  const priceList = {
    starter: {
      default: 120,
      swithSale: swithSaleStarter,
    },
    popular: {
      default: 1680,
      swithSale: swithSalePopular,
    },
    enterprise: {
      default: 2520,
      swithSale: swithSaleEnterprise,
    },
  };

  const setPriceSwithSale = () => {
    starterPrice.textContent = priceList.starter.swithSale;
    popularPrice.textContent = priceList.popular.swithSale;
    enterprisePrice.textContent = priceList.enterprise.swithSale;
    starterPriceText.textContent = '/yr';
    popularPriceText.textContent = '/yr';
    enterprisePriceText.textContent = '/yr';
  };

  switcher.checked = true;

  const setPriceDefault = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
    starterPriceText.textContent = '/mo';
    popularPriceText.textContent = '/mo';
    enterprisePriceText.textContent = '/mo';
  };

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPriceSwithSale();
    } else {
      setPriceDefault();
    }
  });
};
