// CHỨC NĂNG SEARCH 
const products = [
        // Màn hình
        {
            src: "image/monitors/dell/dell_u2723qe.png",
            name: "Màn hình Dell UltraSharp U2723QE 27inch IPS 4K USBC RJ45 chuyên đồ họa",
            kind: "Màn hình",
            available: "Còn hàng",
            newPrice: "13.190.000đ",
            oldPrice: "15.290.000đ",
            rating: 4.5,
            warranty: "36 tháng"
        },
        {
            src: "image/monitors/dell/dell_p2419h.png",
            name: "Màn hình Dell 23.8 inch P2419H",
            kind: "Màn hình",
            available: "Hết hàng",
            newPrice: "4.990.000đ",
            oldPrice: "5.990.000đ",
            rating: 4.7,
            warranty: "24 tháng"
        },
        {
            src: "image/monitors/dell/dell_s2421hn.png",
            name: "Màn hình Dell S2421HN 24 inch",
            kind: "Màn hình",
            available: "Hàng sắp về",
            newPrice: "3.490.000đ",
            oldPrice: "4.370.000đ",
            rating: 4.5,
            warranty: "36 tháng"
        },
        {
            src: "image/monitors/dell/dell_s2721ds.png",
            name: "Màn hình Dell Monitor S2721DS 27",
            kind: "Màn hình",
            available: "Còn hàng",
            newPrice: "6.290.000đ",
            oldPrice: "6.990.000đ",
            rating: 5.0,
            warranty: "36 tháng"
        },
        {
            src: "image/monitors/dell/dell_s2721hn.png",
            name: "Màn hình Dell S2721HN 27",
            kind: "Màn hình",
            available: "Còn hàng",
            newPrice: "4.690.000đ",
            oldPrice: "6.370.000đ",
            rating: 4.5,
            warranty: "12 tháng"
        },
        {
            src: "image/monitors/dell/dell_s2722qc.png",
            name: "Màn hình Dell S2722QC 27 inch 4K UHD IPS",
            kind: "Màn hình",
            available: "Còn hàng",
            newPrice: "10.990.000đ",
            oldPrice: "11.990.000đ",
            rating: 4.5,
            warranty: "48 tháng"
        },
        {
            src: "image/monitors/dell/dell_s3221qs.png",
            name: "MÀN HÌNH DELL S3221QS",
            kind: "Màn hình",
            available: "Hết hàng",
            newPrice: "10.190.000đ",
            oldPrice: "12.990.000đ",
            rating: 4.5,
            warranty: "36 tháng"
        },
        {
            src: "image/monitors/dell/dell_s3423dwc.png",
            name: "Màn hình Dell S3423DWC 34 inch VA WQHD 100Hz Cong",
            kind: "Màn hình",
            available: "Còn hàng",
            newPrice: "20.190.000đ",
            oldPrice: "22.490.000đ",
            rating: 4.5,
            warranty: "24 tháng"
        },
        {
            src: "image/monitors/dell/dell_up3218k.png",
            name: "Màn Hình Dell UP3218K UltraSharp 8K - 32inch",
            kind: "Màn hình",
            available: "Còn hàng",
            newPrice: "13.190.000đ",
            oldPrice: "15.290.000đ",
            rating: 4.5,
            warranty: "36 tháng"
        },

    ]
    // Chuột

//                {

//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//         },
//         {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//         },
//         {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//         },
//         {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//         },
//        {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//         },     
//         {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//          },       
//          {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//          }, 
//          {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//          }, 
//          {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//          },
//          {
//             src: "image/monitors/dell/dell_u2723qe.png",
//             name: "Màn hình Dell UltraSharp U2723QE 27" IPS 4K USBC RJ45 chuyên đồ họa",
//             kind: "Màn hình",
//             available: "Còn hàng",
//             newPrice: "13.190.000đ",
//             oldPrice: "15.290.000đ",
//             rating: 4.5,
//             warranty: "36 tháng"
//          },


//              ];


