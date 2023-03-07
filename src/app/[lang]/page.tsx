import { OurTeam } from './OurTeam'
import { AboutUs } from './AboutUs'
import { FirstScreen } from 'src/components/sections/FirstScreen'
import { Services } from 'src/components/sections/Services/Services'
import { Promotions } from 'src/components/sections/Promotions/Promotions'
import { Advantages } from 'src/components/sections/Advantages/Advantages'
import { Locale } from 'src/config/i18n'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <FirstScreen />
      <Services />
      <Promotions />
      <Advantages />
      {/* @ts-expect-error Server Component */}
      <AboutUs lang={lang} />
      {/* @ts-expect-error Server Component */}
      <OurTeam lang={lang} />
    </>
  )
}
