import { OurTeam } from '@/components/sections/OurTeam'
import { AboutUs } from '@/components/sections/AboutUs'
import { FirstScreen } from '@/components/sections/FirstScreen'
import { Services } from '@/components/sections/Services/Services'
import { Promotions } from '@/components/sections/Promotions/Promotions'
import { Advantages } from '@/components/sections/Advantages/Advantages'

export default function Home() {
  return (
    <>
      <FirstScreen />
      <Services />
      <Promotions />
      <Advantages />
      <AboutUs />
      <OurTeam />
    </>
  )
}
