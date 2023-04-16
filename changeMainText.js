content = document.getElementById('changing-content');
checkbox = document.getElementById('checkbox')
var change = setInterval (changeContent, 2000);

function changeContent() {
    if (content.innerHTML == 'Search') {
        content.innerHTML = 'Choose';
        content.style.animation = 'TextAnimationTwo 1s ease 1'
    }
    else if (content.innerHTML == 'Choose') {
        content.innerHTML = 'Store';
        content.style.animation = 'TextAnimationOne 1s ease 1'
    }
    else if (content.innerHTML == 'Store') {
        content.innerHTML = 'Edit';
        content.style.animation = 'TextAnimationTwo 1s ease 1'
    }
    else if (content.innerHTML == 'Edit') {
        content.innerHTML = 'Share';
        content.style.animation = 'TextAnimationOne 1s ease 1'
    }
    else if (content.innerHTML == 'Share') {
        clearInterval(change);
    }
}