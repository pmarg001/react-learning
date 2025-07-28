import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps>  = ({ 
    text, 
    onClick, 
    variant = 'primary', 
    disabled = false 
}) => {
    const getButtonStyle = () => {
        const baseStyle = {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
        };
    
        switch (variant) {
            case 'primary':
                return {
                    ...baseStyle,
                    backgroundColor: disabled ? '#cccccc' : '#007bff',
                    color: 'white',
                };
            case 'secondary':
                return {
                    ...baseStyle,
                    backgroundColor: disabled ? '#cccccc' : '#6c757d',
                    color: 'white',
                };
            case 'danger':
                return {
                    ...baseStyle,
                    backgroundColor: disabled ? '#cccccc': '#dc3545',
                    color: 'white',
                };
            default:
                return baseStyle;
        };
    };

    return (
        <button 
            style={getButtonStyle()}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
};

export default Button;
