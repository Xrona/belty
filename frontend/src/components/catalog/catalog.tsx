import styles from './catlog.module.scss'

import Filter from '@/components/catalog/filter'

export const Catalog = () => {
	return (
		<main className={styles.container}>
			<section className={styles.filters}>
				<Filter />
			</section>
			<section className={styles.content}>content</section>
		</main>
	)
}
