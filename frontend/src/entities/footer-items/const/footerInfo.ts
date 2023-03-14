import { IFooterItem } from '../types/footerItem'

export const footerInfo: IFooterItem[] = [
	{title:'Способ оплаты',children:[]},
	{title:'Покупателям',children:[{name: 'Как оформить заказ', link: '/'},{name: 'Доставка', link: '/'},{name: 'Способ оплаты', link: '/'},{name: 'Обмен и возврат товара', link: '/'}]},
	{title:'Информация',children:[{name: 'Контакты', link: '/'},{name: 'Блог',link: '/'},{name: 'Информация для юр. лиц', link: '/'},{name: 'Политика конфиденциальности', link: '/'}]},
	{children:[{name: 'Физ. и юр. адреc 225301, Республика Беларусь, г. Кобрин, ул. 700 лет Кобрина, д. 6, кв 21'},{name: 'Магазин +375 (29) 827-94-83 Режим работы: Пн-Вс 09:00-21:00'},{name: 'E-mail belty.by@gmail.com'}]}
]
