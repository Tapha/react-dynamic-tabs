import React, { FC } from 'react';

interface DynamicTabProps {
    tabName: string;
}

const DynamicTab: FC<DynamicTabProps> = ({ tabName }) => {
    return <button>{tabName}</button>;
};

export default DynamicTab;
