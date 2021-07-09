//identify the ele on amazon to start the event
//keep the carts og functionality
    //add additional func of converting units to dogecoin
        // Update innerHtml property

    //will we be using a dogecoin api?
    //how do we want to grab the data? promises/async/xhr?


    //aesthetics
    //stretch ft of manipulating to have the dog face take over the entire body
    

console.log('hey x2')

let dogePrice = 0.200158

console.log(dogePrice)
const cartButton = document.getElementById('nav-cart')
function usdToDoge(usd) {
    return usd * dogePrice
}

cartButton.addEventListener('click', ()=>{
    var request = new XMLHttpRequest();
    request.open('GET', '', true);
    
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        var data = JSON.parse(this.response);
        dogePrice = data.rates.DOGE
        const priceSpan = document.querySelector("#sc-subtotal-amount-activecart")
        console.log("Price", priceSpan)
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
})



/*<div id="nav-tools" class="layoutToolbarPadding">
   
  </div>

          </div> */
