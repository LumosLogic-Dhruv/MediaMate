import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security and performance headers
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/:path*",
        headers: [
          // Security Headers
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          // Content Security Policy (adjust as needed for your external resources)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join("; ")
          }
        ]
      },
      {
        // Long-term caching for static assets (1 year)
        source: "/(.*)\\.(ico|png|svg|jpg|jpeg|gif|webp|avif|woff|woff2|ttf|eot)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        // Cache static JS/CSS files (1 year - they have hashes in filenames)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        // Short cache for HTML pages (revalidate frequently)
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate"
          }
        ]
      }
    ];
  },

  // Image optimization configuration
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Long cache TTL for optimized images (1 year)
    minimumCacheTTL: 31536000,
    // Enable remote patterns if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediamate.com",
      },
    ],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    // Optimize CSS
    optimizeCss: true,
  },

  // Bundle analyzer (enable in development when needed)
  // Add @next/bundle-analyzer package if you want to analyze bundle size

  // Strict mode for better development experience
  reactStrictMode: true,

  // SWC minification is default in Next.js 13+
  // Ensure tree shaking and dead code elimination

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Enable more aggressive tree shaking
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: true,
      };
    }

    // SVG handling with SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
