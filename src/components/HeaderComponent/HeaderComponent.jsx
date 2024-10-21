import { Col } from "antd";
import React from "react";
import { 
    WrapperHeader, 
    WrapperTextHeader, 
    WrapperHeaderAccout, 
    WrapperTextHeaderSmall 
} from "./style";
import {
    UserOutlined,
    DownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>VANHSHOP</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch 
                        size="large"
                        textButton="Tìm kiếm"
                        placeholder="input search text" 
                        // onSearch={onSearch} 
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <WrapperHeaderAccout>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                                <DownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccout>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent
