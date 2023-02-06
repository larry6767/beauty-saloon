/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// ;ccc

import React from 'react'
// Styles
import {
  TopBorder,
  BottomBorder,
  ModalBackdrop,
  ModalView,
  ModalCloseButton,
  ModalWrapper,
  FlexButton,
} from './style'

// Types
import { FC } from 'react'
import { ModalProps } from './types'

export const Modal: FC<ModalProps> = ({
  children,
  renderEmpty = <h3>Loading...</h3>,
  // Storeon
  state,
  event,
  data,
  modal,
  // General Styles

  // Menu Styles
  isMenu = false,
}) => {
  return (
    <ModalBackdrop
      isVisible={modal}
      menu={isMenu}
      onClick={() => state(event, data)}
    >
      <ModalWrapper menu={isMenu} onClick={(e) => e.stopPropagation()}>
        <TopBorder menu={isMenu} />
        <FlexButton>
          <ModalCloseButton onClick={() => state(event, data)}>
            X
          </ModalCloseButton>
        </FlexButton>

        <ModalView menu={isMenu} isVisible={modal}>
          {renderEmpty || children}
        </ModalView>
        <BottomBorder menu={isMenu} />
      </ModalWrapper>
    </ModalBackdrop>
  )
}

// Tests
import { StoreonDispatch } from 'storeon'
import { Events } from '../../store/store'

export const TestButton = ({
  children,
  dispatch,
  event,
  data,
}: {
  children: string
  dispatch: StoreonDispatch<Events> | (() => void)
  event: 'menu' | 'toggle'
  data: boolean
}) => {
  return (
    <button
      style={{
        position: 'relative',
        left: '180px',
        minWidth: '80px',
        minHeight: '40px',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '20px',
        fontWeight: 700,
        borderRadius: '8px',
        zIndex: 1,
      }}
      onClick={() => {
        dispatch(event, data)
      }}
    >
      {!data ? children : `${children.replace(/OFF/, '')} ON`.toUpperCase()}
    </button>
  )
}

export const TestContent = () => {
  return (
    <>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
        suscipit recusandae debitis nesciunt libero aperiam velit, architecto
        iusto rem illum modi impedit earum perspiciatis saepe, ipsa eos placeat
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        autem suscipit recusandae debitis nesciunt libero aperiam velit,
        architecto iusto rem illum modi impedit earum perspiciatis saepe, ipsa
        eos placeat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam autem suscipit recusandae debitis nesciunt libero aperiam
        velit, architecto iusto rem illum modi impedit earum perspiciatis saepe,
        ipsa eos placeat aliquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam autem suscipit recusandae debitis nesciunt libero
        aperiam velit, architecto iusto rem illum modi impedit earum
        perspiciatis saepe, ipsa eos placeat aliquam.
      </p>
    </>
  )
}
