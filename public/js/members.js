/* eslint-disable */
document.addEventListener("DOMContentLoaded", function(){

  let button = document.querySelector('#searchBtn')

  const makeGetRequest = function(){
    let stateCode = document.querySelector('#state').value
    const radioBtns = document.querySelectorAll('.form-check-input')
    let searchTarget;
    const getTarget = radioBtns.forEach( a => {
      if(a.checked === true){ 
         searchTarget = a.value
      }
    })
    if(searchTarget === 'Park'){
      axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P`)
      .then( res => {
        console.log(res.data.data)
        const respArr = res.data.data
        respArr.forEach( element => {
          let singleEl = document.createElement('div')
          let elTwo = document.createElement('div')
          singleEl.textContent = `name:${element.name}`
          elTwo.textContent = `weatherinfo:${element.weatherInfo}`

          let container = document.createElement('div')

          container.appendChild(singleEl)
          container.appendChild(elTwo)

          let parent = document.querySelector('#display')

          parent.appendChild(container)
        })
      })
    }
  }

  button.addEventListener('click', makeGetRequest)

});
