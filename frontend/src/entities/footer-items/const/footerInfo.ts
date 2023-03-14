import { IFooterItem } from '../types/footerItem'

export const footerInfo: IFooterItem[] = [
	{title:'Способ оплаты',children:[]},
	{
		title:'Покупателям',
		children:[{
			name: 'Как оформить заказ',
			link: '/',
			view: 'link'
		},
		{
			name: 'Доставка',
			link: '/',
			view: 'link'
		},
		{
			name: 'Способ оплаты',
			link: '/',
			view: 'link'
		},
		{
			name: 'Обмен и возврат товара',
			link: '/',
			view: 'link'
		}]
	},
	{
		title:'Информация',
		children:[
			{
				name: 'Контакты',
				link: '/',
				view: 'link'
			},
			{
				name: 'Блог',
				link: '/',
				view: 'link'
			},
			{
				name: 'Информация для юр. лиц',
				link: '/',
				view: 'link'
			},{
				name: 'Политика конфиденциальности', link: '/', view: 'link'}]},
	{
		children:[
			{
				name: 'Физ. и юр. адреc 225301, Республика Беларусь, г. Кобрин, ул. 700 лет Кобрина, д. 6, кв 21',
				view: 'text'
			},
			{
				name: 'Магазин +375 (29) 827-94-83 Режим работы: Пн-Вс 09:00-21:00',
				view: 'text'
			},
			{
				name: 'E-mail belty.by@gmail.com',
				view: 'text'
			}
		]
	}
]
