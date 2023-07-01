import React, { useEffect } from "react";
import { useDynamicTabContext } from "../store/dynamicTabs";

interface DynamicTabProps {
  tag?: keyof JSX.IntrinsicElements;
  tabName: string;
}

function generateRandomString(initialString: string, length: number) {
  let result = initialString;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const DynamicTab: React.FC<DynamicTabProps> = ({ tag = "a", tabName }) => {
  const [state, dispatch] = useDynamicTabContext();

  useEffect(() => {
    // Create a new tab and add it to the state
    const newTab = {
      hash: tabName,
      name: tabName,
      isActive: false,
      isDisabled: false,
      computedId: generateRandomString(tabName, 20),
    };
    dispatch({ type: "ADD_TAB", payload: newTab });
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Prevent the default action if the tag is an anchor to handle routing in code
    if (tag === "a") {
      event.preventDefault();
    }

    // Select the tab when it is clicked
    dispatch({ type: "SELECT_TAB", payload: tabName });
  };

  // Find the tab from state.tabs
  const tab = state.tabs.find((tab) => tab.name === tabName);

  // Check if tab is active
  const isActive = tab ? tab.isActive : false;

  return React.createElement(
    tag,
    {
      className: isActive ? "active" : "",
      onClick: handleClick,
    },
    tabName
  );
};

export default DynamicTab;
