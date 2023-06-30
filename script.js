


const quests = document.querySelectorAll(".quest");

quests.forEach((quest) => {
  const icon = quest.querySelector(".icon");
  const answer = quest.querySelector(".answer");

  quest.addEventListener('click',() =>{
    if (icon.classList.contains('active')) {
        icon.classList.remove('active');
        answer.style.maxHeight=null;
    }else{
        icon.classList.add('active');
        answer.style.maxHeight= answer.scrollHeight +'px';
    }
  })
 
});
