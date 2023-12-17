document.addEventListener("DOMContentLoaded", ()=>{
    let productContainers = [...document.querySelectorAll(".slider-product-container")];
    let preBtn = [...document.querySelectorAll('.slider-pre-btn')];
    let nxtBtn = [...document.querySelectorAll('.slider-nxt-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    });
});
//Update slider content
//Automatically Insert Grid Product Card
document.addEventListener("DOMContentLoaded",()=>{
    let objectSliderCard = [
        {
           product_link: "./dell_p2419h.html",
           img_link: "../../../../../image/monitors/dell/dell_p2419h.png",
           img_alt: "p2419h",
           product_discount: "- 28%",
           product_title: "Màn hình DELL 24Inch P2419H",
           product_price: "4.999.000đ",
           product_price_int: 4999000,
           product_price_origin: "6.999.000đ",
           product_star: 0,
           product_comment: 0
        },
        {
            product_link: "./dell_s2421hn.html",
            img_link: "../../../../../image/monitors/dell/dell_s2421hn.png",
            img_alt: "s2421hn",
            product_discount: "- 20%",
            product_title: "Màn hình DELL S2421HN",
            product_price: "3.999.000đ",
            product_price_int: 3999000,
            product_price_origin: "4.999.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./dell_s2721ds.html",
            img_link: "../../../../../image/monitors/dell/dell_s2721ds.png",
            img_alt: "s2721ds",
            product_discount: "- 32%",
            product_title: "Màn hình DELL S2721DS",
            product_price: "3.499.000đ",
            product_price_int: 3499000,
            product_price_origin: "5.129.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./dell_s2721hn.html",
            img_link: "../../../../../image/monitors/dell/dell_s2721hn.png",
            img_alt: "s2721hn",
            product_discount: "- 22%",
            product_title: "Màn hình DELL S2721HN",
            product_price: "4.135.000đ",
            product_price_int: 4135000,
            product_price_origin: "5.285.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./dell_s2722qc.html",
            img_link: "../../../../../image/monitors/dell/dell_s2722qc.png",
            img_alt: "s2722qc",
            product_discount: "- 7%",
            product_title: "Màn hình DELL S2722QC",
            product_price: "3.615.000đ",
            product_price_int: 3615000,
            product_price_origin: "3.875.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./dell_s3221qs.html",
            img_link: "../../../../../image/monitors/dell/dell_s3221qs.png",
            img_alt: "s3221qs",
            product_discount: "- 33%",
            product_title: "Màn hình DELL S3221QS",
            product_price: "5.200.000đ",
            product_price_int: 5200000,
            product_price_origin: "7.800.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./dell_s3423dwc.html",
            img_link: "../../../../../image/monitors/dell/dell_s3423dwc.png",
            img_alt: "s3423dwc",
            product_discount: "- 9%",
            product_title: "Màn hình DELL S3423DWC",
            product_price: "3.915.000đ",
            product_price_int: 3915000,
            product_price_origin: "4.265.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./dell_u2723qe.html",
            img_link: "../../../../../image/monitors/dell/dell_u2723qe.png",
            img_alt: "u2723qe",
            product_discount: "- 30%",
            product_title: "Màn hình DELL U2723QE",
            product_price: "2.325.000đ",
            product_price_int: 2325000,
            product_price_origin: "3.315.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./dell_up3218k.html",
            img_link: "../../../../../image/monitors/dell/dell_up3218k.png",
            img_alt: "up3218k",
            product_discount: "- 23%",
            product_title: "Màn hình DELL UP3218K",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        }
    ];
    let curProduct = document.querySelectorAll(".product-name")[0].innerHTML;
    for(let i = 0; i < objectSliderCard.length; i++){
        if(curProduct === objectSliderCard[i].product_title){
            continue;
        }
        document.querySelectorAll(".slider-product-container")[0].innerHTML += 
        `<div class="slider-product-card">\n` +
        `\t<div class="slider-product-img">\n` +
        `\t\t<img class="slider-product-img-get" src=${objectSliderCard[i].img_link} alt=${objectSliderCard[i].img_alt}>\n` +
        `\t</div>\n` +
        `\t<div class="slider-product-short-info">\n` +
        `\t\t<p class="slider-product-brand">${objectSliderCard[i].product_title}</p>\n` +
        `\t\t<div class="slider-product-desc">\n` +
        `\t\t\t<p class="slider-product-price-main">${objectSliderCard[i].product_price}</p>\n` +
        `\t\t\t<p class="slider-product-price-original">${objectSliderCard[i].product_price_origin}</p>\n` +
        `\t\t\t<span class="slider-product-price-discount">${objectSliderCard[i].product_discount}</span>\n` +
        `\t\t\t<span class="slider-product-rating">${objectSliderCard[i].product_star} <i class="fa-solid fa-star"></i></span>\n` +
        `\t\t\t<span class="slider-product-comment">(${objectSliderCard[i].product_comment} đánh giá)</span>\n` +
        `\t\t</div>\n` +
        `\t</div>\n` +
        `\t<a class="slider-product-link" href=${objectSliderCard[i].product_link}>Xem thêm</a>\n` +
        `</div>\n`
        ;
    }
});