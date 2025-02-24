import { renderLoggedInNavBar } from "../components/LoggedInNavBar";
import { renderFooter } from "../components/Footer";

export const renderTournament= (): string => 
{
  return `
  	${renderLoggedInNavBar()}
  	<h1>This is the tournament page</h1>
	${renderFooter()}
  `;
}
