import { useState } from "react";
import PropTypes from "prop-types";
import { Alert } from "../../components/alerts/Alert";

const meta = {
  title: "Design System/Organisms/Alerts",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "warning", "info"],
      description: "Type of the alert",
    },
    title: { control: "text", description: "Title of the alert" },
    description: { control: "text", description: "Description of the alert" },
    dismissible: { control: "boolean", description: "Whether the alert is dismissible" },
    autoDismissTime: { control: "number", description: "Time in milliseconds to auto dismiss the alert" },
  },
};

export default meta;

const AlertTemplate = ({ type, title, description, dismissible, autoDismissTime }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-80">
      {isVisible && (
        <Alert
          type={type}
          title={title}
          description={description}
          dismissible={dismissible}
          onDismiss={handleDismiss}
          autoDismissTime={autoDismissTime}
        />
      )}
    </div>
  );
};

AlertTemplate.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  dismissible: PropTypes.bool,
  autoDismissTime: PropTypes.number,
};

export const SuccessAlert = () => (
  <AlertTemplate
    type="success"
    title="Success Alert"
    description="This is a success alert."
    dismissible={true}
    autoDismissTme={5000}
  />
);

export const ErrorAlert = () => (
  <AlertTemplate
    type="error"
    title="Error Alert"
    description="This is an error alert."
    dismissible={true}
    autoDismissTime={5000}
  />
);

export const WarningAlert = () => (
  <AlertTemplate
    type="warning"
    title="Warning Alert"
    description="This is a warning alert."
    dismissible={true}
    autoDismissTime={5000}
  />
);

export const InfoAlert = () => (
  <AlertTemplate
    type="info"
    title="Info Alert"
    description="This is an info alert."
    dismissible={true}
    autoDismissTime={5000}
  />
);

export const NoAutoDismissAlert = () => (
  <AlertTemplate
    type="success"
    title="Success Alert"
    description="This is a NO AUTO DISMISS alert."
    dismissible={true}
  />
);
