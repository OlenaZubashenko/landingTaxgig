let plusAll = document.getElementById('all-pages-more-plus');
let minusAll = document.getElementById('all-pages-minus');
let allList = document.getElementById('all-list');

let plusInfo = document.getElementById('info-more-plus');
let minusInfo = document.getElementById('info-minus');
let infoList = document.getElementById('info-list');

let plusSocial = document.getElementById('social-more-plus');
let minusSocial = document.getElementById('social-minus');
let socialList = document.getElementById('social-list');

plusAll.onclick = function() {
    allList.style.display = 'block',
    plusAll.style.display = 'none',
    minusAll.style.display = 'flex';

    minusAll.onclick = function() {
        allList.style.display = 'none',
        plusAll.style.display = 'block',
        minusAll.style.display = 'none';
    }
}



plusInfo.onclick = function() {
    infoList.style.display = 'block',
    plusInfo.style.display = 'none',
    minusInfo.style.display = 'flex';
    
    minusInfo.onclick = function() {
        infoList.style.display = 'none',
        plusInfo.style.display = 'block',
        minusInfo.style.display = 'none';
    }
}


plusSocial.onclick = function() {
    socialList.style.display = 'block',
    plusSocial.style.display = 'none',
    minusSocial.style.display = 'flex';

    minusSocial.onclick = function() {
        socialList.style.display = 'none',
        plusSocial.style.display = 'block',
        minusSocial.style.display = 'none';
    }
}


