import usePortal from 'react-useportal'

export const Modal = () => {
  const { ref, openPortal, closePortal, isOpen, Portal } = usePortal()

  return (
    <>
      <button className='add-cart' ref={ref} onClick={() => openPortal()}>
        Open Portal
      </button>
      {isOpen && (
        <Portal>
          <section style={{ background: 'tomato' }}>
            <p>
              This Portal handles its own state.
              outside of me.
              <button onClick={() => closePortal}>Close me!</button>, hit ESC or click
            </p>
          </section>
        </Portal>
      )}
    </>
  )
}
