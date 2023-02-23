import { OurTeam } from '@/components/sections/OurTeam'
import { AboutUs } from '@/components/sections/AboutUs'
import { Promotions } from '@/components/sections/Promotions/Promotions'
import { Advantages } from '@/components/sections/Advantages/Advantages'

export default function Home() {
  return (
    <>
      <Promotions />
      <Advantages />
      <AboutUs />
      <OurTeam />
    </>
  )
}
