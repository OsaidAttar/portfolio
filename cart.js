let neg = document.getElementById('min1')
let plus = document.getElementById('plus1')
let num =document.getElementById('num1')
let neg2 = document.getElementById('min2')
let plus2 = document.getElementById('plus2')
let num2 =document.getElementById('num2')
let neg3 = document.getElementById('min3')
let plus3 = document.getElementById('plus3')
let num3 =document.getElementById('num3')
let neg4 = document.getElementById('min4')
let plus4 = document.getElementById('plus4')
let num4 =document.getElementById('num4')
let addCart =document.getElementById('addCart')
let pri = document.getElementById('pri')
let product = document.getElementById('newSale')
let deleteBtn =document.getElementById('deleteBtn')
let confirmb = document.getElementById('confirm')
let foot = document.getElementById('foot')
let total = document.getElementById("total")
let cartProduct =[
    {
     image:"assets/image/cp-1.jpg",
     prise:"150" ,
     total:"150",
     idn:"min1",
     idp:"pl1",
     title:"Chain bucket bag",
     deleteBtn:"deleteBtn1",
     value:1,
     },
        {
    image:"assets/image/cp-2.jpg",
     prise:"170" ,
     total:"170",
     idn:"min2",
     idp:"pl2",
     title:"Zip-pockets pebbled tote briefcase",
     deleteBtn:"deleteBtn2"
     },
     {
     image:"assets/image/cp-3.jpg",
     prise:"85" ,
     total:"85",
     idn:"min3",
     idp:"pl3",
     title:"Black jean",
     deleteBtn:"deleteBtn3"
     },
     {
    image:"assets/image/cp-4.jpg",
    prise:"55" ,
    total:"55",
    idn:"min4",
    idp:"pl4",
    title:"Cotton Shirt",
    deleteBtn:"deleteBtn4"
        },
    //     {
    // image:"assets/image/discount/product-1.jpg.webp",
    // prise:"75" ,
    // total:"75",
    // idn:"min5",
    // idp:"pl5",
    // title:"Summer men's shirt",
    // deleteBtn:"deleteBtn5"
    // },
    ]
   
       filterCartImg();
        

    function filterCartImg(){
     let i=4
      let filterProductCart = cartProduct.slice(0,4)
    
      i++;
      
      console.log(i);
      dispalycarts(filterProductCart);
      return filterProductCart;
    }
  
     
    var cart=JSON.parse(localStorage.getItem('cart'))
    dispalycart(cart)
    
  
  function dispalycart(element){
  
  let result =``
  
    for(let i=0;i<element.length;i++){
        result+=
          `
          <tr>  
        <td class="cartProduct d-flex">
  <img src="${element[i].image}" alt="" class="pt-2">
  <div class="cartProductTitle mx-3">
  <h5>${element[i].title}</h5>
  <div class="star-ratio">
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
  </div>
  </div>
        </td>
        <td>
          <div class="cartPrise" id="${i}"  value="${element[i].prise}">$  ${element[i].prise}</div>
        </td>
        <td>    <div class="pro-qty">
          <span class="dec qtybtn id=${element[i].idn }" onclick="decrease(${i})">-</span>
          <input type="text" value="1" class="input" >
          <span class="dec qtybtn" id=${element[i].idp} onclick="increase(${i})">+</span>
      </div>
    </td>
    <td>
      <div class="cartTotal" id="${i}" value="${element[i].total}">$ ${element[i].total}</div>
    </td>
    <td>
      <div class="cartClose"  >
        <div class="cartIcon" >
        <i class="fa-solid fa-xmark "  onclick="deleteProduct(${i})" id = "${element.deleteBtn}"> </i>
        </div>
      </div>
    </td>
    
    </tr>
    
  `
  }
  console.log(product);
  product.innerHTML=result;
 
  }
  let prices =document.getElementsByClassName('cartPrise')
  console.log("myprice");
  console.log(prices[0].getAttribute("value"));
   let Totals =document.getElementsByClassName('cartTotal')
  // console.log(totalss[0].value);
  let inputs =document.getElementsByClassName('input')

function decrease(i){
 inputs[i].value--;
 totalPrises(i);
 Totalss(i);
  }
function increase(i){
 inputs[i].value++;
 totalPrises(i);
 Totalss(i);
  }
  function totalPrises(i){
    let tot = (prices[i].getAttribute("value"))*(inputs[i].value)
console.log(tot);
Totals[i].innerHTML ="$ "+ tot

  }
  
