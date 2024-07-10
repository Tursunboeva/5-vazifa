const  $form = document.getElementById("productForm")
const  $list = document.getElementById("productList")

let products=[];

$form.addEventListener("submit" , function(e){
e.preventDefault()


const $productName = document.getElementById("productName").value;
const $productAmout= document.getElementById("productAmount").value;
const $productPrice = document.getElementById("productPrice").value;


let newProducts={
    name:$productName,
    amout:$productAmout,
    price:$productPrice
}
products.push(newProducts)

productsListDiv()
alert(`${$productName} mahsuloti ro'yhatga qo'shildi!`);
})



function productsListDiv(){
    $list.innerHTML= "";

    products.forEach(function(products,i){
        let prdDiv= document.createElement("li");
        prdDiv.textContent=`Product ismi:${products.name}, Product miqdori: ${products.amout},Product narxi: ${products.price}`

           $list.appendChild(prdDiv);

           if (index === 0 || index === products.length - 1) {
            listItem.classList.add('first-last');
        }

        productList.appendChild(listItem);
    })

   
}
