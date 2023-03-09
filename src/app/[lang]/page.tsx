import { OurTeam } from './OurTeam'
import { AboutUs } from './AboutUs'
import { FirstScreen } from 'src/components/sections/FirstScreen'
import { Services } from 'src/components/sections/Services/Services'
import { Promotions } from 'src/components/sections/Promotions/Promotions'
import { Advantages } from 'src/components/sections/Advantages/Advantages'
import { getDictionary } from 'src/config/i18n/getDictionary'
import { Locale } from 'src/config/i18n'
import { BestPrices } from '@/components/sections/BestPrices/BestPrices'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '15px 0 0',
        }}
      >
        {dictionary['server-component'].welcome}
      </div>
      <FirstScreen />
      <Services />
      <BestPrices />
      <Promotions />
      <Advantages />
      {/* @ts-expect-error Server Component */}
      <AboutUs lang={lang} />
      {/* @ts-expect-error Server Component */}
      <OurTeam lang={lang} />
    </>
  )
}
