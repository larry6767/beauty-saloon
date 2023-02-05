'use client'
import React from 'react'

// Storeon
import { useStoreon } from 'storeon/react'
import { State, Events } from '../../store'

// Styles
import {
  BottomBorder,
  ModalBackdrop,
  ModalView,
  ModalCloseButton,
  ModalWrapper,
  FlexButton,
} from './style'

// Types

type Props = {
  children?: React.ReactNode
  renderEmpty?: React.ReactNode
}

export function Modal({ children, renderEmpty = <h3>Loading...</h3> }: Props) {
  const { dispatch, modal } = useStoreon<State, Events>('modal')

  return (
    <ModalBackdrop isVisible={modal} onClick={() => dispatch('toggle', !modal)}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <FlexButton>
          <ModalCloseButton
            onClick={() => {
              dispatch('toggle', !modal)
            }}
          >
            X
          </ModalCloseButton>
        </FlexButton>

        <ModalView isVisible={modal}>{renderEmpty || children}</ModalView>
        <BottomBorder />
      </ModalWrapper>
    </ModalBackdrop>
  )
}

// Tests
export const TestButton = ({ children }: { children: string }) => {
  const { dispatch, modal } = useStoreon<State, Events>('modal')

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
        dispatch('toggle', modal)
      }}
    >
      {modal === false ? children : String(modal).toUpperCase()}
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
