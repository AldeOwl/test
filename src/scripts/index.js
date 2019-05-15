(function () {

    // function preloader () {
    //     window.onload = function () {
    //         let preloader = document.getElementById('preloader');
    //         preloader.style.display = 'none';
    //     };
    // }
    function scrollToItem (){
        let polis = document.querySelector('#polis');
        let polisBtn = document.querySelector('#smallBannerBtn');
        let polisSection = document.querySelector('.polis');
        
        polis.addEventListener('click', () => {
            polisSection.scrollIntoView({behavior: 'smooth'});
        });
        polisBtn.addEventListener('click', () => {
            polisSection.scrollIntoView({behavior: 'smooth'});
        });

        let partners = document.querySelector('#partners');
        let partnersSection = document.querySelector('.partners');
        
        partners.addEventListener('click', () => {
            partnersSection.scrollIntoView({behavior: 'smooth'});
        });

        let whyUs = document.querySelector('#whyUs');
        let whyUsSection = document.querySelector('.why-us');
        
        whyUs.addEventListener('click', () => {
            whyUsSection.scrollIntoView({behavior: "smooth"});
        });

        let reviews = document.querySelector('#reviews');
        let reviewsSection = document.querySelector('.reviews');
        
        reviews.addEventListener('click', () => {
            reviewsSection.scrollIntoView({behavior: 'smooth'});
        });

        let questions = document.querySelector('#questions');
        let questionsSection = document.querySelector('.questions');
        
        questions.addEventListener('click', () => {
            questionsSection.scrollIntoView({behavior: 'smooth'});
        });
    }
    
    const reviewsList = document.querySelectorAll('.reviews__item');
    const nextBtn = document.getElementById('nextReview');
    const prevBtn = document.getElementById('prevReview');
    let currentReview = 0;
    function nextReview (){
        reviewsList[currentReview].className = ('reviews__item reviews__item-hide');
        currentReview = (currentReview+1)%reviewsList.length;
        reviewsList[currentReview].className = ('reviews__item reviews__item-show');
        
    }
    function prevReview (){
        reviewsList[currentReview].className = ('reviews__item reviews__item-hide1');
        currentReview = currentReview === 0 ? reviewsList.length - 1 : currentReview-1;
        reviewsList[currentReview].className = ('reviews__item reviews__item-show1');
        
    }

    const buttonList = document.querySelectorAll('.questions__item-button');
    const answerList = document.querySelectorAll('.questions__item-text');
    let currentId = -1;

    function openAnswer (e) {
        currentId = e.target.getAttribute('data-id');
        answerList[currentId].classList.toggle('questions__item-text-open');
        buttonList[currentId].classList.toggle('questions__item-button-open');
    };

    buttonList.forEach(item => {
        item.addEventListener('click', (e) => openAnswer(e));
    });
    
    prevBtn.addEventListener('click', () => prevReview());
    nextBtn.addEventListener('click', () => nextReview());

    // preloader();
    scrollToItem();
})();


