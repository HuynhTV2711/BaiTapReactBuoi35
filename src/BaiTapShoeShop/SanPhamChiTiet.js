import React, { Component } from 'react'

export default class SanPhamChiTiet extends Component {
    render() {
        console.log(this.props);
        let { name, price, description, image } = this.props.detail;
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Chi tiết sản phẩm</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className='mt-10'>
                                    <div className='d-flex align-items-center justify-content-center mx-auto'>
                                        <div>
                                            <img src={image} alt="" width={200} />
                                        </div>
                                        <div>
                                            <div>
                                                <p className='fs-5 text-success'>Tên sản phẩm: </p>
                                                <p className='text-primary'>{name}</p>
                                            </div>
                                            <div>
                                                <p className='fs-5 text-success'>Giá: </p>
                                                <p className='text-primary'>{price}</p>
                                            </div>
                                            <div >
                                                <p className='fs-5 text-success'>Mô tả: </p>
                                                <p className='text-primary'>{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
