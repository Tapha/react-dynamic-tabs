import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface Tab {
  hash: string;
  name: string;
  isActive: boolean;
  isDisabled: boolean;
  computedId: string;
}

interface State {
  useUrlFragment: boolean;
  defaultTabHash: string | null;
  activeTabHash: string;
  lastActiveTabHash: string;
  cacheLifetime: number;
  storageKey: string;
  tabs: Tab[];
}

const initialState: State = {
  useUrlFragment: false,
  defaultTabHash: null,
  activeTabHash: "",
  lastActiveTabHash: "",
  cacheLifetime: 5,
  storageKey: `react-dynamic-tabs.cache.${window.location.host}${window.location.pathname}`,
  tabs: [],
};

type Action =
  | { type: "SET_USE_URL_FRAGMENT"; payload: boolean }
  | { type: "SET_DEFAULT_TAB_HASH"; payload: string | null }
  | { type: "ADD_TAB"; payload: Tab }
  | { type: "UPDATE_TAB"; payload: { computedId: string; data: Tab } }
  | { type: "SELECT_TAB"; payload: string }
  | { type: "DELETE_TAB"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_USE_URL_FRAGMENT":
      return { ...state, useUrlFragment: action.payload };
    case "SET_DEFAULT_TAB_HASH":
      return { ...state, defaultTabHash: action.payload };
    case "ADD_TAB":
      return { ...state, tabs: [...state.tabs, action.payload] };
    case "UPDATE_TAB":
      return {
        ...state,
        tabs: state.tabs.map(tab =>
          tab.computedId === action.payload.computedId ? action.payload.data : tab
        ),
      };
    case "SELECT_TAB":
      return {
        ...state,
        activeTabHash: action.payload,
        lastActiveTabHash: action.payload,
        tabs: state.tabs.map(tab => ({
          ...tab,
          isActive: tab.hash === action.payload,
        })),
      };
    case "DELETE_TAB":
      return {
        ...state,
        tabs: state.tabs.filter(tab => tab.computedId !== action.payload),
      };
    default:
      return state;
  }
}

const DynamicTabContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

interface DynamicTabProviderProps {
  children: ReactNode;
}

export const DynamicTabProvider: React.FC<DynamicTabProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DynamicTabContext.Provider value={[state, dispatch]}>
      {children}
    </DynamicTabContext.Provider>
  );
};

export const useDynamicTabContext = () => useContext(DynamicTabContext);
