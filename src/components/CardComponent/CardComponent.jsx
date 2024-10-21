import React from 'react';
import { 
    StyleNameProduct, 
    WrapperCardStyle, 
    WrapperDiscountText, 
    WrapperPriceText, 
    WrapperReporText 
} from './style';
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <StyleNameProduct>Balo Laptop For Macbook</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.5</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span> | Đã bán 1000+</span>
            </WrapperReporText>
            <WrapperPriceText>
                490000đ
                <WrapperDiscountText>
                    -50%
                </WrapperDiscountText>   
            </WrapperPriceText> 
        </WrapperCardStyle>
    );
}

export default CardComponent