import * as React from "react";

interface EmailTemplateProps {
  host: string;
  url: string;
}

export const SignInTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  host,
  url,
}) => (
  <div>
    <h1>Welcome Back!</h1>
    <p>
      Sign in to &nbsp;
      <span>
        <a href={url}>{host}</a>
      </span>
    </p>
  </div>
);
