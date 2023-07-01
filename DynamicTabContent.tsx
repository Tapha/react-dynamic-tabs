import React, { FC } from 'react';

interface DynamicTabContentProps {
    tabName: string;
}

const DynamicTabContent: FC<DynamicTabContentProps> = ({ tabName }) => {
    return <button>{tabName}</button>;
};

export default DynamicTabContent;
