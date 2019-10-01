import React from 'react'
import FirebaseContext from '../../firebase/context'

function ForgotPassword() {
  const { firebase } = React.useContext(FirebaseContext)
  const [resetPasswordEmail, setResetPasswordEmail] = React.useState('')
  const [isPasswordReset, setIsPasswordReset] = React.useState(false)
  const [passwordResetError, setIsPasswordResetError] = React.useState(null)

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail)
      setIsPasswordReset(true)
    } catch (err) {
      console.error("💀 💀 💀 error sending email", err )
      setIsPasswordResetError(err.message)
      setIsPasswordReset(false)
    }
  }

  return (
    <div>
      <input
        type="email"
        className="input"
        placeholder="provide your account email"
        onChange={event => setResetPasswordEmail(event.target.value)}
      />

      <div>
        <button className="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
      {isPasswordReset && <p>check email for password reset link</p>}
      {passwordResetError && <p className="has-text-danger">{passwordResetError}</p>}
    </div>

  )

}


export default ForgotPassword
