let tooltipElements = Array.from(document.getElementsByClassName('has-tooltip'));
tooltipElements.forEach(element => { 
  element.insertAdjacentHTML("afterEnd","<div class='tooltip'>"+element.title+"</div>")
});
tooltipElements.forEach(element => element.onclick = function() {
  element.nextElementSibling.classList.toggle('tooltip_active');
  element.nextElementSibling.style.left = element.getBoundingClientRect().left + "px"
  element.nextElementSibling.style.top = (element.getBoundingClientRect().top + element.getBoundingClientRect().height) + "px"
  return false;
})
