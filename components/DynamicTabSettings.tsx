import React, { useEffect } from "react";
import { useDynamicTabContext } from "../store/dynamicTabs";
import expiringStorage from "../store/expiringStorage";

interface Options {
  useUrlFragment: boolean;
  defaultTabHash: string | null;
}

interface DynamicTabSettingsProps {
  options?: Options;
}

const DynamicTabSettings: React.FC<DynamicTabSettingsProps> = ({
  options = { useUrlFragment: false, defaultTabHash: null },
}) => {
  const [state, dispatch] = useDynamicTabContext();

  useEffect(() => {
    // Set the useUrlFragment option in the context's state
    if (options.useUrlFragment !== undefined) {
      dispatch({
        type: "SET_USE_URL_FRAGMENT",
        payload: options.useUrlFragment,
      });
    }

    // Set the defaultTabHash option in the context's state
    if (options.defaultTabHash !== null) {
      dispatch({
        type: "SET_DEFAULT_TAB_HASH",
        payload: options.defaultTabHash,
      });
    }

    // If the useUrlFragment option is false, fetch the default tab hash from the local storage
    if (!options.useUrlFragment && options.defaultTabHash !== null) {
      const defaultTabHash = expiringStorage.get(state.storageKey);

      if (defaultTabHash) {
        dispatch({ type: "SET_DEFAULT_TAB_HASH", payload: defaultTabHash });
      }
    }
  }, []);

  return null;
};

export default DynamicTabSettings;
