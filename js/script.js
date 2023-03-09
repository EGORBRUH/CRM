'use strict';

const closeBtn = document.querySelector('.form-container__img');
const formTitle = document.querySelector('.form-title');
const form = document.querySelector('.form-product');
const checkBox = document.querySelector('.form-product__checkbox_input');
const inputDiscount = document.querySelector('.form-product__input_discount');
const totalPrice = document.querySelector('.total');
const id = document.querySelector('.form-id');
const idBtn = document.querySelector('.form-id:before');


document.querySelector('#checkbox').addEventListener('change', function(){
  this.form.querySelector('.form-product__input_discount').disabled = !this.checked;
  if (checkBox.checked === false){
    inputDiscount.value = '';
  }  // событие на чекбоксе для блокировки и очистки поля
});

const addProductPage = (product, list) => {
  list.append(createRow(product))
}

const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form)
    const formData = new FormData(e.target);

    const newProduct = Object.fromEntries(formData);
    console.log(newProduct)


    form.reset();
    closeModal()
    addProductPage(newProduct, list)
    addProductData(newProduct);

  })
}
formControl(form, list, closeModal);



