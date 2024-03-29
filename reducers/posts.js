const initialState = {
  all: {
    about: {
      title: 'О нас',
      content: `
        <p>Магазины “KoKos” основаны в 2016 году, находятся в двух городах Приморского края: г. Уссурийск и г. Артём. В нашем онлайн-магазине  представлена продукция самых популярных косметических брендов от ведущих производителей в Корее. Вся продукция закупается непосредственно у производителей, либо у официальных представителей, что дает гарантию подлинности  и качества товара.</p>
        <p>Благодаря своей эффективности, натуральному составу и доступным ценам корейская косметика завоевала доверие миллионов потребителей во всем мире. Она сочетает в себе высочайшее качество, основанное на последних технологических разработках в области косметологии, и результативность в комплексном уходе за кожей лица.</p>
        <p>В нашем онлайн-магазине Вы найдете разнообразие средств по уходу за кожей лица: очищающие пенки и масла, тонеры, сыворотки и эмульсии, лосьоны, крема, ночные и дневные маски и многое другое. Мы специально подбираем лучшие средства для Вас, а если у Вас есть сомнения в выборе, свяжитесь с нами и мы проконсультируем по товару и подберем необходимые именно для Вас уходовые средства.</p> 
        <p>Мы работаем для Вас по часовому поясу Владивосток.</p>
        `
    },
    stores: {
      title: 'Адреса магазинов',
      content: `
<h3>Уссурийск</h3> 
<p>Ул . Суханова 64 ТЦ « Торговая галерея»</p>
<p>Ул . Некрасова 82б ТЦ « Вл-холл», 2 этаж</p>
<h3>Артем</h3> 
<p>Ул. Фрунзе 32А, этаж 4, бутик 432</p>
        `
    },
    payment: {
      title: 'Оплата и доставка',
      content: `
<p> Уважаемые покупатели! Мы работаем по 100% предоплате. По Уссурийску и Артёму оплата после получения заказа у курьера. Оплатить заказ вы можете на карту Сбербанка. Реквизиты высылаем после поступления заказа.</p>
<p>После оплаты мы собираем заказ, везем в транспортную компанию или Почту России. Если заказ из Уссурийска и Артёма, то его забирает курьер и везет его к Вам.</p>
        `
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
