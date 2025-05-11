import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"], // Keep class strategy if a future toggle is needed, but default to light.
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Default body font
        display: ['var(--font-manrope)', 'sans-serif'], // Default heading font
      },
  		colors: {
        border: 'hsl(var(--border))',
        input: {
          DEFAULT: 'hsl(var(--input))', // Background of input
          border: 'hsl(var(--input-border))', // Border of input
        },
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // App specific colors from the image
        'app-green': 'hsl(var(--app-green))',
        'app-orange': 'hsl(var(--app-orange))',
        'app-light-purple': 'hsl(var(--app-light-purple))',
        'app-light-green': 'hsl(var(--app-light-green))',
        'app-light-orange': 'hsl(var(--app-light-orange))',
        'app-light-pink': 'hsl(var(--app-light-pink))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // Sidebar colors remain, though sidebar component might not be used in this new design.
        // If not used, these can be cleaned up later.
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))', // These will need to be updated if sidebar is used
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
  		},
  		borderRadius: {
  			lg: 'calc(var(--radius) + 4px)', // Image uses more rounded corners, e.g., 0.75rem if --radius is 0.5rem
  			md: 'var(--radius)',
  			sm: 'calc(var(--radius) - 2px)',
        xl: 'calc(var(--radius) + 8px)', // For larger cards
        full: '9999px',
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' }, /* Subtler Y transform */
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Removed gradientChange as it's not in the new design's hero
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards', // Shorter duration
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
