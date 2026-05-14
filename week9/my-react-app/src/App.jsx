import React, { useState } from 'react';
import Alert from './components/Alert.jsx';
import Badge from './components/Badge.jsx';
import Avatar from './components/Avater.jsx';
import Card from './components/Card.jsx';

function App() {
    const [alerts, setAlerts] = useState([
        { id: 1, variant: 'success', message: 'Operation completed successfully!' },
        { id: 2, variant: 'warning', message: 'Your subscription is about to expire.' }
    ]);
    
    const dismissAlert = (id) => {
        setAlerts(alerts.filter(alert => alert.id !== id));
    };
    
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px' }}>
            <header style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar name="Alex Developer" size={48} />
                    <h1>Welcome, Alex!</h1>
                </div>
            </header>
            
            {alerts.map(alert => (
                <Alert
                    key={alert.id}
                    variant={alert.variant}
                    message={alert.message}
                    onDismiss={() => dismissAlert(alert.id)}
                />
            ))}
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <Card>
                    <CardHeader>
                        <h3>Project Status</h3>
                    </CardHeader>
                    <CardBody>
                        <p>You have 3 active projects.</p>
                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                            <Badge variant="primary">React</Badge>
                            <Badge variant="secondary">Node.js</Badge>
                            <Badge pill variant="success">3 Active</Badge>
                        </div>
                    </CardBody>
                </Card>
                
                <Card>
                    <CardHeader>
                        <h3>Team Members</h3>
                    </CardHeader>
                    <CardBody>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Avatar name="Alice Smith" size={36} />
                            <Avatar name="Bob Johnson" size={36} />
                            <Avatar name="Charlie Brown" size={36} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}