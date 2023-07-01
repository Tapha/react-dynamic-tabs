import React, { FC } from 'react';

interface DynamicTabSettingsProps {
    tabName: string;
}

const DynamicTabSettings: FC<DynamicTabSettingsProps> = ({ tabName }) => {
    return <button>{tabName}</button>;
};

export default DynamicTabSettings;
