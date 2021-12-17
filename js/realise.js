let btn = document.querySelector('.btn');
var question = document.querySelectorAll('.item');
var finish = document.querySelector('.btn_finish');
var index = 0;

function next() {

    for (let i = 0; i < question.length; i++) {
        question[index].style.display = 'none';
    }

    if (index > question.length) {
        index = 0;
    }
    index++;
}

btn.addEventListener('click', function() {

    question[index].style.display = 'block';

})