const SEARCH_KEYWORD = "SEARCH_KEYWORD";
let formSubmitSearch = document.getElementsByClassName("header__search")[0];
let keyWord = document.getElementById("keyword");
const search_keyword_display = document.getElementById("search_keyword");
let itemBoxReturn = document.getElementsByClassName("itemBoxReturn")[0];
let searchContainer = document.getElementsByClassName("searchContainer")[0];

// Khi focus sẽ hiện box


["focus", "input"].forEach(evt =>

    keyWord.addEventListener(evt, function(event) {
        itemBoxReturn.textContent = ``;
        let inputKeyWord = event.target.value;
        localStorage.setItem(SEARCH_KEYWORD, inputKeyWord);
        let count = 0;
        for (let i = 0; i < products.length; i++) {
            if (standardizeInput(products[i].name).includes(standardizeInput(inputKeyWord))) {
                itemBoxReturn.insertAdjacentHTML("beforeend", insertProductBox(products[i]))
                count++;
            }
        }
        if (count == 0) {
            itemBoxReturn.innerHTML = `<p style = "font-weight:normal;">Không tìm thấy kết quả trả về cho từ khóa "<strong>${inputKeyWord}</strong>"</p>`
        }
        if (inputKeyWord.trim() != '') itemBoxReturn.style.display = "block";
        else
            itemBoxReturn.style.display = "none";

    })

);

//Khi nhấn nút tìm kiếm thì trỏ sang trang search.html
formSubmitSearch.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "search.html";
    searchContainer.textContent = ``;

});



keyWord.addEventListener("blur", () => {
    itemBoxReturn.style.display = "none";
})

itemBoxReturn.addEventListener("click", () => {
    itemBoxReturn.style.display = 'block';
})


//Hiện keyowrd sang trang search.html 
let inputKeyWord = localStorage.getItem(SEARCH_KEYWORD).toString();
search_keyword_display.innerText = inputKeyWord;
for (let i = 0; i < products.length; i++) {
    if (standardizeInput(products[i].name).includes(standardizeInput(inputKeyWord)))
        searchContainer.insertAdjacentHTML("beforeend", insertProductPage(products[i]))
}


// Hàm xóa dấu trong tiếng Việt 
function removeAccents(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function standardizeInput(str) {
    // console.log(str)
    // đổi thành chữ chuyển đổi thành chữ thường
    str = str.toLowerCase();
    // Xóa dấu tiếng việt
    str = removeAccents(str);
    // Xóa " "
    str = str.replace(/\s/gi, '');
    return str.toString();
}


// thêm sản phẩm vào box search 
function insertProductBox(User) {
    return `<div class="itemBoxReturnSearch">
                <img src="${User.src}" alt="">
                <div class="itemBoxReturnSearch__content">
                    <p class="itemBoxReturnSearch__content__nameItem">${User.name}</p>
                    <div class="itemBoxReturnSearch__content__price">
                        <span class="itemBoxReturnSearch__content__price__new">${User.newPrice}</span>
                        <span class="itemBoxReturnSearch__content__price__old">${User.oldPrice}</span>
                    </div>
                </div>
            </div>`
}

// thêm sản phẩm vào page search


function insertProductPage(User) {
    return `<div class="item">

                <div class="imgSearchReturn">
                    <img src="${User.src}" alt="Sản phẩm" class="imgSearchReturn__img">
                </div>

                <div class="infoItemSearchReturn">
                    <h2 class="nameItem">${User.name}</h2>
                    <p>Thể loại: <span class="kindOfItem">${User.kind}</span></p>
                    <p>Tình trạng: <span class="statusItem">${User.available}</span></p>
                    <p>Bảo hành: <span class="warrantyItem">${User.warranty}</span></p>
                    <p>Đánh giá: <span class="starOffer">${User.rating}</span><i class="fa-solid fa-star"></i></p>
                    <div class="priceAndButton">
                        <p>Giá: <span class="newPriceItem">${User.newPrice}</span><span class="oldPriceItem">${User.oldPrice}</span></p>
                        <button class="button itemButton">Xem chi tiết</button>
                    </div>
                </div>

            </div>`
}