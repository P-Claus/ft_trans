import { renderNavBar } from '../components/NavBar'
import { renderFooter } from '../components/Footer'

export const renderBackend= (): string => 
{
  return `
  	${renderNavBar()}
  	<h1>This is the backend page</h1>
	${renderFooter()}
  `;
}

