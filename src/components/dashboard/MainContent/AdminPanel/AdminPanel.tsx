import React, { useState } from 'react';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const AdminPanel: React.FC = ({ uuid }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [id] = useState(uuid);
    return <div className="admin-panel">Admin panel</div>;
};

export default AdminPanel;