function Totalss(i){
let sum=0
for(let i=0;i<Totals.length;i++){
 let t= Totals[i].innerHTML
 console.log(t);
   sum +=Number(t)
  
    }

    console.log(sum);
  }
   
  function dispalycarts(element){
  
    let result =``
    
      for(let i=0;i<element.length;i++){
          result+=
            `
            <tr>  
          <td class="cartProduct d-flex">
    <img src="${element[i].image}" alt="" class="pt-2">
    <div class="cartProductTitle mx-3">
    <h5>${element[i].title}</h5>
    <div class="star-ratio">
      <i class="fa-solid fa-star "></i>
      <i class="fa-solid fa-star "></i>
      <i class="fa-solid fa-star "></i>
      <i class="fa-solid fa-star "></i>
      <i class="fa-solid fa-star "></i>
    </div>
    </div>
          </td>
          <td>
            <div class="cartPrises" id="${i}" value="${element[i].prise}">$ ${element[i].prise}</div>
          </td>
          <td>    <div class="pro-qty">
            <span class="dec qtybtn " onclick="decreaseing(${i})">-</span>
          <input type="text" value="1" class="inputs " >
          <span class="dec qtybtn"  onclick="increaseing(${i})">+</span>
        </div>
      </td>
      <td>
        <div class="cartTotals" id="${i}" value="${element[i].total}">$ ${element[i].total}</div>
      </td>
      <td>
        <div class="cartClose"  >
          <div class="cartIcon" >
          <i class="fa-solid fa-xmark "  onclick="deleteProducts(${i})" id = "${element.deleteBtn}"> </i>
          </div>
        </div>
      </td>
      
      </tr>
      
    `
    }
    console.log(product);
    foot.innerHTML=result;
   
    }
    let price =document.getElementsByClassName('cartPrises')
    console.log("myprice");
    console.log(price[0].getAttribute("value"));
     let totalss =document.getElementsByClassName('cartTotals')
    // console.log(totalss[0].value);
    let inputss =document.getElementsByClassName('inputs')
  
  function decreaseing(i){
   inputss[i].value--;
   totalPrise(i);
   totals(i);
    }
  function increaseing(i){
   inputss[i].value++;
   totalPrise(i);
   totals(i);
    }
    function totalPrise(i){
      let tot = (price[i].getAttribute("value"))*(inputss[i].value)
console.log(tot);
totalss[i].innerHTML ="$ "+ tot

    }
    
function totals(i){
  let sum=0
 for(let i=0;i<totalss.length;i++){
   let t= totalss[i].innerHTML
   console.log(t);
     sum +=Number(t)
    
      }

      console.log(sum);
    }




  function deleteProduct(index){
        
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          cart.splice(index,1);
          localStorage.setItem('cart',JSON.stringify(cart))
         

            console.log(cartProduct);
           
            dispalycart(cart);
         Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}
function deleteProducts(index){
        
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        cartProduct.splice(index,1);
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct))
          console.log(cartProduct);
        
           dispalycarts(cartProduct);
       Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}
// function filterTotal(targetTotal){
//     let arrayTotal=[];
//     for (const total of targetTotal) {
//       let returnArray=cartProduct.filter(yy=> yy.total=== total) //////////////////////////////
//       console.log(returnArray);
//       arrayTotal.push(...returnArray)
      
//     }
//    console.log(arrayTotal);
//     return arrayPrise
//   }
//   filterTotal(targetTotal);

// neg.onclick=function(){
//    let count=num.value
//     console.log(count);
//     // e.preventDefault();
//     count--
//     num.setAttribute("value" , count)
//   }
//   plus.onclick=function(){
// let count=num.value
//     console.log(count);
//     // e.preventDefault();
//     count++
//     num.setAttribute("value" , count)
//   }
//   neg2.onclick=function(){
//     let count=num2.value
//      console.log(count);
//      // e.preventDefault();
//      count--
//      num2.setAttribute("value" , count)
//    }
//    plus2.onclick=function(){
//  let count=num2.value
//      console.log(count);
//      // e.preventDefault();
//      count++
//      num2.setAttribute("value" , count)
//    }
//    neg3.onclick=function(){
//     let count=num3.value
//      console.log(count);
//      // e.preventDefault();
//      count--
//      num3.setAttribute("value" , count)
//    }
//    plus3.onclick=function(){
//  let count=num3.value
//      console.log(count);
//      // e.preventDefault();
//      count++
//      num3.setAttribute("value" , count)
//    }
//    neg4.onclick=function(){
//     let count=num4.value
//      console.log(count);
//      // e.preventDefault();
//      count--
//      num4.setAttribute("value" , count)
//    }
//    plus4.onclick=function(){
//  let count=num4.value
//      console.log(count);
//      // e.preventDefault();
//      count++
//      num4.setAttribute("value" , count)
//    }

confirmb.onclick=function(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'The purchase has been completed successfully',
        showConfirmButton: false,
        timer: 1500
      })
}