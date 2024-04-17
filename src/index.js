document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    creatingElements(e.target.description.value)
    form.reset()

  })


});
function creatingElements(toDo) {
  console.log(toDo)
  const li = document.createElement('li')
  li.textContent = `${toDo} `
  const ul = document.getElementById('tasks')
  ul.appendChild(li)
  const btn = document.createElement('button')
  btn.textContent = 'x'
  li.appendChild(btn)
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
    //p.parentNode.remove()
  })
}