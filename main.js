var form=document.querySelector(".submitForm");

var prod_name=document.querySelector("#name");
var prod_desc=document.querySelector("#desc");
var prod_price=document.querySelector("#price");

var products=[];

form.onsubmit=function(event){
    event.preventDefault();
    var product={
        name:prod_name.value,
        desc:prod_desc.value,
        price:prod_price.value,
    }

    products.push(product);
    displayProducts();
}

function displayProducts(){
    var data=``;
    for(var i=0;i<products.length;i++){
        data += 
                `
                <tr>
                    <td>${products[i].name}</td>
                    <td>${products[i].desc}</td>
                    <td>${products[i].price}</td>
                </tr>`;
    }

    document.querySelector(".tableClass tbody").innerHTML=data;
    console.log(document.querySelector(".tableClass tbody"));

}