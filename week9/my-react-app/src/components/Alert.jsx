function Alert({ variant = 'info', message, onDismiss }) {
    const colors = {
        info: '#3498db',
        success: '#2ecc71',
        warning: '#f39c12',
        error: '#e74c3c'
    };
    
    return (
        <div style={{
            backgroundColor: colors[variant],
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
        }}>
            <span>{message}</span>
            {onDismiss && (
                <button onClick={onDismiss} style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1.2rem'
                }}>
                    ✕
                </button>
            )}
        </div>
    );
}