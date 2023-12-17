document.addEventListener("DOMContentLoaded", ()=>{
    //Making a star System
    const stars = document.querySelectorAll(".comment-rating-star i");
    let ratingCheck = 0;
    //Loop the first index for detect the clicking
    stars.forEach((star, index1) => {
        star.addEventListener("click", ()=>{
            //Get the value for rating
            ratingCheck = index1 + 1;
            //Loop the second index for filling the number of indexes
            stars.forEach((star,index2) => {
                index1 >= index2 ? star.classList.add("comment-star-active") : star.classList.remove("comment-star-active");
            });
        });
    });

    //Form Initialization
    let container = document.querySelectorAll(".comment-container")[0];
    let overlay = document.querySelector("#overlay");
    let btnCommentOpen = document.querySelectorAll(".btn-rating")[0];
    let btnCommentClose = document.querySelectorAll(".btn-rating-close")[0];

    //Open the form
    btnCommentOpen.addEventListener("click", ()=>{
        overlay.style.display = "block";
        container.style.display = "block";
        container.style.animationName = "appearEffect";
    });

    //Close the form
    btnCommentClose.addEventListener("click", ()=>{
        overlay.style.display = "none";
        container.style.display = "none";
        container.style.animationName = "appearEffect";
    });

    //Close the form using overlay
    overlay.addEventListener("click", ()=>{
        overlay.style.display = "none";
        container.style.display = "none";
        container.style.animationName = "appearEffect";
    });

    //Update the Rating System
    let ratingObject = {
        ratingView: document.querySelectorAll(".rating-star"),

        rating5StarBar: document.querySelectorAll(".bar-5-star")[0],
        rating4StarBar: document.querySelectorAll(".bar-4-star")[0],
        rating3StarBar: document.querySelectorAll(".bar-3-star")[0],
        rating2StarBar: document.querySelectorAll(".bar-2-star")[0],
        rating1StarBar: document.querySelectorAll(".bar-1-star")[0],

        rating5StarCount: document.querySelectorAll('.count-5-star')[0],
        rating4StarCount: document.querySelectorAll('.count-4-star')[0],
        rating3StarCount: document.querySelectorAll('.count-3-star')[0],
        rating2StarCount: document.querySelectorAll('.count-2-star')[0],
        rating1StarCount: document.querySelectorAll('.count-1-star')[0],

        ratingCalculator: function(){
            let rate_5 = parseInt(this.rating5StarCount.innerHTML);
            let rate_4 = parseInt(this.rating4StarCount.innerHTML);
            let rate_3 = parseInt(this.rating3StarCount.innerHTML);
            let rate_2 = parseInt(this.rating2StarCount.innerHTML);
            let rate_1 = parseInt(this.rating1StarCount.innerHTML);

            let rate_5_draw = 0;
            let rate_4_draw = 0;
            let rate_3_draw = 0;
            let rate_2_draw = 0;
            let rate_1_draw = 0;

            //Calculating
            let rate_total = rate_5 + rate_4 + rate_3 + rate_2 + rate_1;
            let rate_avg = ((5*rate_5 + 4*rate_4 + 3*rate_3 + 2*rate_2 + rate_1)/rate_total).toFixed(1);
            if(isNaN(rate_avg))
                rate_avg = 0;
            this.ratingView[0].innerHTML = `${rate_avg} <i class="fa-regular fa-star"></i>`;
            this.ratingView[1].innerHTML = `${rate_avg}`;

            //Drawing
            rate_5_draw = (rate_5 / rate_total).toFixed(2) * 100;
            rate_4_draw = (rate_4 / rate_total).toFixed(2) * 100;
            rate_3_draw = (rate_3 / rate_total).toFixed(2) * 100;
            rate_2_draw = (rate_2 / rate_total).toFixed(2) * 100;
            rate_1_draw = (rate_1 / rate_total).toFixed(2) * 100;

            this.rating5StarBar.style.width = `${rate_5_draw}%`;
            this.rating4StarBar.style.width = `${rate_4_draw}%`;
            this.rating3StarBar.style.width = `${rate_3_draw}%`;
            this.rating2StarBar.style.width = `${rate_2_draw}%`;
            this.rating1StarBar.style.width = `${rate_1_draw}%`;
        }
    };

    //Function to format the second/minute with trail 0
    function formatTime(number){
        if(number < 10)
            return "0" + number;
        return number;
    }

    //Record the button in comment
    let btnComment = document.querySelectorAll(".btn-submit-comment")[0];
    btnComment.addEventListener("click", ()=>{
        let commentNotify = document.querySelectorAll('.comment-notify')[0];
        let commentBlock = document.querySelectorAll(".user-comment-section")[0];
        let userComment = {
            username: document.querySelectorAll('.comment-username')[0].value,
            comment: document.querySelectorAll(".comment-information textarea")[0].value,
            ratingCheck,
            time: '',
            uploadComment: function() {
                if(this.username.length == 0){
                    return -2;
                }
                else if(this.ratingCheck == 0){
                    return -1;
                }
                else{
                    return 0;
                }
            }
        };
        if(userComment.uploadComment() == -2){
            commentNotify.innerHTML = "Bạn chưa điền họ tên";
        }
        else if(userComment.uploadComment() == -1){
            commentNotify.innerHTML = "Bạn chưa đánh giá";
        }
        else {
            commentNotify.innerHTML = "Bạn đã đánh giá thành công";
            //Set the current time and date for commenting
            let curDate = new Date();
            userComment.time =  `${curDate.getDate()}/${curDate.getMonth() + 1}/${curDate.getFullYear()}` +
                                ` ${formatTime(curDate.getHours())}:${formatTime(curDate.getMinutes())}`;
            
            //Close the Comment Block
            setTimeout(()=>{
                //Clear the comment notify line
                commentNotify.innerHTML = '';
                //Clear the input
                document.querySelectorAll('.comment-username')[0].value = '';
                document.querySelectorAll(".comment-information textarea")[0].value = '';   
                //Clear the star
                stars.forEach((star) =>{
                    star.classList.remove("comment-star-active");
                });
                //Close the comment form
                container.style.display = "none";
                overlay.style.display = "none";
            },
            3000);
            //Write down to the comment section
            let previousInformation = commentBlock.innerHTML;
            let currentInformation = 
            `<div class="user-comment-block">\n` +
                `<div class="user-info">\n` +
                    `<img src="../../../../../image/user/user.png" alt="userimg" class="user-img">\n` +
                    `<p class="user-name">${userComment.username}</p>\n` +
                    `<p class="user-rating">${userComment.ratingCheck} <i class="fa-solid fa-star"></i></p>\n` +
                    `<p class="user-comment-time">${userComment.time}</p>\n` +
                `</div>\n` +
                `<p class="user-comment">\n` +
                    `${userComment.comment}\n` +
                `</p>\n` +
            `</div>\n`
            commentBlock.innerHTML = previousInformation + currentInformation;
            //Update the comment system
            let countComment = document.querySelectorAll(".user-comment-block").length;
            let countCommentUpdate = document.querySelectorAll(".comment-count");
            for(let i = 0; i < countCommentUpdate.length; i++){
                countCommentUpdate[i].innerHTML = countComment;
            }
        }

        //Update the rating star system based on the number of stars in the comment section
        let commentStar = document.querySelectorAll(".user-rating");
        let getValue = [0,0,0,0,0];
        for(let i = 0; i < commentStar.length; i++){
            let commentIndex = parseInt(commentStar[i].innerHTML);
            if(commentIndex == 1){
                getValue[0] += 1;
            }
            else if(commentIndex == 2){
                getValue[1] += 1;
            }
            else if(commentIndex == 3){
                getValue[2] += 1;
            }
            else if(commentIndex == 4){
                getValue[3] += 1;
            }
            else if(commentIndex == 5){
                getValue[4] += 1;
            }
        }
        ratingObject.rating1StarCount.innerHTML = `${getValue[0]} đánh giá`;
        ratingObject.rating2StarCount.innerHTML = `${getValue[1]} đánh giá`;
        ratingObject.rating3StarCount.innerHTML = `${getValue[2]} đánh giá`;
        ratingObject.rating4StarCount.innerHTML = `${getValue[3]} đánh giá`;
        ratingObject.rating5StarCount.innerHTML = `${getValue[4]} đánh giá`;

        //Update the system
        ratingObject.ratingCalculator();
    });
});