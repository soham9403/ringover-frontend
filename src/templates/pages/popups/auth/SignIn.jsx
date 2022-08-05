const SignIn = ({ onSignUpBtnClick, onSubmit, handleValues, loading }) => {
  return (
    <div className=' radius-1 p-1 column row ' style={{ maxHeight: '100%' }}>
      <div
        className='bg-light row p-3 overflow-y-scroll'
        style={{ maxHeight: '100%' }}
      >
        <form onSubmit={onSubmit} action='' className='df row column'>
          <h1 className='h1 bold-500 df'>Sign In</h1>
          <h3 className="text-danger h2 center">{handleValues('get', 'err')}</h3>
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

          <button disabled={loading} className='df row center bg-dark p-5 text-light h2 pointer'>
            {loading ? "Loading..." : 'Sign In'}
          </button>
          <div className='df row center mt-3'>
            <span className='h3 text-2 ' href=''>
              Dont Have An Account?
              <a className='underline' onClick={onSignUpBtnClick}>
                {' '}
                Sign Up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignIn
