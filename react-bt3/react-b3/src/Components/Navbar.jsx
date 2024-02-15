import React from 'react'
import { FaBars, FaScrewdriverWrench, FaBookBookmark } from "react-icons/fa6";
import { TbTruckDelivery, TbMinusVertical } from "react-icons/tb";
import { IoDiamond } from "react-icons/io5";
export default function Navbar() {
    return (
        <div>
            <div className="nav-container">
                <a href="" className='menu'><FaBars /><span>Danh mục sản phẩm</span></a>
                <a href=""><TbTruckDelivery /><span>Giao lắp chuyên nghiệp</span></a><TbMinusVertical />
                <a href=""><FaScrewdriverWrench /><span>Bảo hành nhanh gọn</span></a><TbMinusVertical />
                <a href=""><FaBookBookmark /><span>Tổng hợp khuyến mãi</span></a><TbMinusVertical />
                <a href=""><IoDiamond /><span>Nguyễn Kim Luxury</span></a>
            </div>
        </div>
    )
}
