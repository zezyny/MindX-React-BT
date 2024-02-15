import React from 'react'
import hotTrend from '../data'
import { CiCirclePlus } from "react-icons/ci";
export default function HotTrend() {
    const renderHot = () => {
        return hotTrend.map((item) => {
            return <div key={item.name} className='product'>
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <h4>{Number(item.price).toLocaleString()}đ</h4>
                <div className='discount'><span>{Math.round((Number(item.price) / ((100 - Number(item.discount)) / 100))).toLocaleString()}đ</span><span className='discount-tag'>-{item.discount}%</span></div>
                <p>Chipset: {item.chip}</p>
                <p>Kích thước màn hình: {item.sizeScreen}</p>
                <p>RAM: {item.ram}GB</p>
                <p>Bộ nhớ trong: {item.rom}GB</p>
                <a href=""><CiCirclePlus /><span>Thêm vào so sánh</span></a>
            </div>
        })
    }
    return (
        <div className='content'>
            <h2>TOP 10 ĐIỆN THOẠI ĐƯỢC YÊU THÍCH NHẤT</h2>
            <div className='render-content'>
                {renderHot()}
            </div>
        </div>
    )
}
