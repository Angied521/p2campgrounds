/* eslint-disable */
// search onclick depending on what radio button is checked
document.addEventListener("DOMContentLoaded", function () {

  let button = document.querySelector('#searchBtn')
  let parent = document.querySelector('#display')

  const makeGetRequest = function (event) {
    event.preventDefault();
    
    let stateCode = document.querySelector('#state').value
    const radioBtns = document.querySelectorAll('.form-check-input')
    parent.innerHTML = '';

    let searchTarget;
    radioBtns.forEach(a => {
      if (a.checked === true) {
        searchTarget = a.value
      }
    })
    // if park radio button is check search for national parks
    if (searchTarget === 'Park'  ) {
      console.log(stateCode)
      axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P`)
        // axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P`)
        .then(res => {
          console.log(res.data.data)
          const respArr = res.data.data
          respArr.forEach(element => {
            let singleEl = document.createElement('div')
            let elTwo = document.createElement('div')
            singleEl.textContent = `National Park Name: ${element.name}`
            elTwo.textContent = `Details: ${element.description}`

            let container = document.createElement('div')

            container.appendChild(singleEl)
            container.appendChild(elTwo)


            parent.appendChild(container)
          })
        })
    }

    // if campground radio button is clicked search for campground 
    if (searchTarget === 'Campground') {
      console.log('SearchTarget: ', searchTarget)
      //axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P`)
        axios.get(`https://developer.nps.gov/api/v1/campgrounds?stateCode=${stateCode}&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P`)
        .then(res => {
          console.log(res.data.data)
          const respArr = res.data.data
          respArr.forEach(element => {
            let singleEl = document.createElement('div')
            let elTwo = document.createElement('div')
            singleEl.textContent = `Campground Name: ${element.name}`
            elTwo.textContent = `Details: ${element.regulationsoverview}`

            let container = document.createElement('div')

            container.appendChild(singleEl)
            container.appendChild(elTwo)

            let parent = document.querySelector('#display')

            parent.appendChild(container)
          })
        })
    }

    // if event radio button is clicked search for Events 
    if (searchTarget === 'Events' && stateCode.length > 1) {
      // url to the web development site https://developer.nps.gov/api/v1/events?stateCode=oh&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P
     // axios.get(`http://127.0.0.1//developer.nps.gov/api/v1/events?stateCode=${stateCode}&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P`)
      axios.get(`https://developer.nps.gov/api/v1/events?stateCode=${stateCode}&api_key=omVSWmotUaRLimR5vkKrFn1mk3BMf3xge5Xyyb7P`)
        .then(res => {
          console.log(res.data.data)
          const respArr = res.data.data
          respArr.forEach(element => {
            let singleEl = document.createElement('div')
            let elTwo = document.createElement('div')
            singleEl.textContent = `Event Name: ${element.title}`
            elTwo.textContent = `Location: ${element.location}`

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

})



