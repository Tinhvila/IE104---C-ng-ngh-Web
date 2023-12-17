//Count the number of item to add to cart
document.addEventListener("DOMContentLoaded", function(){
    let productName = document.getElementsByClassName("product-name")[0].innerHTML;
    let btnSubmit = document.getElementsByClassName("btn-addtocart")[0];
    let btnAddCount = document.getElementsByClassName("btn-addcount")[0];
    let btnMinusCount = document.getElementsByClassName("btn-minuscount")[0];
    let displayCount = document.getElementsByClassName("display-addtocartcount")[0];
    let count = 0;
    btnAddCount.addEventListener("click", () => {
        count = count + 1;
        displayCount.innerHTML = `${count}`;
    });
    btnMinusCount.addEventListener("click", () => {
        if(count > 0){
            count = count - 1;
        }
        displayCount.innerHTML = `${count}`;
    });
    btnSubmit.addEventListener("click", () => {
        if(count > 0){
            alert(
                "Bạn đã thêm vào giỏ hàng thành công!\n" +
                `Thông tin sản phẩm: ${productName}\n` +
                `Số lượng: ${count}\n`
            );
        }
        else{
            alert("Bạn chưa nhập số lượng!");
        }
    });
});