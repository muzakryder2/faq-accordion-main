const faqItems = [
  {
    id: 1,
    question: 'What is Frontend Mentor, and how will it help me?',
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
]

const faqContainer = document.getElementById('faq-items-container')

faqItems.map(faq => {
  const articleEl = document.createElement('article')

  const faqHeaderEl = document.createElement('div')
  faqHeaderEl.classList.add('faq-item-header')

  const titleEl = document.createElement('h2')
  titleEl.classList.add('faq-title')
  titleEl.textContent = faq.question

  const faqIconEl = document.createElement('img')
  faqHeaderEl.addEventListener('click', expandFaq)
  faqIconEl.src = '../assets/images/icon-plus.svg'
  faqIconEl.alt = 'expand icon'

  faqHeaderEl.appendChild(titleEl)
  faqHeaderEl.appendChild(faqIconEl)

  const answerEl = document.createElement('p')
  answerEl.classList.add('hidden')
  answerEl.textContent = faq.answer

  articleEl.appendChild(faqHeaderEl)
  articleEl.appendChild(answerEl)
  faqContainer.appendChild(articleEl)
})

function expandFaq(e) {
const answers = Array.from(document.querySelectorAll('p'))
const faqIcons = Array.from(document.querySelectorAll('.faq-item-header img'))

answers.map(item => {
  item.classList.add('hidden')
})

faqIcons.map(icon => {
  icon.src = '../assets/images/icon-plus.svg'
})

const targetAnswer = e.currentTarget
targetAnswer.nextElementSibling.classList.remove('hidden')
targetAnswer.querySelector('img').src = '../assets/images/icon-minus.svg'
}