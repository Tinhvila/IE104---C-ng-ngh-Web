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
            product_link: "./product_item/keyboard/asus/asus_rog_azoth.html",
            img_link: "../../image/keyboards/asus/asus_rog_azoth.png",
            img_alt: "asus_rog_azoth",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROG AZOTH",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_falchion_ace.html",
            img_link: "../../image/keyboards/asus/asus_rog_falchion_ace.png",
            img_alt: "asus_rog_falchion_ace",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROG FALCHION ACE",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_flare.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_flare.jpg",
            img_alt: "asus_rog_strix_flare",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROG STRIX FLARE",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_scope_II_rx.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_scope_II_rx.png",
            img_alt: "asus_rog_strix_scope_II_rx",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROG STRIX SCOPE II RX",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_scope_nx_tkl_moonlight_white.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_scope_nx_tkl_moonlight_white.png",
            img_alt: "asus_rog_strix_scope_nx_tkl_moonlight_white",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROX STRIX SCOPE NX TKL MOONLIGHT WHITE" ,
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_scope_nx_wireless_deluxe.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_scope_nx_wireless_deluxe.png",
            img_alt: "asus_rog_strix_scope_nx_wireless_deluxe",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROX STRIX SCOPE NX WIRELESS DELUXE",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_scope_II.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_scope_II.png",
            img_alt: "asus_rog_strix_scope_II",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROX STRIX SCOPE II",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_scope_rx_eva-o2_edition.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_scope_rx_eva-o2_edition.png",
            img_alt: "asus_rog_strix_scope_rx_eva-o2_edition",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROX STRIX SCOPE RX EVA O2 EDITION",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_scope_tkl.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_scope_tkl.jpg",
            img_alt: "asus_rog_strix_scope_tkl",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROX STRIX SCOPE TKL",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/asus/asus_rog_strix_scope_nx.html",
            img_link: "../../image/keyboards/asus/asus_rog_strix_scope_nx.png",
            img_alt: "asus_rog_strix_scope_nx",
            product_discount: "- 32%",
            product_title: "Bàn phím ASUS ROX STRIX SCOPE NX",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/corsair/corsair_k57_rgb_wirelesshtml",
            img_link: "../../image/keyboards/corsair/corsair_k57_rgb_wireless.jpg",
            img_alt: "corsair_k57_rgb_wireless",
            product_discount: "- 32%",
            product_title: "Bàn phím CORSAIR K57 RGB Wireless",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/corsair/corsair_k68_rgb_rapidfire.html",
            img_link: "../../image/keyboards/corsair/corsair_k68_rgb_rapidfire.jpg",
            img_alt: "corsair_k68_rgb_rapidfire",
            product_discount: "- 32%",
            product_title: "Bàn phím CORSAIR K68 RGB RAPIDFIRE",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/corsair/corsair_k70_mechanical.html",
            img_link: "../../image/keyboards/corsair/corsair_k70_mechanical.jpg",
            img_alt: "corsair_k70_mechanical",
            product_discount: "- 32%",
            product_title: "Bàn phím CORSAIR K70 MECHANICAL",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/corsair/corsair_k70_rgb_mk2.html",
            img_link: "../../image/keyboards/corsair/corsair_k70_rgb_mk2.jpg",
            img_alt: "corsair_k70_rgb_mk2",
            product_discount: "- 32%",
            product_title: "Bàn phím CORSAIR K70 RGB MK2",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
            product_star: 0,
            product_comment: 0
        },
        {
            product_link: "./product_item/keyboard/corsair/corsair_k70_rgb_pro.html",
            img_link: "../../image/keyboards/corsair/corsair_k70_rgb_pro.jpg",
            img_alt: "corsair_k70_rgb_pro",
            product_discount: "- 32%",
            product_title: "Bàn phím CORSAIR K70 RGB PRO",
            product_price: "1.499.000đ",
            product_price_int: 1499000,
            product_price_origin: "2.199.000đ",
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