import React, { Component } from 'react'
import SanPhamChiTiet from './SanPhamChiTiet';

export default class SanPham extends Component {
    render() {
        let { image, name, price, description } = this.props.item;
        return (
            <div className='col-4 '>
                <img src={image} alt="" width={300} />
                <p>Tên sản phẩm: {name}</p>
                {/* <p>Mô tả: {description}</p> */}
                <p>Giá: {price}</p>
                <button onClick={() => {
                    this.props.setStateModal(this.props.item)
                }} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Xem chi tiết</button>
                <div>
                </div>
            </div>
        )
    }
}
