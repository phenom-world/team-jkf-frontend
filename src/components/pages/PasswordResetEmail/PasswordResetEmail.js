import React from "react";

const PasswordResetEmail = () => {
  return (
    <div>
      You initiate a password reset proccess for your account:
      {/* {{ user.get_username }} */}
      in --Team jkf-- Click the link below to continue:
      {/* {{ protocol }}://{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %} */}
      If the link doesn't work, Please copy and paste the url in a new tab.
      Sincerely, -Team JKF
    </div>
  );
};

export default PasswordResetEmail;
