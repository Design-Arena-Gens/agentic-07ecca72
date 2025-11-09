'use client'

import { useState } from 'react'
import styles from './page.module.css'

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  BTC: 0.000014,
  ETH: 0.00031,
  ADA: 23.15
}

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'BTC', symbol: '₿', name: 'Bitcoin' },
  { code: 'ETH', symbol: 'Ξ', name: 'Ethereum' },
  { code: 'ADA', symbol: '₳', name: 'Cardano' }
]

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const basePrice = 59.99

  const formatPrice = (currency: string) => {
    const rate = exchangeRates[currency as keyof typeof exchangeRates]
    const price = basePrice * rate
    const currencyObj = currencies.find(c => c.code === currency)

    if (currency === 'BTC' || currency === 'ETH') {
      return `${currencyObj?.symbol}${price.toFixed(6)}`
    } else if (currency === 'ADA') {
      return `${currencyObj?.symbol}${price.toFixed(2)}`
    } else {
      return `${currencyObj?.symbol}${price.toFixed(2)}`
    }
  }

  const getCurrentPrice = () => {
    const rate = exchangeRates[selectedCurrency as keyof typeof exchangeRates]
    const price = basePrice * rate
    const currencyObj = currencies.find(c => c.code === selectedCurrency)

    if (selectedCurrency === 'BTC' || selectedCurrency === 'ETH') {
      return `${currencyObj?.symbol}${price.toFixed(6)}`
    } else if (selectedCurrency === 'ADA') {
      return `${currencyObj?.symbol}${price.toFixed(2)}`
    } else {
      return `${currencyObj?.symbol}${price.toFixed(2)}`
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>GAMESTORE</div>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Store</a>
            <a href="#" className={styles.navLink}>Library</a>
            <a href="#" className={styles.navLink}>Community</a>
          </nav>
        </div>

        <div className={styles.gameDetail}>
          <div className={styles.mediaSection}>
            <div className={styles.heroImage}>
              <div className={styles.heroPlaceholder}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 10L70 40H100L76 58L86 88L60 70L34 88L44 58L20 40H50L60 10Z" fill="url(#gradient)" opacity="0.3"/>
                  <defs>
                    <linearGradient id="gradient" x1="20" y1="10" x2="100" y2="88" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#66c0f4"/>
                      <stop offset="1" stopColor="#1a9fff"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className={styles.thumbnails}>
              <div className={styles.thumbnail}></div>
              <div className={styles.thumbnail}></div>
              <div className={styles.thumbnail}></div>
              <div className={styles.thumbnail}></div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.gameHeader}>
              <h1 className={styles.gameTitle}>Cyberpunk Odyssey</h1>
              <div className={styles.gameMeta}>
                <span className={styles.developer}>Pixel Studios</span>
                <span className={styles.releaseDate}>Released: Dec 2024</span>
              </div>
            </div>

            <div className={styles.description}>
              <p>Immerse yourself in a breathtaking open-world adventure set in a dystopian future. Experience cutting-edge graphics, deep RPG mechanics, and a gripping narrative that adapts to your choices.</p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L3 10L4.5 8.5L8 12L15.5 4.5L17 6L8 15Z" fill="#66c0f4"/>
                  </svg>
                  <span>Single Player</span>
                </div>
                <div className={styles.feature}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L3 10L4.5 8.5L8 12L15.5 4.5L17 6L8 15Z" fill="#66c0f4"/>
                  </svg>
                  <span>Multiplayer Co-op</span>
                </div>
                <div className={styles.feature}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L3 10L4.5 8.5L8 12L15.5 4.5L17 6L8 15Z" fill="#66c0f4"/>
                  </svg>
                  <span>Cloud Saves</span>
                </div>
                <div className={styles.feature}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L3 10L4.5 8.5L8 12L15.5 4.5L17 6L8 15Z" fill="#66c0f4"/>
                  </svg>
                  <span>Achievements</span>
                </div>
              </div>
            </div>

            <div className={styles.systemReqs}>
              <h3>System Requirements</h3>
              <div className={styles.reqsGrid}>
                <div className={styles.reqColumn}>
                  <h4>Minimum</h4>
                  <ul>
                    <li><strong>OS:</strong> Windows 10 64-bit</li>
                    <li><strong>Processor:</strong> Intel Core i5-3570K</li>
                    <li><strong>Memory:</strong> 8 GB RAM</li>
                    <li><strong>Graphics:</strong> GTX 970 / RX 570</li>
                  </ul>
                </div>
                <div className={styles.reqColumn}>
                  <h4>Recommended</h4>
                  <ul>
                    <li><strong>OS:</strong> Windows 11 64-bit</li>
                    <li><strong>Processor:</strong> Intel Core i7-8700K</li>
                    <li><strong>Memory:</strong> 16 GB RAM</li>
                    <li><strong>Graphics:</strong> RTX 3070 / RX 6800</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.purchaseSection}>
              <div className={styles.priceBox}>
                <div className={styles.priceHeader}>
                  <span className={styles.buyText}>Buy Now</span>
                  <div className={styles.priceDisplay}>
                    {getCurrentPrice()}
                  </div>
                </div>

                <div className={styles.currencySelector}>
                  <label className={styles.currencyLabel}>Currency:</label>
                  <div className={styles.currencyButtons}>
                    {currencies.map(currency => (
                      <button
                        key={currency.code}
                        className={`${styles.currencyBtn} ${selectedCurrency === currency.code ? styles.active : ''}`}
                        onClick={() => setSelectedCurrency(currency.code)}
                      >
                        {currency.symbol} {currency.code}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.allPrices}>
                  <div className={styles.priceGrid}>
                    {currencies.map(currency => (
                      <div key={currency.code} className={styles.priceItem}>
                        <span className={styles.priceCurrency}>{currency.name}</span>
                        <span className={styles.priceValue}>{formatPrice(currency.code)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={styles.purchaseBtn}>
                  <span>Add to Cart</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button className={styles.wishlistBtn}>Add to Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
