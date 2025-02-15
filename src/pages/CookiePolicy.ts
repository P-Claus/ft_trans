import { renderNavBar } from '../components/NavBar'
import { renderFooter } from '../components/Footer'

export const renderCookiePolicy = (): string => 
{
  return `
  	${renderNavBar()}
  	<h1>This is the cookie policy page</h1>
	${renderFooter()}
  `;
}

