function Card({ children, className = '' }) {
    const style = {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };
    
    return <div style={style} className={className}>{children}</div>;
}

function CardHeader({ children }) {
    return <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>{children}</div>;
}

function CardBody({ children }) {
    return <div style={{ padding: '16px' }}>{children}</div>;
}

function CardFooter({ children }) {
    return <div style={{ padding: '16px', borderTop: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>{children}</div>;
}

// Usage
<Card>
    <CardHeader>
        <h3>Card Title</h3>
    </CardHeader>
    <CardBody>
        <p>This is the card content.</p>
    </CardBody>
    <CardFooter>
        <button>Action</button>
    </CardFooter>
</Card>