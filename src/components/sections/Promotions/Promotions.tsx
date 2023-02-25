import React from 'react'
// Styles
import {
  PromotionsWrapper,
  PromotionsHeader,
  PromotionsContentWrapper,
  PromotionsHeaderWrapper,
  PromotionsLink,
} from './styles'
import { promotionsContent } from './fixtures'
import { PromotionsList } from './components/PromotionsList/PromotionsList'

export const Promotions = () => {
  return (
    <>
      <PromotionsWrapper>
        <PromotionsContentWrapper>
          <PromotionsHeaderWrapper>
            <PromotionsHeader>Акции</PromotionsHeader>
            <PromotionsLink>Все акции</PromotionsLink>
          </PromotionsHeaderWrapper>
          <PromotionsList data={promotionsContent} />
        </PromotionsContentWrapper>
      </PromotionsWrapper>
    </>
  )
}
