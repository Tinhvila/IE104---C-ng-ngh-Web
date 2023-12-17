//Sort Selection In Grid Product Sort
document.addEventListener("DOMContentLoaded", ()=>{
    let gridSortOption = document.getElementsByClassName('grid-product-sort-block');
    for(let i = 0; i < gridSortOption.length; i++){
        gridSortOption[i].addEventListener("click", ()=>{
            for(let j = 0; j < gridSortOption.length; j++){
                gridSortOption[j].classList.remove("grid-product-sort-active");
            }
            gridSortOption[i].classList.add("grid-product-sort-active");
        });
    }
});

//Automatically Insert Grid Product Card (Monitor)
document.addEventListener("DOMContentLoaded",()=>{
    let objectGridCard = [
        {
            product_link: "./product_item/monitor/dell/dell_p2419h.html",
            img_link: "../../image/monitors/dell/dell_p2419h.png",
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
            product_link: "./product_item/monitor/dell/dell_s2421hn.html",
            img_link: "../../image/monitors/dell/dell_s2421hn.png",
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
            product_link: "./product_item/monitor/dell/dell_s2721ds.html",
            img_link: "../../image/monitors/dell/dell_s2721ds.png",
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
            product_link: "./product_item/monitor/dell/dell_s2721hn.html",
            img_link: "../../image/monitors/dell/dell_s2721hn.png",
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
            product_link: "./product_item/monitor/dell/dell_s2722qc.html",
            img_link: "../../image/monitors/dell/dell_s2722qc.png",
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
            product_link: "./product_item/monitor/dell/dell_s3221qs.html",
            img_link: "../../image/monitors/dell/dell_s3221qs.png",
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
            product_link: "./product_item/monitor/dell/dell_s3423dwc.html",
            img_link: "../../image/monitors/dell/dell_s3423dwc.png",
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
            product_link: "./product_item/monitor/dell/dell_u2723qe.html",
            img_link: "../../image/monitors/dell/dell_u2723qe.png",
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
            product_link: "./product_item/monitor/dell/dell_up3218k.html",
            img_link: "../../image/monitors/dell/dell_up3218k.png",
            img_alt: "up3218k",
            product_discount: "- 23%",
            product_title: "Màn hình DELL UP3218K",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/lg/lg_22mp410_b.html",
            img_link: "../../image/monitors/lg/lg_22mp410_b.jpg",
            img_alt: "lg_22mp410_b",
            product_discount: "- 23%",
            product_title: "Màn hình LG 22MP410B",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/lg/lg_24gn600_b.html",
            img_link: "../../image/monitors/lg/lg_24gn600_b.webp",
            img_alt: "lg_24gn600_b",
            product_discount: "- 23%",
            product_title: "Màn hình LG 24GN600B",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/lg/lg_27gr75q_b.html",
            img_link: "../../image/monitors/lg/lg_27gr75q_b.jpg",
            img_alt: "lg_27gr75q_b",
            product_discount: "- 23%",
            product_title: "Màn hình LG 27GN75QB",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/lg/lg_27mk600m_b.html",
            img_link: "../../image/monitors/lg/lg_27mk600m_b.jpg",
            img_alt: "lg_27mk600m_b",
            product_discount: "- 23%",
            product_title: "Màn hình LG 27MK600MB",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/lg/lg_27up600_w.html",
            img_link: "../../image/monitors/lg/lg_27up600_w.jpg",
            img_alt: "lg_27up600_w",
            product_discount: "- 23%",
            product_title: "Màn hình LG 27UP600W",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/lg/lg_32gn650_b.html",
            img_link: "../../image/monitors/lg/lg_32gn650_b.jpg",
            img_alt: "lg_32gn650_b",
            product_discount: "- 23%",
            product_title: "Màn hình LG 32GN650B",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/lg/lg_mp68vq_p.html",
            img_link: "../../image/monitors/lg/lg_mp68vq_p.jpg",
            img_alt: "lg_mp68vq_p",
            product_discount: "- 23%",
            product_title: "Màn hình LG 32GN650B",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/asus/asus_be279qsk.html",
            img_link: "../../image/monitors/asus/asus_be279qsk.png",
            img_alt: "asus_be279qsk",
            product_discount: "- 23%",
            product_title: "Màn hình ASUS BE279QSK",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/asus/asus_pg27aqdm.html",
            img_link: "../../image/monitors/asus/asus_pg27aqdm.jpg",
            img_alt: "asus_pg27aqdm",
            product_discount: "- 23%",
            product_title: "Màn hình ASUS PG27AQDM",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/asus/asus_va34vcpsn.html",
            img_link: "../../image/monitors/asus/asus_va34vcpsn.png",
            img_alt: "asus_va34vcpsn",
            product_discount: "- 23%",
            product_title: "Màn hình ASUS VA34VCPSN",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/monitor/asus/asus_vg32vq1b.html",
            img_link: "../../image/monitors/asus/asus_vg32vq1b.png",
            img_alt: "asus_vg32vq1b",
            product_discount: "- 23%",
            product_title: "Màn hình ASUS VG32VQ1B",
            product_price: "3.835.000đ",
            product_price_int: 3835000,
            product_price_origin: "4.950.000đ",
            product_star: 0,
            product_comment: 0
        }
        
    ];
    for(let i = 0; i < objectGridCard.length; i++){
        document.querySelectorAll(".grid-product-card-container")[0].innerHTML += 
        `<div class="grid-product-card">\n`+
        `\t<a class="grid-product-card-img" href=${objectGridCard[i].product_link}>\n` +
        `\t\t<img src=${objectGridCard[i].img_link} alt=${objectGridCard[i].img_alt}>\n` +
        `\t\t<div class="grid-product-card-discount">${objectGridCard[i].product_discount}</div>\n` +
        `\t</a>\n` +
        `<p class="grid-product-card-title">${objectGridCard[i].product_title}</p>\n` +
        `<p class="grid-product-card-price-main">${objectGridCard[i].product_price}</p>\n`+
        `<p class="grid-product-card-price-origin">${objectGridCard[i].product_price_origin}</p>\n` +  
        `<p class="grid-product-card-star">${objectGridCard[i].product_star} <i class="fa-regular fa-star"></i></p>` +
        `<p class="grid-product-card-comment">(${objectGridCard[i].product_comment} Đánh giá)</p>\n`      
        ;
    }


});