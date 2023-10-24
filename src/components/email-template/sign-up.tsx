import * as React from "react";

interface EmailTemplateProps {
  host: string;
  url: string;
}

export const SignUpTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  host,
  url,
}) => (
  <div>
    <h1>Get Started!</h1>
    <p>
      Sign up to &nbsp;
      <span>
        <a href={url}>{host}</a>
      </span>
    </p>
  </div>
);
