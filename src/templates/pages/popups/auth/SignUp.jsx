const SignUp = ({ onSignInBtnClick, onSubmit, handleValues, loading }) => {
  return (
    <div className=' radius-1 p-1 column row ' style={{ maxHeight: '100%' }}>
      <div
        className=' row  overflow-y-scroll'
        style={{ maxHeight: '100%' }}
      >
        <form onSubmit={onSubmit} action='' className=' bg-light df row column p-3'>
          <h1 className='h1 bold-500 df'>Sign Up</h1>
          <h3 className='text-danger h2 center'>
            {handleValues('get', 'err')}
          </h3>
          <input
            value={handleValues('get', 'email')}
            onChange={e => {
              handleValues('set', 'email', e.target.value)
            }}
            disabled={loading}
            placeholder='Enter email'
            type={'email'}
            name='email'
            className='mt-3  p-6 pt-5 pb-5 df row h2 '
            id=''
          ></input>
          <input
            value={handleValues('get', 'password')}
            onChange={e => {
              handleValues('set', 'password', e.target.value)
            }}
            disabled={loading}
            placeholder='Enter Password'
            type={'password'}
            name='password'
            className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
            id=''
          ></input>
          <input
            value={handleValues('get', 'name')}
            onChange={e => {
              handleValues('set', 'name', e.target.value)
            }}
            disabled={loading}
            placeholder='Enter name'
            type={'text'}
            name='name'
            className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
            id=''
          ></input>

          <input
            value={handleValues('get', 'mobile')}
            onChange={e => {
              handleValues('set', 'mobile', e.target.value)
            }}
            disabled={loading}
            placeholder='Enter mobile'
            type={'text'}
            name='mobile'
            className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
            id=''
          ></input>
          <textarea
            value={handleValues('get', 'address')}
            onChange={e => {
              handleValues('set', 'address', e.target.value)
            }}
            disabled={loading}
            placeholder='Enter address'
            name='address'
            id=''
            className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
            rows='5'
          ></textarea>

          <button
            disabled={loading}
            className='df row center bg-dark p-5 text-light h2 pointer'
          >
           {loading ? "Loading..." : 'Sign Up'}
          </button>
          <div className='df row center mt-3'>
            <span className='h3 text-2 ' href=''>
              Dont have and account?
              <a className='underline' onClick={onSignInBtnClick}>
                {' '}
                Sign In
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
