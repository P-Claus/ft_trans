import { renderNavBar } from '../components/NavBar';
import { renderFooter } from '../components/Footer';

export function renderTermsAndConditions(): string {
    return `
  	${renderNavBar()}
    <section class="bg-primary-background text-white">
		<div class="container py-8 px-5 md:px-10">
			<h1 class="mb-4 pt-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl">Terms and Conditions of Retropong</h1>
				<h2 class="mb-4 mt-6 text-4xl">1. Definitions</h2>
					<p class="mb-6 text-lg lg:text-xl md:px-10"><span class="underline">Platform</span>: Refers to Retropong.<br>
					<span class="underline">User</span>: Refers to any individual or entity who registers on the platform.<br> 
					<span class="underline">Players</span>: Refers to the individuals who engage in playing Pong games on the platform.<br>
					<span class="underline">We, Us</span>: Refers to Retropong.</p>
				<h2 class="mb-4 mt-6 text-4xl">2. Terms of Use</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">2.1 General</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">By using the services of Retropong, the user agrees to and accepts these terms of use. If the user does not agree to these terms, they should not use our platform.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">2.2 Changes to Terms of Use</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong reserves the right to modify these terms of use at any time. The most current version of the terms is always available on this page. Continued use of the platform after such changes implies acceptance of the updated terms.</p>
				<h2 class="mb-4 mt-6 text-4xl">3. Registration</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.1 Account Registration</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">To use the platform, you must register and create an account. During the registration process, you must provide accurate, complete, and current information. You need to provide your name and email address.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.2 Account Details</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">You are responsible for keeping your account details, including your username and password, confidential. You must immediately notify us of any unauthorized access to your account or any other security breaches.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.3 Age Requirement</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">By registering and using the platform, you declare and guarantee that you are at least 16 years old. If you are under the age 16, you cannot use this platform.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.4 Verification</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">We reserve the right to verify user information, such as identity verification, when there is doubt about the accuracy and authenticity of the provided details.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.5 Integrity of Account Information</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">You must not provide false or misleading account information. Impersonating another person or entity is prohibited. We reserve the right to suspend or terminate accounts that we reasonably suspect are fraudulent or in violation of our terms.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.6 Data Privacy</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">We handle the information you provide in accordance with our privacy policy. Please refer to our privacy policy for more details on how we collect, use, and protect your personal data.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.7 Access Rights</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Upon successful registration and verification, you will gain access to the services of the platform, including the ability to play games or interact with other players.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.8 Consent</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">By registering and creating an account, you agree to these terms, our privacy policy, and all other applicable policies and rules of the platform.</p>
				<h2 class="mb-4 mt-6 text-4xl">4. Services</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">4.1 Platform Functionality</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Our platform, Retropong, acts as an online service where players can compete against each other in the game of Pong remotely. We do not provide the Pong game services directly, but facilitate communication and interaction between users.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">4.2 Independent Parties</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Our users, both players, are independent parties responsible for their own game sessions. Players act independently and are not employed by Retropong.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">4.3 User Responsibility</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">It is the responsibility of the players to select their opponents carefully and to ensure fair gameplay.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">4.4 Quality Guarantee</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong does not guarantee the quality or results of the games. We do not offer any guarantees regarding the skill, experience, or professionalism of players. We are not responsible for the quality or outcome of the games played on our platform.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">4.5 Liability</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">We are not liable for any direct, indirect, incidental, consequential, or special damages or losses arising from the use of our platform or any services offered by users. Users use the platform at their own risk.</p>
				<h2 class="mb-4 mt-6 text-4xl">5. Intellectual Property</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">5.1 Ownership of Retropong</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">All content on the platform, including but not limited to text, images, logos, graphics, software, and audiovisual materials, are owned by Retropong and protected by intellectual property rights, including copyrights and trademark rights.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">5.2 User Rights</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Users of the platform are granted a limited, non-exclusive right to use the content of the platform for personal use, in accordance with the general terms of use.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">5.3 Prohibited Use</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Users are prohibited from copying, reproducing, distributing, modifying, creating derivative works, publicly displaying, or otherwise exploiting the content of the platform without explicit written permission from Retropong.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">5.4 User Contributions</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">By posting contributions such as reviews, feedback, or other user content, users grant Retropong a worldwide, royalty-free, transferable, sublicensable right to use, reproduce, modify, distribute, and publicly display these contributions.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">5.5 Infringement Notification</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong respects the intellectual property rights of others. If you believe your intellectual property rights have been infringed upon on the platform, please submit a written notification to info@retropong.com, including all relevant details of the alleged infringement.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">5.6 Modifications and Updates</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong reserves the right to modify, update, or change the content of the platform at any time without prior notice.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">5.7 Trademark Protection</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">All trademarks, logos, and service marks displayed on the platform are the property of their respective owners. The use of these marks without written consent from the owner is strictly prohibited.</p>
				<h2 class="mb-4 mt-6 text-4xl">6. Complaint Procedure</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">6.1 Filing Complaints</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Users who wish to file a complaint regarding Retropong services can do so by emailing info@retropong.com with the subject “Complaint.” The complaint should include detailed information, such as dates, times, involved parties, and a full description of the issue.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">6.2 Acknowledgment of Receipt</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong will send an acknowledgment of receipt within 2 business days of receiving the complaint. The acknowledgment will contain information about the expected timeline for investigating and resolving the complaint.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">6.3 Investigation of Complaints</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong will investigate the submitted complaint and gather all relevant information. If necessary, Retropong may contact the complainant for additional details or clarification.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">6.4 Resolution of Complaints</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong aims to resolve complaints as quickly and effectively as possible. Within 7 business days after the investigation, Retropong will inform the complainant about the outcome and any measures taken, if applicable.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">6.5 Communication with the Complainant</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong will keep all communication with the complainant professional and clear. If the complainant is not satisfied with the proposed solution, Retropong will discuss further steps to reach a satisfactory resolution.</p>
				<h2 class="mb-4 mt-6 text-4xl">7. Termination of Use</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">7.1 User Initiated</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Users have the right to terminate their account at any time. To close the account, the user must submit a written request to info@retropong.com, stating the intention to close the account. Retropong will respond within 2 business days and confirm the steps for account termination.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">7.2 Termination by Retropong</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong reserves the right to terminate an account, at its discretion and without prior notice, if there is a violation of the terms of use. Retropong may terminate an account if there are signs of fraudulent activities, intellectual property rights violations, or other misconduct.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">7.3 No Return of Data</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Upon account termination, users have no right to the return of any posted content, including but not limited to game history, reviews, or other contributions to the platform.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">7.4 Consequences of Termination</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">After account termination, the user loses access to all features of Retropong.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">7.5 Account Removal</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Retropong reserves the right to remove accounts that have been inactive for an extended period. We are not liable for data loss when an account is removed.</p>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">7.6 Data Retention after Termination</h3>
						<p class="mb-6 text-lg lg:text-xl md:px-14">After termination, Retropong reserves the right to retain certain information and data from the deleted account in accordance with the privacy policy. This data is retained for administrative purposes and to comply with legal obligations.</p>
				<h2 class="mb-4 mt-6 text-4xl">9. Privacy Policy</h2>
						<p class="mb-6 text-lg lg:text-xl md:px-14">Click here for more information on our privacy policy.</p>
				<h2 class="mb-4 mt-6 text-4xl">10. Cookie Policy</h2>
						<p class="text-lg lg:text-xl md:px-14">Click here for more information on our cookie policy.</p>
		</div>
	</section>
  	${renderFooter()}
  `;
}
