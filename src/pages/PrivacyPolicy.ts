import { renderNavBar } from '../components/NavBar';
import { renderFooter } from '../components/Footer';

export function renderPrivacyPolicy(): string {
    return `
  	${renderNavBar()}
    <section class="bg-primary-background text-white">
		<div class="container py-8 px-5 md:px-10">
			<h1 class="mb-4 pt-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl">Privacy policy of Retropong</h1>
				<h3 class="mb-4 mt-6 text-2xl md:px-5">Last updated: February 16, 2025</h3>
					<p class="mb-6 text-lg lg:text-xl md:px-10">RetroPong ("we," "our," "us," "the platform") is an online gaming platform where users can play Pong against remote opponents. This privacy policy explains how we collect, use, and protect your personal data when you visit our website or use our services.</p>
				<h2 class="mb-4 mt-6 text-4xl">1. Data We Collect</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">1.1 Information you provide</h3>
						<p class="mb-2 text-lg lg:text-xl md:px-10">When registering on RetroPong, we may collect the following personal data:</p>
						<ul class="list-disc mb-6 text-lg lg:text-xl md:px-16">
							<li>Username</li>
							<li>Email address</li>
						</ul>
						<p class="mb-2 text-lg lg:text-xl md:px-10">If you participate in matches or tournaments, we also collect:</p>
						<ul class="list-disc mb-6 text-lg lg:text-xl md:px-16">
							<li>Gameplay statistics (e.g. wins, losses)</li>
						</ul>
				<h2 class="mb-4 mt-6 text-4xl">2. Purpose of Data Collection</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">2.1 Service Functionality</h3>
						<p class="mb-2 text-lg lg:text-xl md:px-10">We use collected data to:</p>
						<ul class="list-disc mb-6 text-lg lg:text-xl md:px-16">
							<li>Provide and improve the RetroPong gaming experience.</li>
							<li>Manage user accounts and authentication.</li>
							<li>Track player progress, leaderboards, and achievements.</li>
						</ul>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">2.2 Communication</h3>
						<p class="mb-2 text-lg lg:text-xl md:px-10">We may contact you via email for:</p>
						<ul class="list-disc mb-6 text-lg lg:text-xl md:px-16">
							<li>Service updates and feature announcements.</li>
							<li>Important security notifications.</li>
						</ul>
				<h2 class="mb-4 mt-6 text-4xl">3. Data Sharing and Disclosure</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.1 Third-Party Services</h3>
						<p class="mb-2 text-lg lg:text-xl md:px-10">We do not sell or share your personal data with third parties, except for essential services such as:</p>

Game matchmaking – To connect players.
Website hosting & analytics – To improve platform performance.
					<h3 class="mb-4 mt-6 text-2xl md:px-5">3.2 Legal Requirements</h3>
						<p class="mb-2 text-lg lg:text-xl md:px-10">We may disclose personal data if required by law or necessary to protect our platform’s integrity and users’ safety.</p>

				<h2 class="mb-4 mt-6 text-4xl">4. User Rights & Data Management</h2>
					<h3 class="mb-4 mt-6 text-2xl md:px-5">4.1 Access, Correction & Deletion</h3>
						<p class="mb-2 text-lg lg:text-xl md:px-10">You have the right to:</p>

Access your stored data.
Request corrections to inaccurate information.
Request deletion of your account and associated data.
To make any of these requests, contact us at support@retropong.com.

					<h3 class="mb-4 mt-6 text-2xl md:px-5">4.2 Data Retention</h3>
						<p class="mb-2 text-lg lg:text-xl md:px-10">We retain personal data only as long as necessary for gameplay and account services. If you delete your account, we will remove your data unless a longer retention period is required by law.</p>

				<h2 class="mb-4 mt-6 text-4xl">5. Data Security</h2>
						<p class="mb-2 text-lg lg:text-xl md:px-10">We implement appropriate security measures to protect personal data from unauthorized access, loss, or misuse.</p>

				<h2 class="mb-4 mt-6 text-4xl">6. Changes to This Privacy Policy</h2>
						<p class="mb-2 text-lg lg:text-xl md:px-10">We reserve the right to update this privacy policy at any time. Changes take effect immediately upon posting on this page. We encourage users to review this page periodically for updates.</p>

						<p class="mb-2 text-lg lg:text-xl md:px-10">For any questions regarding this policy, contact support@retropong.com.</p>
		</div>
	</section>
  	${renderFooter()}
  `;
}
