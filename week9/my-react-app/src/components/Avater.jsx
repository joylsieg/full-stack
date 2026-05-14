function Avatar({ src, alt, name, size = 40 }) {
    const initials = name
        ? name.split(' ').map(n => n[0]).join('').toUpperCase()
        : '?';
    
    const style = {
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        color: 'white',
        fontWeight: 'bold',
        overflow: 'hidden'
    };
    
    if (src) {
        return (
            <img src={src} alt={alt || name} style={{
                ...style,
                objectFit: 'cover'
            }} />
        );
    }
    
    return <div style={style}>{initials}</div>;
}