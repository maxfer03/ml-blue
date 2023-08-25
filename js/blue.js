let blueVal = localStorage.getItem('blue_usd_val')

const calculateBlue = (container, ars) => {
  if(!container.querySelector('.blue-price') && !container.textContent.includes('U$S')) {
    let bluePrice = document.createElement('span')
    bluePrice.classList.add('blue-price')
    bluePrice.textContent = `U$S ${(ars / blueVal).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`
    container.appendChild(bluePrice)
  }
}

const injectBlue = () => {

  // Catalogue containers
  const priceContainerList = document.querySelectorAll('.ui-card-ml-price')
  const polyPriceContainerList = document.querySelectorAll('.poly-price')
  const searchPriceContainerList = document.querySelectorAll('.ui-search-item__group--price')
  const dynamicCarouselPriceContainerList = document.querySelectorAll('.dynamic-carousel__price-block')
  
  // Single Product containers
  const singleProdContainer = document.querySelector('.ui-pdp-price__main-container')
  const recommendationsPriceContainerList = document.querySelectorAll('.ui-recommendations-card__price-block')  
  const mshopsPriceContainerList = document.querySelectorAll('.mshops-card-variation-original__item-price')  
  
    
  // Catalogue blue injections 
  priceContainerList.length > 0 && priceContainerList.forEach((container) => {
    const pesosPrice = container.querySelector('.andes-money-amount__fraction').textContent.replaceAll('.', '')
    calculateBlue(container, pesosPrice)
  })  

  polyPriceContainerList.length > 0 && polyPriceContainerList.forEach((container) => {
    const pesosPrice = container.querySelector('.poly-price-current').querySelector('.andes-money-amount__fraction').textContent.replaceAll('.', '')
    calculateBlue(container, pesosPrice)
  })  

  searchPriceContainerList.length > 0 && searchPriceContainerList.forEach((container) => {
    const pesosPrice = container.querySelector('.andes-money-amount__fraction').textContent.replaceAll('.', '')
    calculateBlue(container, pesosPrice)
  }) 

  dynamicCarouselPriceContainerList.length > 0 && dynamicCarouselPriceContainerList.forEach((container) => {
    const pesosPrice = container.querySelector('.dynamic-carousel__price').textContent.replaceAll('.', '').replaceAll('$', '')
    calculateBlue(container, pesosPrice)
  }) 

  // Single product blue injections
  if (singleProdContainer) { 
    const singleProdPesosPrice = singleProdContainer.querySelector(".ui-pdp-price__second-line").querySelector('.andes-money-amount__fraction').textContent.replaceAll('.', '')
    calculateBlue(singleProdContainer, singleProdPesosPrice)
  }

  recommendationsPriceContainerList.length > 0 && recommendationsPriceContainerList.forEach((container) => {
    const pesosPrice = container.querySelector('.andes-money-amount__fraction').textContent.replaceAll('.', '')
    calculateBlue(container, pesosPrice)
  })  

  mshopsPriceContainerList.length > 0 && mshopsPriceContainerList.forEach((container) => {
    const pesosPrice = container.querySelector('.andes-money-amount__fraction').textContent.replaceAll('.', '')
    calculateBlue(container, pesosPrice)
  }) 

}

// Inject blue price each time the body updates
const targetNode = document.body;
const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
        injectBlue()
    }
  }
});

const observerConfig = {
  childList: true,
  subtree: true
};

window.onload = function() {  
  observer.observe(targetNode, observerConfig);
};








