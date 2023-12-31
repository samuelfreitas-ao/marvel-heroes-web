import { Header, Layout, LayoutBody, Title } from '../../components'
import { Container } from './styled'

export function NotFound() {
	return (
		<Layout title="Página não encontrada | Marvel Heroes">
			<Header />
			<LayoutBody>
				<Title backTo="/">404!</Title>
				<Container>Página não encontrado!</Container>
			</LayoutBody>
		</Layout>
	)
}
