// Using DOM to get specific element
//const btns = document.querySelectorAll('.btn-question');

// add foreach loop
//btns.forEach(function(btn) {
//    btn.addEventListener('click', function(a){
//        let currentBtn = a.currentTarget.parentElement.parentElement;
//        currentBtn.classList.toggle('show-text');
//    })
//});

// Using Selectors inside the element
const answers = document.querySelectorAll('.question');

answers.forEach(function(answer){
    const btn = answer.querySelector('.btn-question');
   // console.log(answer,btn);
    btn.addEventListener('click', function(){
        answers.forEach(function(exBtn){
            //console.log(btn)
            if(btn !== answer){
                exBtn.classList.remove('show-text');
            }
        })
        answer.classList.toggle('show-text');g
    })
});
