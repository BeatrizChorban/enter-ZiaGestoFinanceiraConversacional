import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				brand: {
					forest: 'hsl(var(--forest))',
					'forest-deep': 'hsl(var(--forest-deep))',
					cream: 'hsl(var(--cream))',
					sand: 'hsl(var(--sand))',
					cyan: 'hsl(var(--cyan))',
					'cyan-soft': 'hsl(var(--cyan-soft))',
					jade: 'hsl(var(--jade))',
					'jade-soft': 'hsl(var(--jade-soft))',
					wa: 'hsl(var(--wa))',
					olive: 'hsl(var(--olive))'
				}
			},
			fontFamily: {
				display: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'typing-bounce': {
					'0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.35' },
					'30%': { transform: 'translateY(-4px)', opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'wa-pulse': {
					'0%': { boxShadow: '0 0 0 0 hsl(var(--wa) / 0.45)' },
					'100%': { boxShadow: '0 0 0 20px hsl(var(--wa) / 0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee 30s linear infinite',
				'typing-bounce': 'typing-bounce 1.3s ease-in-out infinite',
				float: 'float 7s ease-in-out infinite',
				'wa-pulse': 'wa-pulse 2.4s ease-out infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate]
} satisfies Config;
