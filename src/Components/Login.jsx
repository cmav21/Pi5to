import React, { Component } from 'react';


function LoginHeader(props) {
  return(
    <div className = {'LoginHeader'}>
      <h1 className = {'text-center'}>
        {' Repositorio digital de bibliotecas'}
      </h1>
      <p className={'lead text-center'}>
        {'Iniciar Sesión'}
      </p>
    </div>
  )
}
class Login extends Component {

  render () {
    return (
      <div className={'wrapper'}>
        <div id={'content'}>
          <LoginHeader />
          <div className={'jumbotron'}>
            <div className={'row justify-content-center'}>
              <div className={'col-md-6 order-md-1'}>
                <form>
                  <div className={'form-section'}>
                    <div className={'row'}>
                      <div className={'col-md-12 mb-3'}>
                        <label htmlFor="userName">{'Usuario'}</label>
                        <input 
                          className={'form-control '}
                          id={'userName'} 
                          type="text"
                          onChange={this.handleUser}
                          onKeyPress={this.handleEnter}
                        />
                      </div>
                      <div className={'col-md-12 mb-3'}>
                        <label htmlFor="userPass">{'Contraseña'}</label>
                        <input
                          className={'form-control '}
                          id={'userPass'}
                          type="password"
                          onChange={this.handlePass}
                          onKeyPress={this.handleEnter}
                        />
                      </div>
                      <div className={'col-md-12 mb-3'}>
                        <button
                          className={'btn btn-primary'}
                          type={'button'}
                          onClick={this.handleLogin}>
                          {'Entrar'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
