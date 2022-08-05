import { useEffect, useState } from 'react'
import React from 'react'
import { createContext } from 'react'
const defaultProps = {
  visiblity: false,
  type: 'normal',
  component: <></>,
  onAction: () => {},
  extraaInfo: {}
}
export const CustomPopUpModalContext = createContext({
  modal:defaultProps,
  showModal: ({ component, type, onAction = () => {}, extraaInfo = {} }) => {
   
  },
  hideModal: () => {
  
  }
})
export const modalType = {
  normal: 'NORMAL',
  large: 'LARGE',
  medium: 'MEDIUM',
  customposition: 'CUSTOM_POSITION'
}
const Modal = ({
  type,
  show = false,
  onBackBtnClick,
  component,
  top,
  left
}) => {
  const [visiblity, setVisiblity] = useState(show)
  // let TimeOut = 0
  useEffect(() => {
    let TimeOut = 0
    if (TimeOut) {
      clearTimeout(TimeOut)
    }
    if (!show) {
      TimeOut = setTimeout(() => {
        setVisiblity(false)
      }, 300)
    } else {
      setVisiblity(true)
    }

    return () => clearTimeout(TimeOut)
  }, [show])
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const onResize = () => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth })
  }
  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (visiblity)
    return (
      <div
        className='df row p-fixed pop-up-container'
        style={{ height: windowSize.height }}
      >
        <div className='df center p-relative fit-content subadmin-p-4'>
          <div
            className={`fit-content p-absolute ${type !==
              modalType.customposition && 'pop-up-backdrop'}`}
            onClick={onBackBtnClick}
            style={{ zIndex: 0 }}
          ></div>
          {type !== modalType.customposition && (
            <div
              key={show ? ' enter-animation' : ' exit-animation '}
              className={`df pop-up-model${
                type === modalType.large
                  ? '-large '
                  : type === modalType.medium
                  ? '-medium '
                  : ''
              } ${show ? ' enter-animation' : ' exit-animation '} p-relative`}
              style={{ zIndex: 1 }}
            >
              {component}
            </div>
          )}
          {type === modalType.customposition && (
            <div
              className={`df pop-up-model-auto-width ${
                show ? ' enter-fade-animation' : ' exit-fade-animation '
              }`}
              style={{ zIndex: 1, position: 'absolute', top, left }}
            >
              {component}
            </div>
          )}
        </div>
      </div>
    )

  return <></>
}
const CustomPopUpModalProvider = ({ children }) => {
  const [modal, setModal] = useState(defaultProps)

  const providerVal = {
    modal,
    showModal: ({ component, type, onAction = () => {}, extraaInfo = {} }) => {
      setModal({
        ...modal,
        visiblity: true,
        component,
        type,
        onAction,
        extraaInfo
      })
    },
    hideModal: () => {
      setModal({ ...modal, visiblity: false, onAction: () => {} })
    }
  }
  return (
    <CustomPopUpModalContext.Provider value={providerVal}>
      <>
        <Modal
          show={modal.visiblity}
          type={modal.type}
          component={modal.component}
          onBackBtnClick={providerVal.hideModal}
          top={modal.extraaInfo.top ? modal.extraaInfo.top : 0}
          left={modal.extraaInfo.left ? modal.extraaInfo.left : 0}
        />
        {children}
      </>
    </CustomPopUpModalContext.Provider>
  )
}
export default CustomPopUpModalProvider
