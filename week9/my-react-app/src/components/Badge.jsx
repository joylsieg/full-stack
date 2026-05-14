function Badge({ children, variant = 'default', pill = false }) {
    const styles = {
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: pill ? '999px' : '4px',
        fontSize: '0.875rem',
        fontWeight: 600
    };
    
    return <span style={styles}>{children}</span>;
}