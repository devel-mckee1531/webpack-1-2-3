const sleep = ms => new Promise(r => setTimeout(r, ms))

window.addEventListener('load', () => {
  document.addEventListener('click',
    () => {
      (async () => {
        await sleep(5000)
        alert('Thank you for waiting')
      })()
    }
  )
})
