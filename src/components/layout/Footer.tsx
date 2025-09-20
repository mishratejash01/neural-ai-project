'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LinkedinIcon } from 'lucide-react';
import neuralAILogo from '@/assets/neural-ai.jpeg';

// Helper types and data for the footer
interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#features' },
			{ title: 'Pricing', href: '#pricing' },
			{ title: 'Testimonials', href: '#testimonials' },
			{ title: 'Integration', href: '/' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: '/faq' },
			{ title: 'About Us', href: '/about' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Services', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Help', href: '/help' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'LinkedIn', href: 'https://www.linkedin.com/company/autoneuralai', icon: LinkedinIcon },
		],
	},
];


// Main Footer Component
const Footer = () => {
	return (
		<footer className="gradient-hero border-t border-border w-full">
			<div className="container mx-auto px-4 py-16">
				<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
					<AnimatedContainer className="space-y-4">
						<div className="flex items-center space-x-3">
							<img src={neuralAILogo} alt="Neural AI Logo" className="h-10" />
							<span className="text-xl font-bold text-neon">Neural AI</span>
						</div>
						<p className="text-muted-foreground mt-8 text-sm md:mt-0">
							© {new Date().getFullYear()} Neural AI. All rights reserved.
						</p>
					</AnimatedContainer>

					<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="mb-10 md:mb-0">
									<h3 className="font-semibold text-foreground">{section.label}</h3>
									<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="hover:text-primary inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-1 size-4" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};


// Helper component for animations
type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default Footer;
