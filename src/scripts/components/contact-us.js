import Range from './range'

const pgItems = document.querySelectorAll('.o-steps__pagination-item')


if (pgItems.length) {
  const steps = document.querySelectorAll('.o-step')
const stepP = document.querySelector('.o-steps')
const pg = document.querySelector('.o-steps__pagination')
  pgItems.forEach((pgItem, i) => {
    pgItem.addEventListener('click', () => {
      steps[i].scrollIntoView()
    })
  })

  window.addEventListener('scroll', (e) => {
    steps.forEach((step, i) => {
      if (window.scrollY > step.offsetTop - 50) {
        pgItems.forEach(item => item.classList.remove(
          'is-active'))
        pgItems[i].classList.add('is-active')
      }
    })

    if (window.scrollY > stepP.offsetTop) {
      pg.classList.add('is-active')
    } else {
      pg.classList.remove('is-active')
    }
  })



  const helps = document.querySelectorAll('.o-step__help')

  helps.forEach(help => {
    help.addEventListener('click', () => {
      steps[1].scrollIntoView()
      helps.forEach(item => {
        item.classList.remove('is-active')
      })
      help.classList.add('is-active')
    })
  })


  const times = document.querySelectorAll('.o-step__time')

  times.forEach(time => {
    time.addEventListener('click', () => {
      steps[4].scrollIntoView()
      times.forEach(item => {
        item.classList.remove('is-active')
      })
      time.classList.add('is-active')
    })
  })


  const types = document.querySelectorAll('.o-step__type')

  types.forEach(type => {
    type.addEventListener('click', () => {
      types.forEach(item => {
        item.classList.remove('is-active')
      })
      type.classList.add('is-active')
    })
  })

  const budgetElm = document.querySelector('.c-range--budget')

  const budgetValueElm = budgetElm.querySelector('.c-range__value')
  const budgetRange = new Range('.c-range--budget', {
    range: {
      'min': [5, 15],
      'max': 100
    }
  }, () => {
    if (budgetRange.activeValue != undefined) {
      budgetValueElm.innerHTML =
        `$${budgetRange.activeValue[0]}k - ${budgetRange.activeValue[1]}k`
    }
  })


  const timeElm = document.querySelector('.c-range--time')
  const timeValueElm = timeElm.querySelector('.c-range__value')
  const timeRange = new Range('.c-range--time', {
    start: [5, 15],
    range: {
      'min': 1,
      'max': 50
    }
  }, () => {
    if (timeRange.activeValue != undefined) {
      timeValueElm.innerHTML = `${timeRange.activeValue} weeks`
    }
  })

}
