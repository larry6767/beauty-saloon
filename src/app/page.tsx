'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Link } from 'src/components/generic'

const inter = Inter({ subsets: ['latin'] })

// Test @emotion/react @emotion/styled
import styled from '@emotion/styled'

const StyledComponent = styled.h1`
  color: pink;
`
const TestComponent = () => {
  return (
    <>
      <StyledComponent>Test Component</StyledComponent>
    </>
  )
}

// Test Modal View
import { useStoreon } from 'storeon/react'
import { State, Events } from '@/store/store'
import { TestButton, Modal, TestContent } from '@/components/Modal/Modal'

export default function Home() {
  const { dispatch, modal } = useStoreon<State, Events>('modal')
  const { menu } = useStoreon<State, Events>('menu')
  return (
    <main className={styles.main}>
      <Link>Some Link</Link>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <TestComponent />
        {/* Test Modal View */}

        <TestButton dispatch={dispatch} event={'menu'} data={menu}>
          MENU OFF
        </TestButton>
        <TestButton dispatch={dispatch} event={'toggle'} data={modal}>
          TEST
        </TestButton>
        <Modal
          renderEmpty={<TestContent />}
          isMenu={menu}
          modal={modal}
          state={dispatch}
          event={'toggle'}
          data={!modal}
        ></Modal>

        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
