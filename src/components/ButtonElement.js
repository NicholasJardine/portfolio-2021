import styled from 'styled-components'
import {Link} from 'react-scroll'

const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#FFCEE2')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')
    };
    color: ${({dark}) => (dark ? '#fff' : ' #091C29')
    };
    font-size: ${({fontBig}) => (fontBig ? '20px' : ' 16px')
    };

    outline:none;
    display:flex;
    jusify-conten:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#FFCEE2')};
    }
`;

export default Button