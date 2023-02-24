import { OurTeam } from '@/components/sections/OurTeam'
import { AboutUs } from '@/components/sections/AboutUs'
import { Services } from '@/components/sections/Services/Services'
import { Promotions } from '@/components/sections/Promotions/Promotions'
import { Advantages } from '@/components/sections/Advantages/Advantages'

export default function Home() {
  return (
    <>
      <Services />
      <Promotions />
      <Advantages />
      <AboutUs />
      <OurTeam />
    </>
  )
}
