import './Logo.scss';

type Variant = 'header' | 'brand' | 'footer';

const sizes: Record<Variant, { src: string; width: number; height: number }> = {
  header: { src: '/images/logo.png', width: 139, height: 42 },
  brand: { src: '/images/logo-marca.png', width: 117, height: 35 },
  footer: { src: '/images/logo.png', width: 164, height: 50 },
};

export default function Logo({ variant = 'header' }: { variant?: Variant }) {
  const { src, width, height } = sizes[variant];
  return (
    <a href="/" className="logo" aria-label="Econverse - página inicial">
      <img src={src} width={width} height={height} alt="Econverse" />
    </a>
  );
}
