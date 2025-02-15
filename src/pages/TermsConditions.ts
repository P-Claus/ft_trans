import { renderNavBar } from '../components/NavBar'
import { renderFooter } from '../components/Footer'

export function renderTermsAndConditions(): string {

  return `
  	${renderNavBar()}
  	<h1>This is the terms and conditions page</h1>
  	${renderFooter()}
  `;
}

