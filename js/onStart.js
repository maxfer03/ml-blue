let blue = localStorage.getItem('blue_usd_val') || 1;

fetch('https://api.bluelytics.com.ar/v2/latest')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
    blue = data.blue.value_avg
    localStorage.setItem('blue_usd_val', blue);

    // Injecting blue current price on top-left of the site
    let activeMsgContainer = document.createElement('div')

    activeMsgContainer.classList.add('ml-dolar-container')
    
    document.body.appendChild(activeMsgContainer)
    
    let activeMsg = document.createElement('a')
    activeMsg.href="https://dolarhoy.com/"
    activeMsg.target="_blank"
    activeMsg.classList.add('ml-dolar')
    activeMsg.textContent = `AR$ ${blue}`

    activeMsgContainer.appendChild(activeMsg)
    
  })
  .catch(error => {
    console.error('Fetch Error:', error);
  });


