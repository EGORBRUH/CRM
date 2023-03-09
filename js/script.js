'use strict';
const newArr = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "amount": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "amount": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "amount": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "amount": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
]


const btnAdd = document.querySelector('.cms-btn');
const overlay = document.querySelector('.overlay');
const overlayFlex = document.querySelector('.overlay-flex')
const modalOff = document.querySelector('.cms-wrapper');
const modalClose = document.querySelector('.form-container__img');
const tr = document.querySelector('.row');
const list = document.querySelector('.cms'); // Вся таблица

const closeBtn = document.querySelector('.form-container__img');
const formTitle = document.querySelector('.form-title');
const form = document.querySelector('.form-product');
const checkBox = document.querySelector('.form-product__checkbox_input');
const inputDiscount = document.querySelector('.form-product__input_discount');
const totalPrice = document.querySelector('.total');
const id = document.querySelector('.form-id');
const idBtn = document.querySelector('.form-id:before');

const formSpan = document.querySelector('.modal-span'); // итоговая стоимость в модальном окне
// Все ячейки в таблице с и тоговой стоимостью
const amount = document.querySelector('.form-product__input_amount');  // Инпут с колличеством в модальном окне
const price = document.querySelector('.form-product__input_price'); // Инпут с суммой товара в модальном окне
const mainTotal = document.querySelector('.main-total');


const addProductData = (product) => { // запушивание нового продукта
  newArr.push(product);
  console.log(newArr);
};
const modal = document.querySelector('.form-id').textContent;
console.log(modal);

const table = document.querySelector('.cms > tbody')
const createRow = ({id, title, category, units, amount, price}) => {  //Функция создания строки
  const tr = document.createElement('tr');
  tr.classList.add('row')
  tr.innerHTML = `
      <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${category}</td>
        <td>${units}</td>
        <td>${amount}</td>
        <td>${price}</td>
        <td class="total-result">${price * amount}</td>
        <td><button class="no-image"></button></td>
        <td><button class="pen"></button></td>
        <td><button class="basket"></button></td>
      </tr>
  `
  return tr;
};

const totalResultFoo = () => {
  const totalResult = document.querySelectorAll('.total-result');
  let totalRes = 0;
  console.log(totalResult);
  totalResult.forEach(e => {
    console.log(e);
    totalRes += +e.textContent;
  })
  mainTotal.textContent = totalRes;
};

const renderGoods = (newArr) => {  // Функция обновления
  console.log(newArr);
  newArr.map(item => {
    table.append(createRow(item));
  });
  totalResultFoo();
};



const modalControl = (btnAdd) => {   // Функция открытия/ закрытия модального окна
  const openModal = () => {
    overlay.classList.add('overlay-flex');
  }

  const closeModal = () => {
    overlay.classList.remove('overlay-flex');
  }

  btnAdd.addEventListener('click', openModal);

  modalOff.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.form-container__img') || target === overlay) {
      closeModal()
    }
  });
  return {
    closeModal
  };
}

const {closeModal} = modalControl(btnAdd, modalClose)


list.addEventListener('click', e => {  //  Событие удаления строки из CMS
  const target = e.target;
  if (e.target.closest('.basket')) {   //Кнопка с корзиной
    e.target.closest('.row').remove()  ; // Элемент tr с классом row
    console.log(list)
  }
});



amount.addEventListener('blur', e => {   // blur на inpute колличества товаров в модальном
  const target = e.target;
  price.addEventListener('blur', e => {  // blur на inpute цены товаров в модальном
    const target = e.target;
    if (target !== amount || target !== price) {
      let totalModal = formSpan.textContent = price.value * amount.value;
    }
  });
})

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
    closeModal();
    addProductPage(newProduct, list);
    renderGoods(newProduct);
    form.reset();

  })
}
formControl(form, list, closeModal);



renderGoods(newArr);






