import { useEffect } from "react";
import { googleAuth } from "../../services";

type CredentialResponse = {
  credential?: string;
  select_by?: string;
};

export const GoogleAuthButton = ({
  text = "signin_with",
  theme = "outline",
}: {
  text?: "signin_with" | "signup_with";
  theme?: "outline" | "filled_black";
}) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  console.log("client id: ",clientId)

  useEffect(() => {
    if (!clientId) {
      console.error("VITE_GOOGLE_CLIENT_ID is not set");
      return;
    }

    const handleCredentialResponse = async (response: CredentialResponse) => {
      const idToken = response.credential;
      if (!idToken) return;

      try {
        const data = await googleAuth(idToken);
        console.log(data.email, data.token);
      } catch (error) {
        console.error(error);
      }
    };

    const initializeGoogle = () => {
      const container = document.getElementById("google-button");
      if (!container) return;
      container.innerHTML = "";

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(container, {
        theme,
        size: "large",
        width: "100%",
        locale: "en",
        text,
      });
    };

    if (window.google) {
      initializeGoogle();
      return;
    }

    const script = document.querySelector<HTMLScriptElement>(
      'script[src*="accounts.google.com/gsi/client"]',
    );

    if (script) {
      script.addEventListener("load", initializeGoogle);
      return () => script.removeEventListener("load", initializeGoogle);
    }
  }, [clientId, text, theme]);

  return (
    <div
      id="google-button"
      className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    ></div>
  );
};
