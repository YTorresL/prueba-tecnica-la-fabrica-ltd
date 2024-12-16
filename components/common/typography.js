export const TYPO_STYLES = {
  VARIANT: {
    TITLE: 'title',
    SUBTITLE: 'subtitle',
    BODY: 'body',
    CAPTION: 'caption',
    CARD: 'card',
    MINI: 'mini',
    QR_TITLE: 'qrTitle'
  },
  COLOR: {
    GRAY: 'gray'
  }
}

const variantStyles = {
  title: 'text-3xl md:text-6xl font-extrabold text-center',
  subtitle: 'text-2xl md:text-4xl font-extrabold text-center',
  qrTitle: 'text-xl md:text-2xl font-bold',
  body: 'text-base md:text-lg',
  caption: 'font-black text-center text-base md:text-xl',
  card: 'text-left md:text-center font-bold xl:whitespace-nowrap',
  mini: 'text-xs md:text-sm'
}

const colorStyles = {
  gray: 'text-gray-500'
}

export function Typography({
  children,
  className,
  variant,
  color,
  props,
  tag
}) {
  const styles = [variantStyles[variant], colorStyles[color], className]
    .filter(Boolean)
    .join(' ')

  const Tag = tag || 'p'

  return (
    <Tag className={styles} {...props}>
      {children}
    </Tag>
  )
}
