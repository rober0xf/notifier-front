interface Window {
  google: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (response: {
            credential?: string;
            select_by?: string;
          }) => void;
        }) => void;
        renderButton: (
          element: HTMLElement,
          options: {
            theme?: "outline" | "filled_black";
            size?: "large" | "medium" | "small";
            width?: string | number;
            type?: "standard" | "icon";
            shape?: "rectangular" | "pill" | "circle" | "square";
            text?: "signin_with" | "signup_with" | "continue_with" | "signin";
            logo_alignment?: "left" | "center";
            locale?: string;
          },
        ) => void;
        prompt: () => void;
        disableAutoSelect: () => void;
        revoke: (hint: string, done: () => void) => void;
      };
    };
  };
}
